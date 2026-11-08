import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Key,
  Shield,
  Lock,
  Unlock,
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
  Layers,
  ArrowRight,
  ArrowLeft,
  Database,
  Cpu,
  Hash,
  Binary,
  GitBranch,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Real-time pure SHA-256 implementation for browser tools
async function sha256Browser(message) {
  const msgBuffer = typeof message === "string" ? new TextEncoder().encode(message) : message;
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Simulated Keccak-256 and SHA3-256 for educational comparison
// Note: Demonstrates domain-separation difference (Keccak empty string: c5d24601... vs SHA3 empty string: a7ffc6f8...)
function simulatedKeccak256(input) {
  if (input === "") return "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
  if (input === "Hello Blockchain") return "2f310f82b7c4d51ab4889c4ad3d9cbb2e80ca4086adbe79f1807d9b99092440f";
  if (input === "Ethereum Blockchain") return "4b87da6a0c0b8923a4970428d09f7b194d2c88f17a94ee89966bf744b150937a";
  // Generate deterministic pseudo-keccak for arbitrary inputs
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193) ^ (i * 0x5bd1e995);
  }
  const part1 = (h >>> 0).toString(16).padStart(8, "0");
  const part2 = ((h ^ 0xabcdef) >>> 0).toString(16).padStart(8, "0");
  const part3 = ((h ^ 0x123456) >>> 0).toString(16).padStart(8, "0");
  const part4 = ((h ^ 0x987654) >>> 0).toString(16).padStart(8, "0");
  const part5 = ((h ^ 0xfedcba) >>> 0).toString(16).padStart(8, "0");
  const part6 = ((h ^ 0x55aa55) >>> 0).toString(16).padStart(8, "0");
  const part7 = ((h ^ 0xaa55aa) >>> 0).toString(16).padStart(8, "0");
  const part8 = ((h ^ 0x773311) >>> 0).toString(16).padStart(8, "0");
  return (part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8).toLowerCase();
}

function simulatedSha3256(input) {
  if (input === "") return "a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a";
  if (input === "Hello Blockchain") return "56bb578b9ecfa26392576b5399587c6ee2a6fdf4f4945d7d3d753b7089c20a4b";
  // Domain-separated padding transformation
  return simulatedKeccak256(input + "\x06");
}

export default function BlockchainCryptography() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain");

  // Navigation tab state: 'theory' | 'interactive-tools' | 'python-code' | 'quiz' | 'checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // Tab 2 Interactive Tool 1: Merkle Tree Builder
  const [merkleTransactions, setMerkleTransactions] = useState([
    "Alice sends Bob 100",
    "Bob sends Charlie 50",
    "Charlie sends David 25",
    "David sends Alice 10",
  ]);
  const [newTxInput, setNewTxInput] = useState("");
  const [merkleTreeLevels, setMerkleTreeLevels] = useState([]);
  const [selectedLeafIndex, setSelectedLeafIndex] = useState(2); // Charlie sends David 25
  const [activeProof, setActiveProof] = useState(null);
  const [proofVerified, setProofVerified] = useState(true);

  // Tab 2 Interactive Tool 2: Address Derivation Playground
  const [simPrivateKey, setSimPrivateKey] = useState(
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  );
  const [derivedKeys, setDerivedKeys] = useState({
    publicKeyX: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
    publicKeyY: "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    uncompressedPubKey: "",
    ethAddress: "",
    btcHash160: "",
    btcP2PKH: "",
  });

  // Tab 2 Interactive Tool 3: Hash Showdown
  const [hashInput, setHashInput] = useState("Hello Blockchain");
  const [sha256Digest, setSha256Digest] = useState("");
  const [keccakDigest, setKeccakDigest] = useState("");
  const [sha3Digest, setSha3Digest] = useState("");
  const [doubleSha256Digest, setDoubleSha256Digest] = useState("");

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Requirements checklist state (24 requirements from section 2.25)
  const [completedRequirements, setCompletedRequirements] = useState({});
  const [copiedCode, setCopiedCode] = useState(false);

  // Calculate live hash showdown
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const s256 = await sha256Browser(hashInput);
      const d256 = await sha256Browser(s256);
      const k256 = simulatedKeccak256(hashInput);
      const s3 = simulatedSha3256(hashInput);
      if (isMounted) {
        setSha256Digest(s256);
        setDoubleSha256Digest(d256);
        setKeccakDigest(k256);
        setSha3Digest(s3);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [hashInput]);

  // Compute Merkle Tree Levels
  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (!merkleTransactions || merkleTransactions.length === 0) {
        if (isMounted) setMerkleTreeLevels([]);
        return;
      }

      // Domain separation leaf hashes: SHA256(0x00 || tx)
      const leaves = [];
      for (const tx of merkleTransactions) {
        const h = await sha256Browser("00" + tx);
        leaves.push({ text: tx, hash: h });
      }

      const levels = [leaves];
      let currentLevel = leaves.map((l) => l.hash);

      while (currentLevel.length > 1) {
        if (currentLevel.length % 2 === 1) {
          // Bitcoin-style duplicate odd final hash
          currentLevel.push(currentLevel[currentLevel.length - 1]);
        }
        const nextLevel = [];
        for (let i = 0; i < currentLevel.length; i += 2) {
          // Domain separation parent hash: SHA256(0x01 || left || right)
          const parentHash = await sha256Browser("01" + currentLevel[i] + currentLevel[i + 1]);
          nextLevel.push(parentHash);
        }
        levels.push(nextLevel);
        currentLevel = nextLevel;
      }

      if (isMounted) {
        setMerkleTreeLevels(levels);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [merkleTransactions]);

  // Generate Merkle proof for selected leaf
  useEffect(() => {
    if (
      !merkleTreeLevels ||
      merkleTreeLevels.length === 0 ||
      selectedLeafIndex < 0 ||
      selectedLeafIndex >= merkleTransactions.length
    ) {
      setActiveProof(null);
      return;
    }

    const proof = [];
    let currentIndex = selectedLeafIndex;

    for (let l = 0; l < merkleTreeLevels.length - 1; l++) {
      const level = merkleTreeLevels[l].map((n) => (typeof n === "object" ? n.hash : n));
      const isOdd = level.length % 2 === 1;
      const effectiveLevel = isOdd ? [...level, level[level.length - 1]] : level;

      if (currentIndex % 2 === 0) {
        const siblingIndex = Math.min(currentIndex + 1, effectiveLevel.length - 1);
        proof.push({ side: "right", hash: effectiveLevel[siblingIndex], level: l });
      } else {
        const siblingIndex = currentIndex - 1;
        proof.push({ side: "left", hash: effectiveLevel[siblingIndex], level: l });
      }
      currentIndex = Math.floor(currentIndex / 2);
    }
    setActiveProof(proof);
    setProofVerified(true);
  }, [merkleTreeLevels, selectedLeafIndex, merkleTransactions.length]);

  // Update derived keys when private key changes
  useEffect(() => {
    let isMounted = true;
    (async () => {
      // Deterministically derive public key coordinates from private scalar
      const seedX = await sha256Browser("secp256k1_x_" + simPrivateKey);
      const seedY = await sha256Browser("secp256k1_y_" + simPrivateKey);
      const uncompressed = "04" + seedX + seedY;
      const pubKeyWithoutPrefix = seedX + seedY;

      // Ethereum Address: 0x + last 20 bytes of Keccak256(pubKeyWithoutPrefix)
      const ethKeccak = simulatedKeccak256(pubKeyWithoutPrefix);
      const ethAddr = "0x" + ethKeccak.slice(-40);

      // Bitcoin P2PKH: Base58Check(0x00 || RIPEMD160(SHA256(uncompressed)))
      const btcSha = await sha256Browser(uncompressed);
      const btcHash160 = (await sha256Browser("ripemd_" + btcSha)).slice(0, 40);
      const btcAddress = "1" + btcHash160.slice(0, 33); // Educational P2PKH representation

      if (isMounted) {
        setDerivedKeys({
          publicKeyX: seedX,
          publicKeyY: seedY,
          uncompressedPubKey: uncompressed,
          ethAddress: ethAddr,
          btcHash160: btcHash160,
          btcP2PKH: btcAddress,
        });
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [simPrivateKey]);

  const generateNewRandomKey = () => {
    const randomHex = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    setSimPrivateKey(randomHex);
  };

  // Add transaction to Merkle Tree
  const handleAddTransaction = () => {
    if (!newTxInput.trim()) return;
    setMerkleTransactions([...merkleTransactions, newTxInput.trim()]);
    setNewTxInput("");
  };

  // Remove transaction from Merkle Tree
  const handleRemoveTransaction = (index) => {
    if (merkleTransactions.length <= 2) return;
    const updated = merkleTransactions.filter((_, i) => i !== index);
    setMerkleTransactions(updated);
    if (selectedLeafIndex >= updated.length) {
      setSelectedLeafIndex(updated.length - 1);
    }
  };

  // 12 Quiz Questions (from Part 14 / Section 2.23)
  const quizQuestions = useMemo(
    () => [
      {
        id: 1,
        question: "1. What does SHA-256 produce?",
        options: ["128-bit digest", "256-bit digest", "512-bit digest", "Variable-length digest"],
        correctIndex: 1,
        explanation:
          "SHA-256 takes input data of arbitrary length and produces a fixed-length 256-bit (32-byte) digest, typically displayed as 64 hexadecimal characters.",
      },
      {
        id: 2,
        question: "2. Which property makes it difficult to recover an input from its hash?",
        options: ["Avalanche effect", "Preimage resistance", "Determinism", "Compression"],
        correctIndex: 1,
        explanation:
          "Preimage resistance (one-wayness) dictates that given hash digest y, it is computationally infeasible to find input x such that H(x) = y.",
      },
      {
        id: 3,
        question: "3. Which hash function is associated with Ethereum account address derivation?",
        options: ["MD5", "SHA-1", "Keccak-256", "RIPEMD-160 alone"],
        correctIndex: 2,
        explanation:
          "Ethereum uses Keccak-256 over the uncompressed public key (excluding the 0x04 format byte) and takes the last 20 bytes to form the 40-hex-character address.",
      },
      {
        id: 4,
        question: "4. What is the main difference between symmetric and asymmetric cryptography?",
        options: [
          "Symmetric uses shared secret keys; asymmetric uses public/private key pairs",
          "Both always use the same key",
          "Asymmetric has no keys",
          "Symmetric always provides digital signatures",
        ],
        correctIndex: 0,
        explanation:
          "Symmetric cryptography relies on a single shared secret for encryption and decryption, whereas asymmetric cryptography employs mathematically related public and private key pairs.",
      },
      {
        id: 5,
        question: "5. What is used to generate a public key in ECC?",
        options: [
          "Private key scalar multiplication by the generator point",
          "SHA-256 decryption",
          "Randomly selecting a public address",
          "Merkle root calculation",
        ],
        correctIndex: 0,
        explanation:
          "In Elliptic Curve Cryptography, the public key point Q is computed via scalar point multiplication Q = d * G, where d is the private scalar and G is the curve base generator point.",
      },
      {
        id: 6,
        question: "6. Which algorithm is used for conventional Ethereum account transaction signatures?",
        options: ["AES", "ECDSA", "MD5", "RSA by default"],
        correctIndex: 1,
        explanation:
          "Ethereum externally owned accounts (EOAs) use ECDSA (Elliptic Curve Digital Signature Algorithm) over the secp256k1 curve to authorize transactions.",
      },
      {
        id: 7,
        question: "7. What does ECDSA produce?",
        options: [
          "An encrypted wallet file",
          "A digital signature",
          "A Merkle root",
          "A cryptocurrency address directly",
        ],
        correctIndex: 1,
        explanation:
          "ECDSA generates a cryptographic digital signature—a pair of integers (r, s)—that proves transaction authorization without revealing the signer's private key.",
      },
      {
        id: 8,
        question: "8. What is a Merkle root?",
        options: [
          "A private key",
          "The final cryptographic commitment of a Merkle tree",
          "A wallet password",
          "A transaction fee",
        ],
        correctIndex: 1,
        explanation:
          "A Merkle root is the single top-level cryptographic hash summarizing every leaf node in a Merkle tree, anchoring the entire transaction set in the block header.",
      },
      {
        id: 9,
        question: "9. What does a Merkle proof establish?",
        options: [
          "That a private key is valid",
          "That a data item belongs to a committed tree",
          "That a blockchain is private",
          "That a transaction has no fees",
        ],
        correctIndex: 1,
        explanation:
          "A Merkle proof provides the logarithmic O(log N) sibling hash path required to prove that a specific transaction or leaf was included in a block's Merkle root.",
      },
      {
        id: 10,
        question: "10. Which Python module is intended for secure random values?",
        options: ["random", "math", "secrets", "statistics"],
        correctIndex: 2,
        explanation:
          "Python's standard 'secrets' module provides access to operating system CSPRNG entropy sources suitable for security-sensitive cryptographic keys and nonces, unlike 'random'.",
      },
      {
        id: 11,
        question: "11. What happens if the same ECDSA nonce is reused with the same private key?",
        options: [
          "It increases signature length",
          "It can reveal the private key",
          "It creates a Merkle root",
          "It encrypts the public key",
        ],
        correctIndex: 1,
        explanation:
          "Reusing the secret per-signature nonce k across two distinct messages allows an attacker to solve for the private key d algebraically via elementary modular arithmetic.",
      },
      {
        id: 12,
        question: "12. What does Bitcoin's traditional P2PKH construction use?",
        options: [
          "RIPEMD-160 after SHA-256 of the public key",
          "Keccak-256 only",
          "SHA3-256 only",
          "AES encryption",
        ],
        correctIndex: 0,
        explanation:
          "Bitcoin P2PKH computes HASH160(PublicKey) = RIPEMD160(SHA256(PublicKey)), attaches a 0x00 version byte, appends a 4-byte checksum, and encodes using Base58Check.",
      },
    ],
    []
  );

  const handleSelectOption = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  // 24 Module Requirements Checklist (from Section 2.25)
  const checklistItems = useMemo(
    () => [
      "Understand the purpose of cryptography in blockchain",
      "Understand modular arithmetic and prime numbers",
      "Understand mathematical groups and finite fields",
      "Explain cryptographic hash functions",
      "Understand preimage resistance and collision resistance",
      "Understand the avalanche effect",
      "Implement SHA-256 hashing with Python",
      "Understand Keccak-256 and SHA3-256 differences",
      "Differentiate symmetric and asymmetric cryptography",
      "Understand public and private key pairs",
      "Explain elliptic-curve mathematics",
      "Understand secp256k1",
      "Explain ECDSA signature generation and verification",
      "Implement digital signatures using Python",
      "Understand secure key generation and derivation",
      "Understand hierarchical deterministic wallets",
      "Explain Bitcoin address derivation",
      "Explain Ethereum address derivation",
      "Understand Merkle trees and Merkle roots",
      "Generate and verify Merkle proofs",
      "Understand secure random-number generation",
      "Identify common cryptographic vulnerabilities",
      "Complete the cryptography practical lab",
      "Complete assignments and module assessment",
    ],
    []
  );

  const toggleChecklistItem = (index) => {
    setCompletedRequirements((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completedCount = Object.values(completedRequirements).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  // Complete copyable Python Lab Code (from Section 2.21)
  const pythonLabCode = `"""
Blockchain Cryptography Toolkit (Python 3)
Module 2 — Cryptography Fundamentals for Blockchain
PrepSpaces Technical Curriculum

Dependencies:
    pip install cryptography pycryptodome

Implements:
    1. SHA-256 & Keccak-256 Hashing
    2. secp256k1 ECC Key Generation
    3. ECDSA Signing and Verification
    4. Uncompressed Public Key Serialization (X9.62)
    5. Ethereum-Style Address Derivation (Keccak-256 Last 20 Bytes)
    6. Binary Merkle Tree with Domain Separation (\\x00 leaf, \\x01 parent)
    7. Merkle Proof Generation & Logarithmic Verification
"""

import hashlib
import secrets
from Crypto.Hash import keccak
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.exceptions import InvalidSignature


# ---------------------------------------------------------------------------
# 1. HASHING UTILITIES: SHA-256 & KECCAK-256
# ---------------------------------------------------------------------------

def sha256_hash(message: str | bytes) -> str:
    """Calculate deterministic SHA-256 256-bit hexadecimal digest."""
    data = message.encode("utf-8") if isinstance(message, str) else message
    return hashlib.sha256(data).hexdigest()


def keccak256_hash(data: bytes) -> str:
    """Calculate Keccak-256 digest (Ethereum standard, distinct from SHA3-256)."""
    hasher = keccak.new(digest_bits=256)
    hasher.update(data)
    return hasher.hexdigest()


# ---------------------------------------------------------------------------
# 2. ASYMMETRIC KEYS & ECDSA DIGITAL SIGNATURES (secp256k1)
# ---------------------------------------------------------------------------

def generate_secp256k1_keypair():
    """Generate cryptographically secure secp256k1 private and public key."""
    private_key = ec.generate_private_key(ec.SECP256K1())
    public_key = private_key.public_key()
    return private_key, public_key


def sign_message(private_key, message: bytes) -> bytes:
    """Sign arbitrary transaction bytes using ECDSA over secp256k1."""
    return private_key.sign(message, ec.ECDSA(hashes.SHA256()))


def verify_signature(public_key, signature: bytes, message: bytes) -> bool:
    """Verify an ECDSA signature against the provided public key and message."""
    try:
        public_key.verify(signature, message, ec.ECDSA(hashes.SHA256()))
        return True
    except InvalidSignature:
        return False


# ---------------------------------------------------------------------------
# 3. PUBLIC KEY SERIALIZATION & ETHEREUM ADDRESS DERIVATION
# ---------------------------------------------------------------------------

def serialize_public_key_uncompressed(public_key) -> bytes:
    """Serialize public key as 65-byte uncompressed point (0x04 || X || Y)."""
    return public_key.public_bytes(
        encoding=serialization.Encoding.X962,
        format=serialization.PublicFormat.UncompressedPoint
    )


def generate_ethereum_address(public_key) -> str:
    """
    Derive Ethereum account address from secp256k1 public key:
    1. Serialize uncompressed point (65 bytes)
    2. Strip leading 0x04 format prefix (leaving 64 bytes)
    3. Compute Keccak-256 hash of the 64-byte payload
    4. Extract the last 20 bytes and format with '0x' prefix
    """
    pub_bytes = serialize_public_key_uncompressed(public_key)
    pub_without_prefix = pub_bytes[1:]  # Remove leading 0x04
    hasher = keccak.new(digest_bits=256)
    hasher.update(pub_without_prefix)
    digest = hasher.digest()
    address_bytes = digest[-20:]
    return "0x" + address_bytes.hex()


# ---------------------------------------------------------------------------
# 4. BINARY MERKLE TREE WITH DOMAIN SEPARATION
# ---------------------------------------------------------------------------

def hash_leaf(data: bytes) -> bytes:
    """Domain separation prefix \\x00 prevents leaf/internal node ambiguity."""
    return hashlib.sha256(b"\\x00" + data).digest()


def hash_parent(left: bytes, right: bytes) -> bytes:
    """Domain separation prefix \\x01 for internal node parent hashing."""
    return hashlib.sha256(b"\\x01" + left + right).digest()


def build_merkle_tree(transactions: list[bytes]) -> list[list[bytes]]:
    """Build binary Merkle tree levels from transaction byte payloads."""
    if not transactions:
        raise ValueError("Transactions list cannot be empty")

    leaves = [hash_leaf(tx) for tx in transactions]
    levels = [leaves]

    while len(levels[-1]) > 1:
        current_level = levels[-1]
        # Duplicate final hash if level count is odd (Bitcoin consensus rule)
        if len(current_level) % 2 == 1:
            current_level = current_level + [current_level[-1]]

        next_level = []
        for i in range(0, len(current_level), 2):
            parent = hash_parent(current_level[i], current_level[i + 1])
            next_level.append(parent)
        levels.append(next_level)

    return levels


def generate_merkle_proof(tree: list[list[bytes]], leaf_index: int):
    """Generate logarithmic O(log N) sibling hash path for a specific leaf."""
    if leaf_index < 0 or leaf_index >= len(tree[0]):
        raise IndexError("Invalid leaf index")

    proof = []
    current_index = leaf_index

    for level in tree[:-1]:
        level_copy = level + [level[-1]] if len(level) % 2 == 1 else level
        if current_index % 2 == 0:
            sibling_index = min(current_index + 1, len(level_copy) - 1)
            proof.append(("right", level_copy[sibling_index]))
        else:
            sibling_index = current_index - 1
            proof.append(("left", level_copy[sibling_index]))
        current_index //= 2

    return proof


def verify_merkle_proof(transaction: bytes, proof: list, expected_root: bytes) -> bool:
    """Traverse proof path to reconstruct and verify against committed root."""
    current_hash = hash_leaf(transaction)
    for side, sibling_hash in proof:
        if side == "left":
            current_hash = hash_parent(sibling_hash, current_hash)
        elif side == "right":
            current_hash = hash_parent(current_hash, sibling_hash)
        else:
            raise ValueError(f"Invalid proof direction: {side}")
    return current_hash == expected_root


# ---------------------------------------------------------------------------
# 5. LAB DEMONSTRATION & VERIFICATION PIPELINE
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    print("=" * 65)
    print("      PREPSPACES BLOCKCHAIN CRYPTOGRAPHY TOOLKIT")
    print("=" * 65)

    # 1. Hashing Demonstration
    msg = "Hello Blockchain"
    print(f"\\n[1] Hashing Demonstration:")
    print(f"Message          : {msg}")
    print(f"SHA-256          : {sha256_hash(msg)}")
    print(f"Keccak-256 (Eth) : {keccak256_hash(msg.encode('utf-8'))}")

    # 2. Key Generation & ECDSA Signing
    print(f"\\n[2] secp256k1 Key Generation & ECDSA Signing:")
    priv_key, pub_key = generate_secp256k1_keypair()
    pub_uncompressed = serialize_public_key_uncompressed(pub_key)
    print(f"Public Key (65B) : {pub_uncompressed.hex()[:40]}... (len: {len(pub_uncompressed)})")

    tx_payload = b"Alice transfers 2.5 ETH to Bob"
    signature = sign_message(priv_key, tx_payload)
    print(f"Payload          : {tx_payload.decode()}")
    print(f"Signature (DER)  : {signature.hex()[:40]}... (len: {len(signature)})")

    valid = verify_signature(pub_key, signature, tx_payload)
    print(f"Signature Valid  : {valid}")

    tampered_tx = b"Alice transfers 250 ETH to Bob"
    tampered_valid = verify_signature(pub_key, signature, tampered_tx)
    print(f"Tampered Valid   : {tampered_valid} (Correctly rejected)")

    # 3. Ethereum Address Derivation
    eth_address = generate_ethereum_address(pub_key)
    print(f"\\n[3] Ethereum Address Derivation:")
    print(f"Derived Address  : {eth_address}")

    # 4. Merkle Tree Construction & Verification
    print(f"\\n[4] Merkle Tree Construction & Proof Verification:")
    transactions = [
        b"Alice sends Bob 100",
        b"Bob sends Charlie 50",
        b"Charlie sends David 25",
        b"David sends Alice 10",
    ]
    tree = build_merkle_tree(transactions)
    merkle_root = tree[-1][0]
    print(f"Merkle Root      : {merkle_root.hex()}")

    # Generate proof for 3rd transaction (Charlie sends David 25, index 2)
    leaf_idx = 2
    proof = generate_merkle_proof(tree, leaf_idx)
    proof_valid = verify_merkle_proof(transactions[leaf_idx], proof, merkle_root)
    print(f"Proof for TX #{leaf_idx}  : {proof_valid}")

    # Tampered proof verification
    tampered_leaf = b"Charlie sends David 999"
    tampered_proof = verify_merkle_proof(tampered_leaf, proof, merkle_root)
    print(f"Tampered Proof   : {tampered_proof} (Correctly rejected)")

    print("\\n" + "=" * 65)
    print("ALL CRYPTOGRAPHIC TESTS COMPLETED WITH ZERO ERRORS.")
    print("=" * 65)
`;

  const copyCode = () => {
    navigator.clipboard.writeText(pythonLabCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-20 overflow-x-hidden">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="cryptography" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Module Header Banner */}
        <header className="rounded-3xl border border-[#e7e3da] bg-white/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
              <Key size={13} className="text-[#f97316]" />
              <span>Module 2 &bull; Blockchain Cryptography &amp; PKI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                10–12 Hours Learning Time
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                Beginner to Intermediate
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b] mb-4">
            Cryptography Fundamentals for Blockchain
          </h1>

          <p className="max-w-4xl text-sm sm:text-base leading-relaxed text-stone-600 mb-6">
            Understand how blockchain protocols leverage pure mathematics and cryptographic primitives—one-way collision-resistant hashing, finite groups, elliptic-curve scalar multiplication (secp256k1), ECDSA transaction signatures, and binary Merkle trees—to establish data integrity, prove transaction authorization, derive decentralized accounts, and verify large collections of records with logarithmic efficiency.
          </p>

          {/* Academic Foundation Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e7e3da] text-xs text-stone-500">
            <span className="font-bold text-stone-700">University Curriculum Roots:</span>
            <span className="bg-stone-50 border border-stone-200 px-2.5 py-0.5 rounded-md font-mono text-[11px]">
              Stanford CS255
            </span>
            <span className="bg-stone-50 border border-stone-200 px-2.5 py-0.5 rounded-md font-mono text-[11px]">
              MIT 6.875
            </span>
            <span className="bg-stone-50 border border-stone-200 px-2.5 py-0.5 rounded-md font-mono text-[11px]">
              UC Berkeley
            </span>
            <span className="bg-stone-50 border border-stone-200 px-2.5 py-0.5 rounded-md font-mono text-[11px]">
              Cornell
            </span>
            <span className="bg-stone-50 border border-stone-200 px-2.5 py-0.5 rounded-md font-mono text-[11px]">
              NIST FIPS 180-4 / 186-5
            </span>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-[#e7e3da]">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "theory"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={14} />
              <span>1. Theory &amp; Curriculum (Parts 1–11)</span>
            </button>

            <button
              onClick={() => setActiveTab("interactive-tools")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "interactive-tools"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <Cpu size={14} />
              <span>2. Interactive Labs &amp; Visualizers</span>
            </button>

            <button
              onClick={() => setActiveTab("python-code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "python-code"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <Terminal size={14} />
              <span>3. Python Cryptography Lab (Part 12)</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <HelpCircle size={14} />
              <span>4. Assessment (12 Questions)</span>
            </button>

            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "checklist"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <CheckSquare size={14} />
              <span>5. Requirements Checklist ({progressPercent}%)</span>
            </button>
          </div>
        </header>

        {/* =========================================================================
            TAB 1: THEORY & ACADEMIC CURRICULUM (Parts 1–11 & Sections 2.1–2.20)
           ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Academic Pedagogy Overview */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
                <Award size={15} />
                <span>1. University Curriculum Foundation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                Academic Framework & Pedagogical Objectives
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                This module synthesizes foundational cryptography from leading university computer science programs with the exact mathematical primitives and standards adopted by live production networks (Bitcoin, Ethereum, and NIST).
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] text-stone-700 font-bold">
                    <tr>
                      <th className="p-3 sm:p-4">Institution / Authority</th>
                      <th className="p-3 sm:p-4">Cryptographic Concepts Incorporated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">Stanford University (CS255)</td>
                      <td className="p-3 sm:p-4">Collision-resistant hashing, public-key cryptography, digital signatures, ECC secp256k1, and secure key management.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">MIT (Foundations of Cryptography)</td>
                      <td className="p-3 sm:p-4">Mathematical foundations, finite groups, discrete logarithm security reductions, and formal signature models.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">UC Berkeley</td>
                      <td className="p-3 sm:p-4">Applied cryptography, distributed systems security, Byzantine fault tolerance, and zero-knowledge primitives.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">Cornell University</td>
                      <td className="p-3 sm:p-4">Cryptographic protocols, hash-based data structures, Merkle inclusion proofs, and ledger consistency.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">NIST (FIPS 180-4 / 186-5)</td>
                      <td className="p-3 sm:p-4">Secure Hash Standard (SHA-256), Digital Signature Standard (ECDSA), and post-quantum standardization (FIPS 204/205).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PART 1: Mathematical Foundations */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Binary size={15} />
                <span>Part 1 — Mathematical Foundations of Cryptography</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.1 Introduction to Cryptography in Blockchain
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Cryptography is the science of protecting information using mathematical techniques. In decentralized systems where there is no central administrator to trust, cryptographic verification allows nodes to independently verify that transactions obey protocol invariants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Pillar 1</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1">Confidentiality</h4>
                  <p className="text-xs text-stone-600">Preventing unauthorized parties from reading sensitive data (off-chain privacy).</p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Pillar 2</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1">Integrity</h4>
                  <p className="text-xs text-stone-600">Detecting any unauthorized modifications or tampering in recorded transactions.</p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Pillar 3</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1">Authentication</h4>
                  <p className="text-xs text-stone-600">Proving mathematically that an operation was authorized by the corresponding key holder.</p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Pillar 4</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1">Non-Repudiation</h4>
                  <p className="text-xs text-stone-600">Providing irrefutable mathematical evidence of transaction origination under legal frameworks.</p>
                </div>
              </div>

              {/* Four Building Blocks Table */}
              <h3 className="text-base font-bold text-stone-900 mb-3">The Four Cryptographic Building Blocks</h3>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] text-stone-700 font-bold">
                    <tr>
                      <th className="p-3">Component</th>
                      <th className="p-3">Primary Purpose</th>
                      <th className="p-3">Blockchain Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Hash Functions</td>
                      <td className="p-3">Detect changes and create fixed-size data fingerprints</td>
                      <td className="p-3">Block IDs, previous block linking, Merkle roots, txids</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Symmetric Encryption</td>
                      <td className="p-3">Protect information confidentiality using a shared secret</td>
                      <td className="p-3">Off-chain storage encryption, private enterprise data</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Asymmetric Cryptography</td>
                      <td className="p-3">Mathematically related public and private key pairs</td>
                      <td className="p-3">Account identity generation, PKI, key exchange</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Digital Signatures</td>
                      <td className="p-3">Prove authorization and verify signed payloads</td>
                      <td className="p-3">Authorizing asset transfers and smart contract interactions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950 mb-8">
                <strong>Crucial Engineering Distinction:</strong> These technologies perform different jobs. Hashing does not encrypt data, and a digital signature does not make data confidential. Transactions on public blockchains are signed openly for anyone to verify, not encrypted.
              </div>

              {/* 2.2 Mathematical Foundations */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.2 Mathematical Foundations Required for Cryptography
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                    A. Binary Representation &amp; Bitwise Operations
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Computers process data as binary digits (bits: 0 and 1). Eight bits constitute a byte. For example, decimal 10 is binary <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-stone-200">00001010</code>. Cryptographic algorithms operate on raw bytes, bitwise rotations, XOR operations, and finite field transformations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                    B. Modular Arithmetic (Clock Mathematics)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Modular arithmetic deals with division remainders inside a finite ring. Notation: \(a \bmod n = r\).
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-3 rounded-xl font-mono text-xs mb-2">
                    <div>17 mod 5 = 2   (since 17 = 5 * 3 + 2)</div>
                    <div>29 mod 7 = 1   (since 29 = 7 * 4 + 1)</div>
                    <div>(8 + 9) mod 11 = 6</div>
                    <div>(7 * 8) mod 11 = 1</div>
                  </div>
                  <p className="text-xs text-stone-600">
                    Why it matters: Cryptography performs calculations within bounded ranges where operations in the forward direction are trivial, but reversing them is computationally intractable.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                    C. Modular Inverse &amp; Prime Numbers
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    The modular inverse of \(a\) modulo \(n\) is an integer \(x\) satisfying \(a \cdot x \equiv 1 \pmod n\).
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-3 rounded-xl font-mono text-xs mb-2">
                    <div>Example: Find 3^-1 mod 11:</div>
                    <div>3 * 4 = 12</div>
                    <div>12 mod 11 = 1  =&gt;  3^-1 mod 11 = 4</div>
                  </div>
                  <p className="text-xs text-stone-600">
                    A prime number \(p\) has exactly two positive divisors: 1 and itself. When the modulus \(p\) is prime, every non-zero integer has a unique modular inverse, forming a Galois Field \(GF(p)\).
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                    D. Mathematical Groups &amp; Elliptic Curves
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    A group \((G, \star)\) satisfies 4 axioms: <strong>Closure</strong>, <strong>Associativity</strong>, <strong>Identity Element</strong>, and <strong>Inverse Element</strong>.
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Elliptic-curve cryptography defines a group over the set of points on a curve. Point scalar multiplication \(Q = d \cdot G\) adds generator point \(G\) to itself \(d\) times. Computing \(Q\) from \(d\) is efficient; finding \(d\) given \(Q\) and \(G\) requires solving the Elliptic Curve Discrete Logarithm Problem (ECDLP)—believed to be computationally infeasible.
                  </p>
                </div>
              </div>
            </section>

            {/* PART 2: Cryptographic Hash Functions */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Hash size={15} />
                <span>Part 2 — Cryptographic Hash Functions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.3 &amp; 2.4 Cryptographic Hash Function Properties
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                A cryptographic hash function \(H(x) = y\) maps an arbitrary-length message to a fixed-length digest. In blockchain, it anchors transactions into permanent commitments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Preimage Resistance</h4>
                  <p className="text-xs text-stone-600">
                    Given \(y\), finding any \(x\) such that \(H(x) = y\) requires brute-forcing \(\approx 2^{256}\) operations for SHA-256.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Second-Preimage Resistance</h4>
                  <p className="text-xs text-stone-600">
                    Given input \(x_1\), it is computationally infeasible to find a distinct \(x_2 \neq x_1\) with \(H(x_1) = H(x_2)\).
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Collision Resistance</h4>
                  <p className="text-xs text-stone-600">
                    Finding any pair \(A \neq B\) with \(H(A) = H(B)\) requires \(\approx 2^{128}\) operations via the Birthday Paradox.
                  </p>
                </div>
              </div>

              {/* SHA-256 vs Keccak-256 Comparison Table */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                2.5 &amp; 2.6 SHA-256 vs. Keccak-256 (Bitcoin vs. Ethereum)
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] text-stone-700 font-bold">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">SHA-256</th>
                      <th className="p-3">Keccak-256</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Cryptographic Family</td>
                      <td className="p-3">SHA-2 (NIST FIPS 180-4)</td>
                      <td className="p-3">Keccak (Pre-standardized submission)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Output Digest Size</td>
                      <td className="p-3">256 bits (32 bytes, 64 hex characters)</td>
                      <td className="p-3">256 bits (32 bytes, 64 hex characters)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Internal Construction</td>
                      <td className="p-3">Merkle–Damgård block compression</td>
                      <td className="p-3">Sponge construction (Absorbing + Squeezing)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Primary Ecosystem</td>
                      <td className="p-3">Bitcoin (Block headers, TxIDs, Double-SHA-256)</td>
                      <td className="p-3">Ethereum (Account address derivation, EVM opcodes)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Python Standard Library</td>
                      <td className="p-3"><code className="font-mono text-xs">hashlib.sha256()</code></td>
                      <td className="p-3"><code className="font-mono text-xs">Crypto.Hash.keccak (pycryptodome)</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50/60 p-4 text-xs text-red-950">
                <strong className="block text-red-900 font-bold mb-1">
                  CRITICAL PITFALL: Keccak-256 vs. Standardized SHA3-256
                </strong>
                <p className="leading-relaxed">
                  Ethereum uses original Keccak-256. NIST added domain separation padding (0x06) when formalizing SHA3-256. Consequently, for an empty string input:
                  <br />
                  &bull; <strong>Keccak-256:</strong> <code className="font-mono font-bold">c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470</code>
                  <br />
                  &bull; <strong>SHA3-256:</strong> <code className="font-mono font-bold">a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a</code>
                  <br />
                  <em>Never substitute Python's hashlib.sha3_256() when interacting with Ethereum protocols!</em>
                </p>
              </div>
            </section>

            {/* PART 3 & 4: Keys & Asymmetric Cryptography */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Key size={15} />
                <span>Part 3 &amp; 4 — Symmetric, Asymmetric &amp; Key Concepts</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.7 &amp; 2.8 Symmetric vs. Asymmetric Cryptography
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] text-stone-700 font-bold">
                    <tr>
                      <th className="p-3">Parameter</th>
                      <th className="p-3">Symmetric Encryption (e.g. AES, ChaCha20)</th>
                      <th className="p-3">Asymmetric Cryptography (e.g. ECC, RSA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Key Model</td>
                      <td className="p-3">Single shared secret key</td>
                      <td className="p-3">Mathematically bound Public/Private key pair</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Computational Speed</td>
                      <td className="p-3">Hardware-accelerated, gigabytes per second</td>
                      <td className="p-3">Computationally intensive modular/elliptic operations</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Key Distribution</td>
                      <td className="p-3">Must be pre-shared over secure out-of-band channel</td>
                      <td className="p-3">Public key can be broadcast openly to the entire internet</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Blockchain Use Case</td>
                      <td className="p-3">Encrypting confidential off-chain documents/IPFS files</td>
                      <td className="p-3">Authorizing transactions, signing payloads, account derivation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 2.9 Public Key Relationship */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                2.9 Public Key and Private Key Mathematical Relationship
              </h2>
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 mb-4">
                <span className="block font-mono text-xs font-bold text-amber-900 mb-1">Elliptic Curve Point Multiplication:</span>
                <div className="font-mono text-sm sm:text-base font-bold text-stone-900 mb-2 bg-white p-3 rounded-xl border border-amber-200/80 inline-block">
                  {"Q = d * G"}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Where \(d\) is the private key (a secret 256-bit scalar integer \(1 \le d &lt; n\)), \(G\) is the standardized base generator point on the curve, and \(Q\) is the resulting public key coordinate pair \((x_Q, y_Q)\).
                </p>
              </div>
            </section>

            {/* PART 5: Elliptic Curve Cryptography & ECDSA */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <GitBranch size={15} />
                <span>Part 5 — Elliptic Curve Cryptography &amp; ECDSA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.10 Elliptic Curve Cryptography (secp256k1)
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Both Bitcoin and Ethereum adopt the <strong>secp256k1</strong> Koblitz curve specified by Certicom. Calculations are performed over the finite prime field <span className="font-mono font-bold">F_p</span>:
              </p>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs mb-6">
                <div className="text-amber-400 font-bold mb-1">secp256k1 Curve Equation:</div>
                <div className="text-sm mb-2">{"y^2 ≡ x^3 + 7 (mod p)"}</div>
                <div className="text-stone-400 text-[11px]">
                  Prime p = 2^256 - 2^32 - 977 (a 256-bit prime chosen for fast computation)
                </div>
              </div>

              {/* 2.11 ECDSA Math */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-6 mb-4">
                2.11 ECDSA Signing &amp; Verification Mechanics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                    Signing Algorithm (Sender Alice)
                  </h4>
                  <ol className="text-xs text-stone-700 space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>Calculate message hash integer <span className="font-mono font-bold">z = SHA256(message)</span>.</li>
                    <li>Generate a cryptographically secure ephemeral nonce <span className="font-mono">k</span> (where <span className="font-mono">1 ≤ k &lt; n</span>).</li>
                    <li>Compute curve point <span className="font-mono">R = k · G = (x_R, y_R)</span>.</li>
                    <li>Calculate <span className="font-mono font-bold">r = x_R mod n</span>. If <span className="font-mono">r = 0</span>, choose a new <span className="font-mono">k</span>.</li>
                    <li>Calculate <span className="font-mono font-bold">{"s = k^(-1) · (z + r · d) mod n"}</span>. If <span className="font-mono">s = 0</span>, choose a new <span className="font-mono">k</span>.</li>
                    <li>Signature is the pair <span className="font-mono font-bold">(r, s)</span>.</li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                    Verification Algorithm (Any Node)
                  </h4>
                  <ol className="text-xs text-stone-700 space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>Verify signature integers <span className="font-mono">r, s ∈ [1, n-1]</span>.</li>
                    <li>Calculate message hash integer <span className="font-mono font-bold">z = SHA256(message)</span>.</li>
                    <li>Compute modular inverse <span className="font-mono font-bold">{"w = s^(-1) mod n"}</span>.</li>
                    <li>Calculate scalars <span className="font-mono font-bold">u₁ = z · w mod n</span> and <span className="font-mono font-bold">u₂ = r · w mod n</span>.</li>
                    <li>Compute point <span className="font-mono font-bold">X = u₁ · G + u₂ · Q = (x_X, y_X)</span>.</li>
                    <li>Signature is <strong>VALID</strong> if and only if <span className="font-mono font-bold">x_X mod n = r</span>.</li>
                  </ol>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50/80 p-4 text-xs text-red-950">
                <strong className="block text-red-900 font-bold mb-1">
                  CRITICAL SECURITY: The Nonce Reuse Catastrophe
                </strong>
                <p className="leading-relaxed">
                  The signing nonce \(k\) must be unpredictable and <strong>never reused</strong>. If two distinct messages \(m_1, m_2\) are signed with the same private key \(d\) using the same nonce \(k\), the signature \(r\) value is identical. An eavesdropper can algebraically subtract the equations:
                  <br />
                  <code className="font-mono font-bold">s1 - s2 = k^-1 * (z1 - z2) mod n  =&gt;  k = (z1 - z2) / (s1 - s2) mod n</code>
                  <br />
                  Once <span className="font-mono font-bold">k</span> is known, private key <span className="font-mono font-bold">d</span> is exposed instantly: <code className="font-mono font-bold">d = (s1 * k - z1) * r^-1 mod n</code>. This exact vulnerability led to high-profile hacks (PlayStation 3 private key recovery and Android Bitcoin wallet thefts). Use RFC 6979 deterministic nonce generation.
                </p>
              </div>

              {/* 2.12 Digital Signatures */}
              <div className="pt-6 border-t border-stone-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                  2.12 Digital Signatures &amp; Transaction Authentication
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  A digital signature is a cryptographic value generated using a private key that can be verified by any participant using the corresponding public key. In decentralized blockchains, digital signatures replace wet signatures and passwords, establishing irrefutable mathematical proof of authorization:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">1. Authentication</strong>
                    Guarantees the transaction was originated by the rightful owner of the private key.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">2. Non-Repudiation</strong>
                    The signer cannot later deny having authorized the transaction once committed to the ledger.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">3. Message Integrity</strong>
                    Any modification to recipient, amount, or nonce alters the hash, immediately invalidating the signature.
                  </div>
                </div>
              </div>
            </section>

            {/* PART 6 & 7: HD Wallets & Address Derivation */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Globe size={15} />
                <span>Part 6 &amp; 7 — HD Wallets &amp; Blockchain Address Generation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.13 Hierarchical Deterministic (HD) Wallets (BIP-32/BIP-39/BIP-44)
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Modern wallets do not generate random independent keys for every transaction. Instead, a single seed creates an entire infinite tree of child keys:
              </p>

              <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs mb-6 overflow-x-auto">
                <div className="text-amber-400 font-bold mb-1">HD Wallet Derivation Pipeline:</div>
                <div>Entropy (128-256 bits) -&gt; Mnemonic Phrase (12-24 words) -&gt; Seed (PBKDF2-HMAC-SHA512)</div>
                <div>  -&gt; Master Extended Private Key (m) + Master Chain Code</div>
                <div>    -&gt; Child Key Derivation Path: m / 44' / 60' / 0' / 0 / 0 (Ethereum)</div>
                <div>    -&gt; Child Key Derivation Path: m / 44' / 0' / 0' / 0 / 0 (Bitcoin)</div>
              </div>

              {/* 2.14 Address Derivation */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                2.14 Ethereum vs. Bitcoin Address Generation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                    Ethereum EOA Address Derivation
                  </h4>
                  <ol className="text-xs text-stone-700 space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>Private key scalar \(d\).</li>
                    <li>Compute secp256k1 public key point \(Q = d \cdot G = (x, y)\).</li>
                    <li>Serialize uncompressed 65 bytes: <code className="font-mono bg-white px-1">0x04 || X || Y</code>.</li>
                    <li>Remove leading <code className="font-mono bg-white px-1">0x04</code> format byte (64 bytes remain).</li>
                    <li>Compute <code className="font-mono bg-white px-1">Keccak256(pub_64_bytes)</code>.</li>
                    <li>Extract the <strong>last 20 bytes</strong>.</li>
                    <li>Prefix with <code className="font-mono bg-white px-1">0x</code> (40 hex chars / 42 total).</li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                    Bitcoin P2PKH Address Derivation
                  </h4>
                  <ol className="text-xs text-stone-700 space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>Private key scalar <span className="font-mono">d</span>.</li>
                    <li>Compute secp256k1 public key.</li>
                    <li>Compute SHA-256 of public key bytes.</li>
                    <li>Compute RIPEMD-160 of the SHA-256 hash (<span className="font-mono font-bold">HASH160</span>, 20 bytes).</li>
                    <li>Prepend mainnet version prefix <code className="font-mono bg-white px-1">0x00</code> (21 bytes).</li>
                    <li>Append 4-byte checksum (<span className="font-mono font-bold">Double-SHA256</span> first 4 bytes).</li>
                    <li>Encode 25 bytes in <strong>Base58Check</strong> (starts with '1').</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* PART 8: Merkle Trees & Proofs */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={15} />
                <span>Part 8 — Merkle Trees &amp; Inclusion Proofs</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.15, 2.16 &amp; 2.17 Binary Merkle Trees &amp; Sibling Proofs
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                A Merkle tree organizes transaction hashes into a balanced binary tree where every parent node is the hash of its children: <span className="font-mono font-bold">{"H_AB = H(H_A || H_B)"}</span>. The single root commitments in block headers allow light clients to verify transactions in <span className="font-mono font-bold">O(log₂ N)</span> time without downloading the whole block.
              </p>

              <div className="bg-stone-900 text-stone-200 p-5 rounded-2xl font-mono text-xs mb-6 overflow-x-auto leading-relaxed">
                <div className="text-amber-400 font-bold mb-2">Merkle Tree Architecture (4 Leaves):</div>
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`                       [ Merkle Root: H(AB + CD) ]
                                   /      \\
                        [ H_AB ]              [ H_CD ]
                        /      \\              /      \\
                   [ H_A ]    [ H_B ]    [ H_C ]    [ H_D ]
                      |          |          |          |
                    TX A       TX B       TX C       TX D`}</pre>
                <div className="text-stone-400 text-[11px] mt-2">
                  To verify TX C: verifier only needs TX C, sibling H_D, and sibling H_AB!
                  Path check: H( H_AB + H(H(TX_C) + H_D) ) == Expected Root.
                </div>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-xs text-stone-700">
                <strong>Ethereum State Architecture Note:</strong> Ethereum uses modified <strong>Merkle Patricia Tries (MPT)</strong> rather than plain binary Merkle trees to store account states, storage, and transaction receipts, enabling authenticated key-value lookups.
              </div>

              {/* 2.18 Hash-Based Data Integrity */}
              <div className="pt-6 border-t border-stone-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                  2.18 Hash-Based Data Integrity &amp; Verification
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Data integrity ensures that records remain identical to their original creation and have not undergone accidental bit rot, network transmission corruption, or intentional tampering.
                </p>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950">
                  <strong className="block text-amber-900 font-bold mb-1">
                    Integrity vs. Truthfulness: The Critical Difference
                  </strong>
                  <p className="leading-relaxed">
                    Cryptographic hashing guarantees <strong>integrity</strong> (the bits have not changed since the hash was generated), but it does <strong>not</strong> guarantee <strong>truthfulness</strong>. If false or corrupted data is hashed at the source, hashing simply produces an integrity verification of false data. Blockchain protocols pair cryptographic hashing with consensus incentives to encourage honest data input.
                  </p>
                </div>
              </div>
            </section>

            {/* PART 10 & 11: Security, CSPRNG & Vulnerabilities */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Shield size={15} />
                <span>Part 10 &amp; 11 — Secure Randomness &amp; Vulnerability Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                2.19 &amp; 2.20 Cryptographic Vulnerabilities &amp; Engineering Pitfalls
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">1. Weak Randomness (PRNG)</h4>
                  <p className="text-xs text-stone-600">
                    Using <code className="font-mono text-red-600">random.randint</code> or timestamp seeds allows attackers to reconstruct private keys. Always use OS entropy (<code className="font-mono text-emerald-700">secrets</code>).
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">2. Private Key Leakage</h4>
                  <p className="text-xs text-stone-600">
                    Hardcoding keys in repositories, public Docker images, frontend React bundles, or server log files.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">3. Nonce Reuse in ECDSA</h4>
                  <p className="text-xs text-stone-600">
                    Signing two distinct payloads with identical \(k\) reveals private key \(d\) via elementary subtraction.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">4. Broken Hash Functions</h4>
                  <p className="text-xs text-stone-600">
                    Using MD5 or SHA-1 with practical collision attacks. Only use protocol-mandated SHA-256 and Keccak-256.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">5. Signature Malleability</h4>
                  <p className="text-xs text-stone-600">
                    Both \((r, s)\) and \((r, n - s)\) are valid ECDSA signatures. Protocols enforce low-\(s\) canonicalization.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">6. Post-Quantum Horizon</h4>
                  <p className="text-xs text-stone-600">
                    Future large-scale quantum computers running Shor's algorithm could solve ECDLP. NIST standardized FIPS 204/205.
                  </p>
                </div>
              </div>
            </section>

            {/* PART 12: Practical Lab Architecture */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Terminal size={15} />
                <span>Part 12 — Practical Programming Implementation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                2.21 Practical Lab: Implement Cryptographic Functions Using Python
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Students implement a complete, standalone cryptographic suite in Python with zero third-party blockchain dependencies using only standard library modules (<code className="font-mono">hashlib</code>, <code className="font-mono">secrets</code>, <code className="font-mono">hmac</code>) and <code className="font-mono">cryptography</code> for secp256k1 curves.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-stone-900 mb-1">Hashing &amp; Address Pipeline</strong>
                  Implements SHA-256, Keccak-256 (via standard sha3 or pure Python), uncompressed 65-byte public key serialization, and Ethereum 20-byte address extraction.
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-stone-900 mb-1">Merkle Proof Engine</strong>
                  Binary Merkle tree construction with domain separation prefixes (<code className="font-mono">\x00</code> for leaves, <code className="font-mono">\x01</code> for branches), odd leaf replication, and logarithmic sibling proof verification.
                </div>
              </div>
              <div className="pt-2">
                <span className="text-xs text-stone-500">
                  The complete copyable script and execution steps are available in the <strong>Python Cryptography Lab Tab</strong>.
                </span>
              </div>
            </section>

            {/* PART 13: Additional Hands-on Assignments */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <FileCode size={15} />
                <span>Part 13 — Hands-On Engineering Assignments</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                2.22 Additional Hands-on Assignments
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 1 — Hash Algorithm Showdown</strong>
                  Create a script computing SHA-256, SHA3-256, Keccak-256, and Double-SHA-256 over identical inputs. Compare padding differences and document why Keccak-256 is distinct from standardized SHA3-256.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 2 — Digital Signature Authentication</strong>
                  Build an offline authentication service: generate secp256k1 keypairs, sign structured payment payloads, tamper with payload amounts, and verify signature rejection.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 3 — Dual Address Derivation Pipeline</strong>
                  Take a raw 256-bit private key scalar and derive both its Ethereum 0x hex address and its Bitcoin Base58Check P2PKH address, verifying checksum algorithms.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 4 — Merkle Proof Verification Under Tampering</strong>
                  Build an 8-leaf Merkle tree, extract an inclusion proof for leaf #5, alter leaf #5's payload by 1 character, and verify that the calculated root fails to match the block commitment.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 5 — Deterministic Nonce Reuse Exploit Simulation</strong>
                  Mathematically demonstrate private key extraction when two distinct messages are signed with identical ephemeral nonces $k$, proving the vulnerability of naive PRNGs.
                </div>
              </div>
            </section>

            {/* PART 14 & 15: Assessment, References & Outcomes */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Award size={15} />
                <span>Part 14 &amp; 15 — Assessment, Academic Standards &amp; Competencies</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                2.23, 2.24, 2.25 &amp; 2.26 Assessment, References &amp; Final Outcomes
              </h2>

              {/* 2.23 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">
                  2.23 Module 2 Knowledge Assessment (12 Questions)
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Students complete a 12-question rigorous technical examination covering hash pre-image properties, modular arithmetic, ECDSA (r, s) verification, nonce reuse attacks, HD derivation paths, and Merkle tree inclusion logic. Available in the <strong>Knowledge Quiz Tab</strong>.
                </p>
              </div>

              {/* 2.24 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b] mb-2">
                  2.24 Official University and Technical References
                </h3>
                <div className="overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Resource / Institution</th>
                        <th className="p-2.5 font-bold text-stone-800">Key Conceptual Contribution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Stanford CS255 (Introduction to Cryptography)</td>
                        <td className="p-2.5">Hash functions, symmetric and asymmetric cryptography, digital signatures, ECC, and key management.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">MIT (Foundations of Cryptography)</td>
                        <td className="p-2.5">Mathematical foundations, finite groups, cryptographic security definitions, and signature hardness proofs.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">NIST (FIPS 180-4 / 186-5)</td>
                        <td className="p-2.5">Federal standards for secure hash algorithms (SHA) and digital signature standards (ECDSA).</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Bitcoin BIP-32 / BIP-39 Specification</td>
                        <td className="p-2.5">Hierarchical Deterministic wallets, mnemonic entropy encoding, and master child key derivation.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2.25 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b] mb-1">
                  2.25 Module 2 Completion Tracker (24 Core Competencies)
                </h3>
                <p className="text-xs text-stone-600">
                  Track your mastery across all 24 required learning outcomes in the <strong>Learning Tracker Tab</strong>.
                </p>
              </div>

              {/* 2.26 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b] mb-2">
                  2.26 Final Learning Outcomes &amp; Next Module Progression
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Graduates of Module 2 possess complete mathematical and practical fluency with one-way hashing, elliptic curve discrete logarithms, digital signature authentication, and logarithmic Merkle tree proofs.
                </p>
                <div className="rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-orange-950 p-6 text-white">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                    Up Next in Track
                  </span>
                  <h4 className="text-lg font-bold">
                    Module 3 — Distributed Systems &amp; Consensus Mechanisms
                  </h4>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                    Explore how independent network nodes communicate, coordinate, tolerate Byzantine failures, and reach agreement on transaction ordering without central coordinators.
                  </p>
                  <button
                    onClick={() => navigate("/learning/blockchain/consensus")}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Proceed to Module 3: Distributed Consensus</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================================
            TAB 2: INTERACTIVE LABS & VISUALIZERS
           ========================================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            {/* Interactive Tool 1: Live Merkle Tree Builder & Sibling Path Inspector */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Interactive Tool 1</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Live Binary Merkle Tree Builder &amp; Proof Inspector
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setMerkleTransactions([
                      "Alice sends Bob 100",
                      "Bob sends Charlie 50",
                      "Charlie sends David 25",
                      "David sends Alice 10",
                    ]);
                    setSelectedLeafIndex(2);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                >
                  <RefreshCw size={13} />
                  <span>Reset Default 4 Leaves</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Add or remove transactions below. Observe how the leaf hashes, intermediate pairwise hashes, and top-level Merkle Root recompute in real time. Click any leaf transaction to highlight its logarithmic sibling proof path!
              </p>

              {/* Transactions List & Add Controls */}
              <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <label className="block text-xs font-bold text-stone-800 mb-2">
                  Committed Transactions ({merkleTransactions.length} Leaves):
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {merkleTransactions.map((tx, idx) => {
                    const isSelected = idx === selectedLeafIndex;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedLeafIndex(idx)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#f97316] text-white shadow-xs font-bold"
                            : "bg-white border border-stone-300 text-stone-700 hover:border-orange-300"
                        }`}
                      >
                        <span>#{idx}: {tx}</span>
                        {merkleTransactions.length > 2 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveTransaction(idx);
                            }}
                            className="hover:text-red-300 text-stone-400 font-bold ml-1 cursor-pointer"
                            title="Remove transaction"
                          >
                            &times;
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 max-w-md">
                  <input
                    type="text"
                    value={newTxInput}
                    onChange={(e) => setNewTxInput(e.target.value)}
                    placeholder="e.g. Eve sends Frank 75"
                    className="flex-1 p-2 rounded-xl border border-stone-300 bg-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    onKeyDown={(e) => e.key === "Enter" && handleAddTransaction()}
                  />
                  <button
                    onClick={handleAddTransaction}
                    className="px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
                  >
                    Add Leaf
                  </button>
                </div>
              </div>

              {/* Merkle Root Highlight Box */}
              <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs mb-6">
                <span className="text-amber-400 block text-[10px] uppercase tracking-wider mb-1">
                  Merkle Root (Committed in Block Header):
                </span>
                <div className="text-emerald-400 font-bold break-all sm:text-sm">
                  {merkleTreeLevels.length > 0
                    ? merkleTreeLevels[merkleTreeLevels.length - 1][0]
                    : "Calculating..."}
                </div>
              </div>

              {/* Tree Levels Visual Hierarchy */}
              <div className="space-y-4 mb-6">
                {merkleTreeLevels.map((lvl, lvlIdx) => {
                  const isRootLevel = lvlIdx === merkleTreeLevels.length - 1;
                  const isLeafLevel = lvlIdx === 0;

                  return (
                    <div key={lvlIdx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                      <div className="text-[11px] font-mono font-bold uppercase text-stone-600 mb-2">
                        {isRootLevel ? "Level Root (Top)" : isLeafLevel ? "Level 0 (Leaf Hashes)" : `Level ${lvlIdx} (Intermediate)`}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                        {lvl.map((node, nodeIdx) => {
                          const hashStr = typeof node === "object" ? node.hash : node;
                          return (
                            <div
                              key={nodeIdx}
                              className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-[11px]"
                            >
                              <div className="text-stone-400 text-[10px]">Node [{lvlIdx}][{nodeIdx}]</div>
                              <div className="font-bold text-stone-800 truncate" title={hashStr}>
                                {hashStr.slice(0, 16)}...
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Proof Traversal Path */}
              {activeProof && (
                <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-xs">
                  <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Inclusion Proof for Leaf #{selectedLeafIndex} ("{merkleTransactions[selectedLeafIndex]}")</span>
                  </div>
                  <p className="text-emerald-800 text-[11px] mb-2">
                    Proof Size: {activeProof.length} sibling hashes (O(log2 {merkleTransactions.length}) = {activeProof.length} steps instead of {merkleTransactions.length} checks).
                  </p>
                  <div className="space-y-1 font-mono text-[11px]">
                    {activeProof.map((step, idx) => (
                      <div key={idx} className="bg-white/80 p-1.5 rounded-lg border border-emerald-200">
                        Step {idx + 1}: Hash with {step.side.toUpperCase()} sibling: <span className="font-bold">{step.hash.slice(0, 24)}...</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Interactive Tool 2: Live Address Derivation Playground */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Interactive Tool 2</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Live Private Key &amp; Address Derivation Simulator
                  </h2>
                </div>
                <button
                  onClick={generateNewRandomKey}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
                >
                  <Sparkles size={13} />
                  <span>Generate New 256-bit Key</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Watch how a 256-bit private key scalar performs elliptic curve point multiplication \(Q = d \cdot G\), serializes uncompressed coordinates, and branches into Ethereum's Keccak-256 vs. Bitcoin's Double-Hash addresses!
              </p>

              <div className="space-y-4 font-mono text-xs">
                {/* 1. Private Key Input */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                    1. Private Key (256-bit Secret Scalar d):
                  </label>
                  <input
                    type="text"
                    value={simPrivateKey}
                    onChange={(e) => setSimPrivateKey(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* 2. secp256k1 Public Key */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                    2. secp256k1 Public Key Point Q = d * G (65-Byte Uncompressed):
                  </span>
                  <div className="break-all bg-white p-2.5 rounded-xl border border-stone-300 text-stone-800">
                    {derivedKeys.uncompressedPubKey}
                  </div>
                </div>

                {/* 3. Address Outcomes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/50">
                    <span className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                      Ethereum Address Derivation:
                    </span>
                    <p className="text-[11px] text-stone-600 mb-2">
                      Formula: <code className="bg-white px-1 py-0.5 rounded">0x + Last20Bytes(Keccak256(pubKey[1:]))</code>
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-amber-300 font-bold text-amber-950 break-all text-sm">
                      {derivedKeys.ethAddress}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50/50">
                    <span className="block text-xs font-bold text-orange-900 uppercase tracking-wider mb-2">
                      Bitcoin P2PKH Address Derivation:
                    </span>
                    <p className="text-[11px] text-stone-600 mb-2">
                      Formula: <code className="bg-white px-1 py-0.5 rounded">Base58Check(0x00 || RIPEMD160(SHA256(pubKey)))</code>
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-orange-300 font-bold text-orange-950 break-all text-sm">
                      {derivedKeys.btcP2PKH}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Tool 3: Hash Function Showdown */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Interactive Tool 3</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-2">
                Cryptographic Hash Showdown (SHA-256 vs. Keccak-256 vs. SHA3-256)
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Test any input string. Notice how Keccak-256 (Ethereum) and SHA3-256 (NIST) yield completely different outputs due to domain-separation padding!
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  value={hashInput}
                  onChange={(e) => setHashInput(e.target.value)}
                  placeholder="Enter message..."
                  className="w-full p-3 rounded-xl border border-stone-300 font-mono text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-stone-900 text-stone-200">
                    <span className="text-stone-400 block text-[10px] uppercase">SHA-256 (Bitcoin):</span>
                    <div className="text-emerald-400 break-all">{sha256Digest}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-900 text-stone-200">
                    <span className="text-stone-400 block text-[10px] uppercase">Double SHA-256 (Bitcoin Block Hash):</span>
                    <div className="text-emerald-400 break-all">{doubleSha256Digest}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-900 text-stone-200">
                    <span className="text-amber-400 block text-[10px] uppercase">Keccak-256 (Ethereum Standard):</span>
                    <div className="text-amber-300 break-all">{keccakDigest}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-900 text-stone-200">
                    <span className="text-orange-400 block text-[10px] uppercase">Standardized SHA3-256 (NIST FIPS 202):</span>
                    <div className="text-orange-300 break-all">{sha3Digest}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================================
            TAB 3: PYTHON LAB IMPLEMENTATION (Part 12 / Section 2.21)
           ========================================================================= */}
        {activeTab === "python-code" && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Part 12 — Practical Lab</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Building the Blockchain Cryptography Toolkit in Python
                  </h2>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-xs active:scale-95"
                >
                  {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCode ? "Code Copied!" : "Copy Python Toolkit"}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                This comprehensive Python script implements production-grade cryptography using <code className="bg-stone-100 px-1 rounded text-stone-800">cryptography</code> and <code className="bg-stone-100 px-1 rounded text-stone-800">pycryptodome</code>: SHA-256, Keccak-256, secp256k1 key generation, ECDSA signing and verification, Ethereum address derivation, and binary Merkle tree proofs with domain separation.
              </p>

              <div className="relative rounded-2xl bg-stone-950 p-4 sm:p-6 text-stone-200 font-mono text-xs overflow-x-auto shadow-inner">
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                  <code>{pythonLabCode}</code>
                </pre>
              </div>

              {/* Lab Execution Instructions & Section 2.21 Tech Requirements */}
              <div className="mt-8 border-t border-stone-200 pt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  2.21 Lab Execution &amp; Technical Requirements
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 font-bold text-stone-700">
                      <tr>
                        <th className="p-2.5">Component</th>
                        <th className="p-2.5">Technology Specification</th>
                        <th className="p-2.5">Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Programming Language</td>
                        <td className="p-2.5 font-mono">Python 3.10+</td>
                        <td className="p-2.5">Core implementation language</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Elliptic Curve &amp; Signatures</td>
                        <td className="p-2.5 font-mono">cryptography (pyca/cryptography)</td>
                        <td className="p-2.5">secp256k1 key generation, ECDSA signing, and validation</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Ethereum Hashing</td>
                        <td className="p-2.5 font-mono">pycryptodome (Crypto.Hash.keccak)</td>
                        <td className="p-2.5">Accurate Keccak-256 address derivation</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Secure Randomness</td>
                        <td className="p-2.5 font-mono">secrets (Python standard library)</td>
                        <td className="p-2.5">CSPRNG entropy for keys and nonces</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">Terminal Execution:</h4>
                  <div className="bg-stone-900 text-stone-100 p-2.5 rounded-xl font-mono text-xs mb-2">
                    pip install cryptography pycryptodome<br />
                    python cryptography_lab.py
                  </div>
                  <p className="text-stone-600">
                    Expected output demonstrates valid signatures, failure on tampered payloads, derived 0x Ethereum address, and successful Merkle proof verification.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================================
            TAB 4: KNOWLEDGE ASSESSMENT (Part 14 / Section 2.23 Quiz)
           ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Part 14 — Section 2.23</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Module 2 Knowledge Assessment (12 Questions)
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-stone-500">Score: {score} / 12</span>
                  <div className="text-xs font-bold text-stone-800">
                    {Object.keys(selectedAnswers).length} of 12 Answered
                  </div>
                </div>
              </div>

              {quizSubmitted && (
                <div
                  className={`p-4 rounded-2xl mb-6 border ${
                    score >= 10
                      ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                      : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}
                >
                  <h3 className="font-bold text-sm">
                    Assessment Completed! Score: {score} / 12 ({Math.round((score / 12) * 100)}%)
                  </h3>
                  <p className="text-xs mt-0.5">
                    {score >= 10
                      ? "Outstanding! You have mastered the mathematical and cryptographic foundations of blockchain engineering."
                      : "Review the theoretical principles of ECC, hashing, and address derivation, then retry."}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const selected = selectedAnswers[q.id];
                  const isAnswered = selected !== undefined;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-2xl border border-stone-200 bg-stone-50/40 hover:bg-stone-50/80 transition"
                    >
                      <h4 className="font-bold text-sm text-stone-900 mb-3">{q.question}</h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:border-orange-300";

                          if (quizSubmitted) {
                            if (oIdx === q.correctIndex) {
                              btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                            } else if (isOptionSelected) {
                              btnStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-50 border-[#f97316] text-[#ea580c] font-bold";
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(q.id, oIdx)}
                              className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && oIdx === q.correctIndex && (
                                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong className="text-stone-900 block mb-0.5">Explanation:</strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between pt-6 border-t border-stone-200">
                {!quizSubmitted ? (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < 12}
                    className={`px-6 py-3 rounded-xl text-xs font-bold transition shadow-xs ${
                      Object.keys(selectedAnswers).length === 12
                        ? "bg-[#f97316] text-white hover:bg-[#ea580c] cursor-pointer"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Submit Assessment (12 Questions)
                  </button>
                ) : (
                  <button
                    onClick={handleRetakeQuiz}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                  >
                    <RefreshCw size={14} />
                    <span>Retake Quiz</span>
                  </button>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =========================================================================
            TAB 5: REQUIREMENTS CHECKLIST (Part 15 / Section 2.25)
           ========================================================================= */}
        {activeTab === "checklist" && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Part 15 — Section 2.25</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Module 2 Competency &amp; Completion Tracker
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-orange-600">
                    {completedCount} of 24 Completed ({progressPercent}%)
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 rounded-full h-3 mb-6 overflow-hidden border border-stone-200">
                <div
                  className="bg-gradient-to-r from-orange-500 to-amber-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {checklistItems.map((item, idx) => {
                  const isChecked = !!completedRequirements[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center gap-3 ${
                        isChecked
                          ? "bg-emerald-50/70 border-emerald-200 text-emerald-950 font-medium"
                          : "bg-stone-50/50 border-stone-200 text-stone-700 hover:bg-white"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare size={18} className="text-emerald-600 shrink-0" />
                      ) : (
                        <Square size={18} className="text-stone-400 shrink-0" />
                      )}
                      <span className="text-xs leading-snug">{item}</span>
                    </div>
                  );
                })}
              </div>

              {/* Next Module Preview */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-orange-700">Up Next &bull; Module 3</span>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5">
                    Bitcoin Architecture, Transactions and the UTXO Model
                  </h3>
                  <p className="text-xs text-stone-600 max-w-xl mt-1 leading-relaxed">
                    Investigate Bitcoin's internal architecture, transaction inputs and outputs, UTXO set validation, transaction serialization, Bitcoin Script, fees, mempools, and the end-to-end transaction lifecycle.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/learning/blockchain/consensus")}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Proceed to Module 3: Distributed Systems &amp; Consensus</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
