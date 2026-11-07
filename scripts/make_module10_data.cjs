const fs = require('fs');
const path = require('path');

const moduleData = `/**
 * AI ENGINEERING & GENERATIVE AI - MODULE 10
 * Comprehensive University-Grade Curriculum Data: Embeddings, Vector Databases & Semantic Search
 * 
 * Detailed across 10 in-depth curriculum units, 6 hands-on practical labs,
 * capstone project (PrepSpaces Multi-Course Semantic Search & RAG Knowledge Retrieval System),
 * 15 conceptual questions, 10 programming challenges, 5 mathematical exercises with worked solutions,
 * 10 interactive quiz assessments, 6 academic resources, and 20-point competency tracker.
 */

export const VECTOR_DB_MODULE_OVERVIEW = {
  moduleNumber: "10",
  title: "Embeddings, Vector Databases & Semantic Search",
  recommendedDuration: "16–20 hours",
  difficulty: "Advanced",
  primaryLanguage: "Python",
  mainLibraries: "Sentence Transformers, FAISS, ChromaDB, NumPy, Scikit-Learn",
  supportingTools: "BM25, Cross-Encoder, SQLite, PyTorch",
  prerequisites: "Modules 04–09 (Deep Learning, NLP, Transformers, LLMs, Prompt Engineering)",
  learningApproach: "Theory + Mathematics + Python + Vector Database Implementations",
  finalOutcome: "Build a production-grade multi-course semantic search engine & RAG ingestion pipeline",
  centralLearningObjective:
    "Students will master the mathematical foundations and systems engineering of dense embeddings, cosine similarity metrics, FAISS vector indexing (Flat, IVF, HNSW, PQ), ChromaDB persistent vector storage, metadata filtering, hybrid search (Dense + BM25 with Reciprocal Rank Fusion), and document chunking for Retrieval-Augmented Generation."
};

export const VECTOR_DB_ROADMAP_UNITS = [
  { id: "01", title: "Foundations of Embeddings", description: "Why traditional keyword search fails, dense representations, vector spaces, and dimensions (384, 768, 1024, 1536)" },
  { id: "02", title: "Embedding Models & Pooling", description: "Transformer encoders, self-attention representations, Mean pooling, CLS pooling, Max pooling, and Bi-encoders vs Cross-encoders" },
  { id: "03", title: "Similarity Metrics & Mathematics", description: "Cosine similarity formula, dot product, Euclidean distance (L2), normalized vector inner products, and geometric interpretation" },
  { id: "04", title: "Semantic Search Architecture", description: "The 8-stage semantic retrieval workflow, query embeddings, nearest-neighbor matching, and candidate ranking" },
  { id: "05", title: "Vector Databases vs Relational DBs", description: "The 4 core components (ID, Embedding, Document, Metadata), pgvector, and Vector Index vs Vector Database architectures" },
  { id: "06", title: "FAISS & Index Engineering", description: "Facebook AI Similarity Search, IndexFlatL2, IndexFlatIP, IndexIVFFlat (clustering & nprobe), HNSW graphs, and Product Quantization (PQ)" },
  { id: "07", title: "ChromaDB Persistent Storage", description: "Collections, PersistentClient, document ingestion, HNSW cosine distance spaces, and metadata-filtered queries" },
  { id: "08", title: "Document Chunking Strategies", description: "Fixed-size chunking, overlapping chunking, semantic chunking, boundary preservation, and chunk size tradeoffs" },
  { id: "09", title: "Hybrid Search & Reranking", description: "Dense retrieval + Sparse BM25, Reciprocal Rank Fusion (RRF), Cross-Encoder two-stage reranking, and metadata access control" },
  { id: "10", title: "Evaluation & Production Systems", description: "Precision@K, Recall@K, Mean Reciprocal Rank (MRR), NDCG, latency profiling, re-embedding protocols, and PrepSpaces deployment" }
];

export const VECTOR_DB_CURRICULUM_UNITS = [
  {
    id: "01",
    unitNumber: "01",
    title: "Foundations of Embeddings & Dense Representations",
    tagline: "Why Keyword Search Fails and How Vectors Encode Semantic Meaning",
    readTime: "22 min read",
    keyConcepts: ["Embeddings", "Vector Space", "Semantic Meaning", "Dimensionality", "Keyword vs Semantic"],
    content: [
      {
        heading: "1. The Semantic Gap in Traditional Keyword Search",
        text: "Consider a technical learning platform like PrepSpaces hosting thousands of lessons. A student asks: 'How does Java manage memory when objects are created?' A traditional relational database or inverted index looks for the exact lexical tokens ('manage', 'memory', 'objects'). However, the most relevant lesson might be titled 'JVM Heap Allocation and Garbage Collection'. Because none of the exact words match, keyword search fails completely. Embeddings bridge this semantic gap by representing text as numerical vectors in a continuous geometric space where conceptually related ideas sit close to one another.",
        bullets: [
          "The Three Core Technologies: Embeddings convert information into vectors; Vector Databases store and index vectors; Semantic Search retrieves records based on geometric proximity.",
          "Vector Definition: An ordered sequence of real numbers V = [v_1, v_2, ..., v_n] in an n-dimensional coordinate space.",
          "Dimensionality Tradeoffs: Common models output 384 (all-MiniLM-L6-v2), 768 (BGE-base), 1024 (BGE-large), or 1536 (OpenAI text-embedding-3-small) dimensions. Higher dimensions capture richer nuances but require proportionally greater memory and search compute."
        ]
      },
      {
        heading: "2. The Geometry of Semantic Proximity",
        text: "In a well-trained embedding space, sentences sharing semantic intent yield vectors pointing in nearly identical directions: Sentence A ('How does Java manage memory?') and Sentence B ('Explain JVM memory management') have high directional alignment, while Sentence C ('What is the capital of France?') points in an orthogonal direction."
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "generate_embeddings.py",
      code: \`# Generating Dense Text Embeddings with Sentence Transformers
from sentence_transformers import SentenceTransformer

# 1. Load lightweight 384-dimensional embedding model
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

sentences = [
    "How does Java manage memory?",
    "Explain JVM heap allocation and garbage collection.",
    "What is the capital of France?"
]

# 2. Encode to normalized NumPy vectors
embeddings = model.encode(sentences, normalize_embeddings=True)

print(f"Generated {len(embeddings)} vectors of dimension: {embeddings.shape[1]}")
# Output: Generated 3 vectors of dimension: 384\`
    }
  },
  {
    id: "02",
    unitNumber: "02",
    title: "Embedding Models, Internal Mechanics & Pooling",
    tagline: "From Transformer Encoders and Self-Attention to Sentence-Level Pooling",
    readTime: "24 min read",
    keyConcepts: ["Transformer Encoder", "Mean Pooling", "CLS Pooling", "Bi-Encoder", "Cross-Encoder"],
    content: [
      {
        heading: "1. The 6 Internal Stages of an Embedding Model",
        text: "An embedding model converts natural language text into a single vector through a disciplined multi-stage pipeline: (1) Text Input, (2) Subword Tokenization, (3) Initial Token Embeddings, (4) Multi-Layer Transformer Encoder Processing, (5) Sentence-Level Pooling, and (6) L2 Normalization.",
        bullets: [
          "Self-Attention Contextualization: Unlike bag-of-words models, Transformer encoders compute pairwise attention between all tokens, learning that 'garbage' in 'garbage collection' refers to orphaned memory blocks rather than physical refuse.",
          "Mean Pooling: Calculates the element-wise average of all contextualized token hidden states: E = (1/N) * sum(h_i). This is the standard pooling mechanism for Sentence Transformers because it integrates semantic signal across the entire sequence.",
          "CLS Pooling: Takes the hidden state of the first special classification token ([CLS]). Common in BERT-based classification models.",
          "Max Pooling: Takes the maximum value across all token vectors for each individual dimension, capturing the strongest activation per feature."
        ]
      },
      {
        heading: "2. Bi-Encoders versus Cross-Encoders",
        text: "Understanding the architectural distinction between Bi-Encoders and Cross-Encoders is vital for retrieval systems:",
        table: {
          headers: ["Attribute", "Bi-Encoder (Dense Retriever)", "Cross-Encoder (Reranker)"],
          rows: [
            ["Architecture", "Query and Document encoded independently", "Query and Document concatenated into one sequence"],
            ["Vector Storage", "Precomputes and stores document embeddings", "Cannot precompute; must evaluate candidate pairs live"],
            ["Cross-Attention", "No cross-attention between Query and Doc", "Full all-to-all cross-attention across Query and Doc"],
            ["Scalability", "Extremely scalable (millions of docs in FAISS)", "Slow (suitable only for top 20–100 candidates)"],
            ["Accuracy", "High retrieval recall", "Superior ranking precision"],
            ["Production Role", "Stage 1 Candidate Retrieval (Top 100)", "Stage 2 Relevance Reranking (Top 5)"]
          ]
        }
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "mean_pooling_implementation.py",
      code: \`import torch
import torch.nn.functional as F
from transformers import AutoTokenizer, AutoModel

def get_sentence_embedding(text: str, model_name: str = "sentence-transformers/all-MiniLM-L6-v2"):
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModel.from_pretrained(model_name)

    inputs = tokenizer(text, padding=True, truncation=True, return_tensors="pt")
    
    with torch.no_grad():
        outputs = model(**inputs)
        
    # Mean Pooling: Average token vectors considering attention mask
    token_embeddings = outputs.last_hidden_state
    attention_mask = inputs["attention_mask"].unsqueeze(-1).expand(token_embeddings.size()).float()
    sum_embeddings = torch.sum(token_embeddings * attention_mask, 1)
    sum_mask = torch.clamp(attention_mask.sum(1), min=1e-9)
    mean_pooled = sum_embeddings / sum_mask

    # Normalize to unit vector for fast dot-product similarity
    normalized_embedding = F.normalize(mean_pooled, p=2, dim=1)
    return normalized_embedding.squeeze(0).numpy()\`
    }
  },
  {
    id: "03",
    unitNumber: "03",
    title: "Vector Similarity Metrics & Mathematics",
    tagline: "Cosine Similarity Derivation, Euclidean Distance (L2), and Dot Product",
    readTime: "24 min read",
    keyConcepts: ["Cosine Similarity", "Dot Product", "Euclidean Distance", "Vector Normalization", "Metric Selection"],
    content: [
      {
        heading: "1. The Mathematics of Cosine Similarity",
        text: "Cosine similarity calculates the cosine of the angle theta between two non-zero multidimensional vectors A and B. It measures directional orientation rather than absolute vector magnitude:",
        bullets: [
          "Mathematical Formula: CosSim(A, B) = (A . B) / (||A|| * ||B||) = sum(A_i * B_i) / [sqrt(sum A_i^2) * sqrt(sum B_i^2)].",
          "Score Spectrum: +1.0 indicates identical directional orientation (theta = 0 deg); 0.0 indicates orthogonal vectors (theta = 90 deg, zero correlation); -1.0 indicates diametrically opposed orientation (theta = 180 deg).",
          "Magnitude Independence: If A = [1, 2] and B = [2, 4], their cosine similarity is exactly 1.0 even though vector B has double the Euclidean length of A."
        ]
      },
      {
        heading: "2. Euclidean Distance (L2) vs Dot Product vs Cosine",
        text: "Different vector databases and index algorithms rely on specific distance metrics:",
        bullets: [
          "Euclidean Distance (L2): d(A, B) = sqrt(sum (A_i - B_i)^2). Measures absolute geometric distance. Smaller distance indicates greater proximity.",
          "Dot Product (Inner Product): A . B = sum(A_i * B_i). Fast to compute, but sensitive to vector lengths.",
          "The Normalization Equivalence: If vectors A and B are L2-normalized such that ||A|| = 1 and ||B|| = 1, then: A . B = CosSim(A, B). This equivalence allows vector search engines like FAISS to compute exact cosine similarity using blazing-fast matrix dot products!"
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "similarity_metrics.py",
      code: \`import numpy as np

def compute_similarity_metrics(vec_a: np.ndarray, vec_b: np.ndarray):
    # 1. Dot Product
    dot_prod = np.dot(vec_a, vec_b)
    
    # 2. Euclidean Norms (Magnitudes)
    norm_a = np.linalg.norm(vec_a)
    norm_b = np.linalg.norm(vec_b)
    
    # 3. Cosine Similarity
    cosine_sim = dot_prod / (norm_a * norm_b)
    
    # 4. Euclidean Distance (L2)
    euclidean_dist = np.linalg.norm(vec_a - vec_b)
    
    return {
        "dot_product": round(float(dot_prod), 4),
        "cosine_similarity": round(float(cosine_sim), 4),
        "euclidean_distance": round(float(euclidean_dist), 4)
    }

# Example with 3D vectors
v1 = np.array([0.8, 0.6, 0.2])
v2 = np.array([0.7, 0.7, 0.3])
print(compute_similarity_metrics(v1, v2))
# Output: {'dot_product': 1.04, 'cosine_similarity': 0.9852, 'euclidean_distance': 0.1732}\`
    }
  },
  {
    id: "04",
    unitNumber: "04",
    title: "Semantic Search Architecture & Retrieval Workflow",
    tagline: "The 8-Stage Search Lifecycle from Raw Corpus to Top-K Results",
    readTime: "20 min read",
    keyConcepts: ["Semantic Search", "Retrieval Workflow", "Nearest Neighbors", "Top-K Candidates"],
    content: [
      {
        heading: "1. The 8 Stages of Semantic Retrieval",
        text: "Building an effective semantic search engine requires a disciplined two-phase lifecycle: Offline Indexing (executed ahead of time) and Online Querying (executed in real time):",
        bullets: [
          "Stage 1 — Document Collection: Gather domain lessons, interview questions, and documentation.",
          "Stage 2 — Chunking & Preprocessing: Split large documents into coherent semantic passages.",
          "Stage 3 — Embedding Generation: Run document chunks through the embedding model to produce vectors.",
          "Stage 4 — Vector Indexing: Store embeddings alongside IDs and metadata in a vector index.",
          "Stage 5 — Query Ingestion: Student enters natural language question.",
          "Stage 6 — Query Embedding: Encode the query using the exact same model and normalization settings.",
          "Stage 7 — Nearest-Neighbor Search: Compare query vector against indexed vectors to find top-k closest matches.",
          "Stage 8 — Result Hydration: Map top vector IDs back to original text and metadata for display or LLM prompting."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "semantic_search_pipeline.py",
      code: \`from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

documents = [
    "Java garbage collection automatically reclaims unreachable heap objects.",
    "JVM heap memory stores dynamically allocated objects and class instances.",
    "Java stack memory allocates local variables and method invocation frames.",
    "Python utilizes reference counting and a cyclic garbage collector.",
    "Computer networks transmit packet frames across OSI physical and data link layers."
]

# Generate normalized document matrix (5, 384)
doc_embeddings = model.encode(documents, normalize_embeddings=True)

query = "How does Java automatically free unused objects?"
query_embedding = model.encode([query], normalize_embeddings=True)

# Compute cosine similarities via dot product matrix multiplication
scores = np.dot(doc_embeddings, query_embedding.T).flatten()
top_indices = np.argsort(scores)[::-1][:3]

print("--- Top 3 Semantic Search Results ---")
for rank, idx in enumerate(top_indices, 1):
    print(f"Rank {rank} (Score: {scores[idx]:.4f}): {documents[idx]}")\`
    }
  },
  {
    id: "05",
    unitNumber: "05",
    title: "Vector Databases versus Relational Databases",
    tagline: "The 4 Core Vector Record Primitives and Vector Index vs Vector Database",
    readTime: "22 min read",
    keyConcepts: ["Vector Database", "Relational Databases", "pgvector", "Metadata", "Vector Index"],
    content: [
      {
        heading: "1. The 4 Essential Components of a Vector Record",
        text: "In contrast to relational database rows centered on primary and foreign keys, a vector database record is organized around four core attributes: (1) Unique ID (e.g. 'java_lesson_10'), (2) Dense Embedding (e.g. 384-dimensional float array), (3) Original Document Content (raw text passage or URI), and (4) Structured Metadata (e.g. course, module, difficulty, topic, author).",
        bullets: [
          "Why Not Just Traditional Relational Databases?: Relational DBs excel at exact match (B-Trees: WHERE id = 101), but computing nearest neighbors across 1 million 768-dimensional vectors requires specialized geometric indexes (HNSW, IVF).",
          "PostgreSQL with pgvector: An open-source extension adding vector columns and HNSW/IVFFlat indexing directly into Postgres. Ideal for unified relational + vector workloads.",
          "Vector Index vs Vector Database: A vector index (e.g. FAISS) is an in-memory algorithmic search data structure. A vector database (e.g. ChromaDB, Qdrant, Milvus) provides an end-to-end management platform handling persistence, document storage, collection namespaces, dynamic updates, and metadata filtering."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "vector_record_structure.py",
      code: \`# Architectural representation of a Vector Database Record
vector_record = {
    "id": "java_m10_gc_01",
    "embedding": [0.024, -0.115, 0.452, 0.089, -0.312], # 384-dimensional vector
    "document": "Java garbage collection reclaims heap memory by destroying unreachable objects.",
    "metadata": {
        "course_id": "ai-engineering",
        "module_id": "module-10",
        "track": "Java Systems",
        "topic": "Garbage Collection",
        "difficulty": "Intermediate",
        "token_count": 18
    }
}\`
    }
  },
  {
    id: "06",
    unitNumber: "06",
    title: "FAISS: Facebook AI Similarity Search & Index Engineering",
    tagline: "FlatL2, FlatIP, IVF Clustering (nprobe), HNSW Graphs, and Product Quantization",
    readTime: "26 min read",
    keyConcepts: ["FAISS", "IndexFlatL2", "IndexFlatIP", "IndexIVFFlat", "HNSW", "Product Quantization (PQ)"],
    content: [
      {
        heading: "1. What is FAISS and Why is it Necessary?",
        text: "Developed by Meta's Fundamental AI Research (FAIR) team, FAISS is the industry-standard C++/Python library for high-speed similarity search and clustering of dense vectors. When querying 1,000,000 vectors of 768 dimensions, brute-force search requires 768,000,000 floating-point operations per query. FAISS builds specialized index structures to slash search latency to single-digit milliseconds.",
        bullets: [
          "IndexFlatL2: Exact nearest-neighbor search using Euclidean distance. Perfect baseline, zero training needed, but searches all vectors exhaustively (O(N*d)).",
          "IndexFlatIP: Exact maximum inner product search. When embeddings are L2-normalized, inner product equals cosine similarity.",
          "IndexIVFFlat (Inverted File Index): Partitions vector space into Voronoi cells/clusters using k-means. At query time, searches only the closest 'nprobe' centroids rather than the entire dataset. Faster search, but approximate.",
          "HNSW (Hierarchical Navigable Small World): Multi-layer graph-based approximate nearest neighbor index. Provides the highest speed-versus-recall tradeoff in modern production systems.",
          "Product Quantization (PQ): Compresses vectors into compact byte codes by sub-quantizing vector subspaces, slashing memory consumption by 80% to 90% at the cost of slight precision loss."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "faiss_index_types.py",
      code: \`import faiss
import numpy as np

d = 384     # Embedding dimension
nb = 10000  # Database size: 10k vectors
nq = 5      # 5 queries

# Generate synthetic normalized vectors
np.random.seed(42)
xb = np.random.random((nb, d)).astype('float32')
faiss.normalize_L2(xb)

xq = np.random.random((nq, d)).astype('float32')
faiss.normalize_L2(xq)

# 1. Exact Cosine Index (IndexFlatIP)
index_flat = faiss.IndexFlatIP(d)
index_flat.add(xb)
scores_flat, ids_flat = index_flat.search(xq, k=3)
print(f"IndexFlatIP Total Vectors: {index_flat.ntotal}")

# 2. Approximate IVF Index (IndexIVFFlat)
nlist = 50  # 50 Voronoi clusters
quantizer = faiss.IndexFlatIP(d)
index_ivf = faiss.IndexIVFFlat(quantizer, d, nlist, faiss.METRIC_INNER_PRODUCT)
index_ivf.train(xb) # IVF requires training to learn cluster centroids
index_ivf.add(xb)
index_ivf.nprobe = 5 # Search the 5 nearest clusters
scores_ivf, ids_ivf = index_ivf.search(xq, k=3)
print(f"IndexIVF Search completed with nprobe={index_ivf.nprobe}")

# 3. Save & Load Index to Disk
faiss.write_index(index_flat, "prepspaces_java.index")
loaded_index = faiss.read_index("prepspaces_java.index")
print(f"Loaded index successfully. Total: {loaded_index.ntotal}")\`
    }
  },
  {
    id: "07",
    unitNumber: "07",
    title: "ChromaDB: Open-Source AI Retrieval & Storage",
    tagline: "Collections, PersistentClient, HNSW Cosine Spaces, and Metadata Filtering",
    readTime: "24 min read",
    keyConcepts: ["ChromaDB", "PersistentClient", "Collections", "Metadata Filtering", "HNSW Space"],
    content: [
      {
        heading: "1. The Architecture of ChromaDB",
        text: "ChromaDB is a developer-friendly, open-source vector database designed specifically for AI retrieval workloads. Unlike standalone FAISS which requires you to manually track which vector index corresponds to which text file on disk, ChromaDB seamlessly binds Document IDs, Raw Text, Embeddings, and Key-Value Metadata in unified Collection namespaces.",
        bullets: [
          "Collections: Logical isolated namespaces within the database (e.g. 'java_knowledge', 'os_knowledge').",
          "PersistentClient: Initializes an embedded DuckDB/SQLite-backed persistent store on local disk (path='./vector_db') that survives Python restarts.",
          "Built-In HNSW Indexing: Configurable via metadata={'hnsw:space': 'cosine'} to enforce cosine distance metric.",
          "Metadata Filtering: Supports SQL-like structured filters (where={'difficulty': 'Advanced', 'topic': 'Garbage Collection'}) executed directly inside the vector search step."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "chroma_database_setup.py",
      code: \`import chromadb
from sentence_transformers import SentenceTransformer

# 1. Initialize Persistent Chroma Database
client = chromadb.PersistentClient(path="./prepspaces_chroma_db")
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# 2. Create or load collection with Cosine distance metric
collection = client.get_or_create_collection(
    name="prepspaces_curriculum",
    metadata={"hnsw:space": "cosine"}
)

# 3. Ingest documents with structured metadata
docs = [
    "Java garbage collection reclaims unreachable heap objects.",
    "Linux process scheduling uses the Completely Fair Scheduler (CFS).",
    "TCP implements a 3-way handshake to establish reliable connections."
]
metadatas = [
    {"course": "Java", "module": 10, "difficulty": "Intermediate"},
    {"course": "Operating Systems", "module": 4, "difficulty": "Advanced"},
    {"course": "Computer Networks", "module": 6, "difficulty": "Intermediate"}
]
embeddings = model.encode(docs, normalize_embeddings=True).tolist()

collection.add(
    ids=["java_01", "os_01", "net_01"],
    documents=docs,
    metadatas=metadatas,
    embeddings=embeddings
)

# 4. Search with Metadata Filtering (search only Java course)
query = "How does memory get freed?"
q_emb = model.encode([query], normalize_embeddings=True).tolist()

results = collection.query(
    query_embeddings=q_emb,
    n_results=2,
    where={"course": "Java"} # Metadata filter
)

for doc, meta, dist in zip(results["documents"][0], results["metadatas"][0], results["distances"][0]):
    print(f"Match: {doc} | Course: {meta['course']} | Distance: {dist:.4f}")\`
    }
  },
  {
    id: "08",
    unitNumber: "08",
    title: "Document Chunking Strategies for RAG Ingestion",
    tagline: "Fixed-Size, Overlapping, Semantic Chunking, and Context Windows",
    readTime: "22 min read",
    keyConcepts: ["Document Chunking", "Fixed-Size Chunking", "Overlapping Chunking", "Semantic Chunking", "Token Budgets"],
    content: [
      {
        heading: "1. Why Document Chunking is Mandatory for RAG",
        text: "Embedding an entire 100-page Java textbook as a single vector creates a severe dilution problem: the resulting vector averages OOP, JVM internals, multithreading, and network sockets into a generic blob. When a user asks a specific question ('What is the purpose of JVM survivor spaces?'), the overall textbook vector has low similarity to the query. Chunking partitions large documents into granular, coherent retrieval units.",
        bullets: [
          "Fixed-Size Chunking: Splitting text into fixed character or token counts (e.g. 500 tokens). Predictable and fast, but risks cutting sentences in half.",
          "Overlapping Chunking (Sliding Window): Sharing a fixed boundary (e.g. 50–100 tokens) between consecutive chunks. Guarantees that multi-sentence ideas spanning chunk boundaries are not lost.",
          "Semantic Chunking: Dividing text along natural linguistic and structural boundaries: Markdown headings (##, ###), class definitions, function signatures, or topic shifts."
        ]
      },
      {
        heading: "2. Content-Specific Chunking Recommendations",
        table: {
          headers: ["Content Type", "Recommended Chunk Strategy", "Typical Chunk Size"],
          rows: [
            ["Textbooks & Lessons", "Heading-aware recursive markdown chunking", "300–600 tokens (10% overlap)"],
            ["API Documentation", "One function/method/class per chunk", "200–500 tokens (zero overlap)"],
            ["Programming Code", "Function/class scope AST chunking", "100–400 tokens (scoped)"],
            ["FAQs & Interview Q&A", "Single Question + Answer pair per chunk", "100–300 tokens (zero overlap)"],
            ["Legal & Regulatory", "Article/clause section chunking", "400–800 tokens (15% overlap)"]
          ]
        }
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "overlapping_chunker.py",
      code: \`def recursive_overlapping_chunker(text: str, chunk_size: int = 500, overlap: int = 100) -> list[str]:
    """
    Splits text into overlapping word windows to preserve cross-boundary semantic continuity.
    """
    words = text.split()
    chunks = []
    start = 0
    while start < len(words):
        end = min(start + chunk_size, len(words))
        chunk_words = words[start:end]
        chunks.append(" ".join(chunk_words))
        if end == len(words):
            break
        start += (chunk_size - overlap)
    return chunks

sample_text = "Java garbage collection manages memory by scanning the heap for unreachable objects. " * 30
chunks = recursive_overlapping_chunker(sample_text, chunk_size=50, overlap=10)
print(f"Created {len(chunks)} overlapping chunks from text.")\`
    }
  },
  {
    id: "09",
    unitNumber: "09",
    title: "Advanced Retrieval: Hybrid Search, BM25 & Cross-Encoder Reranking",
    tagline: "Dense Vectors + Sparse BM25, Reciprocal Rank Fusion, and Cross-Encoders",
    readTime: "25 min read",
    keyConcepts: ["Hybrid Search", "BM25", "Reciprocal Rank Fusion (RRF)", "Cross-Encoder Reranking"],
    content: [
      {
        heading: "1. The Need for Hybrid Search (Dense + Sparse)",
        text: "While dense embeddings excel at conceptual synonym matching ('JVM memory cleanup' -> 'Garbage Collection'), they frequently stumble on exact identifiers, function names, error codes, and variable names (e.g. 'ConcurrentHashMap.computeIfAbsent()'). Sparse retrieval using BM25 evaluates exact term frequency (TF) and inverse document frequency (IDF). Hybrid search combines dense semantic retrieval with sparse keyword matching to provide the best of both worlds.",
        bullets: [
          "Reciprocal Rank Fusion (RRF): An algorithm that combines ranked candidate lists without requiring score calibration: RRF(d) = sum_{m in Models} [ 1 / (k + rank_m(d)) ], where k is a smoothing constant (typically k = 60).",
          "Cross-Encoder Reranking: In Stage 1, the hybrid retriever gathers top 50 candidates. In Stage 2, a Cross-Encoder evaluates the full Query-Document sequence with deep cross-attention, generating precise relevance scores to select the top 3–5 passages for LLM context injection."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "hybrid_search_rrf.py",
      code: \`def reciprocal_rank_fusion(dense_ranks: list[str], sparse_ranks: list[str], k: int = 60) -> list[tuple[str, float]]:
    """
    Combines dense and sparse ranked lists using Reciprocal Rank Fusion (RRF).
    """
    rrf_scores = {}
    
    # Process dense rankings
    for rank, doc_id in enumerate(dense_ranks, 1):
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k + rank))
        
    # Process sparse (BM25) rankings
    for rank, doc_id in enumerate(sparse_ranks, 1):
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k + rank))
        
    # Sort documents by combined RRF score
    sorted_docs = sorted(rrf_scores.items(), key=lambda item: item[1], reverse=True)
    return sorted_docs

# Example RRF combination
dense_top = ["doc_heap", "doc_gc", "doc_stack"]
sparse_top = ["doc_gc", "doc_heap", "doc_jvm"]
fused_results = reciprocal_rank_fusion(dense_top, sparse_top, k=60)
print("RRF Combined Results:", fused_results)\`
    }
  },
  {
    id: "10",
    unitNumber: "10",
    title: "Retrieval Evaluation, Latency Profiling & Production Re-Embedding",
    tagline: "Precision@K, Recall@K, MRR, Latency Budgets, and Model Migration Protocols",
    readTime: "24 min read",
    keyConcepts: ["Precision@K", "Recall@K", "Mean Reciprocal Rank (MRR)", "NDCG", "Re-Embedding Protocol"],
    content: [
      {
        heading: "1. Information Retrieval Evaluation Metrics",
        text: "A production vector search system requires empirical evaluation metrics to verify retrieval quality against human expert ground truth:",
        bullets: [
          "Precision@K: The fraction of retrieved documents in the top K that are genuinely relevant: Precision@K = (Relevant in Top K) / K.",
          "Recall@K: The fraction of all known relevant documents that were successfully retrieved in the top K: Recall@K = (Relevant in Top K) / (Total Relevant Docs).",
          "Mean Reciprocal Rank (MRR): Evaluates how early the first relevant document appears: MRR = (1/|Q|) * sum [ 1 / rank_first_relevant ]. If the correct lesson appears at Rank 1, RR=1.0; at Rank 2, RR=0.5; at Rank 3, RR=0.33.",
          "NDCG (Normalized Discounted Cumulative Gain): Evaluates multi-grade relevance where results have varying degrees of utility (Highly Relevant = 3, Relevant = 2, Marginally Relevant = 1)."
        ]
      },
      {
        heading: "2. The Critical Production Rule: Re-Embedding Migration",
        text: "If an engineering team migrates from Model A (e.g. all-MiniLM-L6-v2, 384-dim) to Model B (e.g. text-embedding-3-small, 1536-dim), you CANNOT compare Model B query embeddings against Model A document embeddings. Their coordinate spaces, dimensions, and weights are completely incompatible. When updating embedding models, the entire document corpus must be re-embedded and the vector index rebuilt from scratch."
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "retrieval_evaluation_metrics.py",
      code: \`def calculate_retrieval_metrics(retrieved_ids: list[str], ground_truth_relevant: set[str], k: int = 5):
    top_k = retrieved_ids[:k]
    relevant_in_top_k = [doc_id for doc_id in top_k if doc_id in ground_truth_relevant]
    
    # 1. Precision@K
    precision_at_k = len(relevant_in_top_k) / k
    
    # 2. Recall@K
    recall_at_k = len(relevant_in_top_k) / len(ground_truth_relevant) if ground_truth_relevant else 0.0
    
    # 3. Reciprocal Rank (RR)
    reciprocal_rank = 0.0
    for rank, doc_id in enumerate(top_k, 1):
        if doc_id in ground_truth_relevant:
            reciprocal_rank = 1.0 / rank
            break
            
    return {
        f"Precision@{k}": round(precision_at_k, 4),
        f"Recall@{k}": round(recall_at_k, 4),
        "Reciprocal_Rank": round(reciprocal_rank, 4)
    }

# Example evaluation
retrieved = ["java_stack", "java_gc", "java_heap", "java_interfaces"]
ground_truth = {"java_gc", "java_heap"}
print(calculate_retrieval_metrics(retrieved, ground_truth, k=3))\`
    }
  }
];

export const VECTOR_DB_PRACTICAL_LABS = [
  {
    id: "lab-01",
    title: "Lab 01: Vector Math & Cosine Similarity from Scratch",
    difficulty: "Beginner",
    estimatedTime: "45 mins",
    objective: "Implement vector dot product, Euclidean norm, and cosine similarity in pure Python without using third-party math libraries.",
    tasks: [
      "Write a function calculating vector dot product sum(a_i * b_i).",
      "Write a function calculating Euclidean magnitude sqrt(sum x_i^2).",
      "Compute cosine similarity and verify edge cases: orthogonal vectors (0.0) and parallel vectors (1.0).",
      "Verify that normalizing vectors beforehand makes dot product equal to cosine similarity."
    ],
    starterCode: \`import math

def manual_cosine_similarity(vec_a: list[float], vec_b: list[float]) -> float:
    # Student implementation: Pure Python cosine similarity
    pass\`
  },
  {
    id: "lab-02",
    title: "Lab 02: High-Speed Indexing with FAISS IndexFlatIP",
    difficulty: "Intermediate",
    estimatedTime: "60 mins",
    objective: "Load Sentence Transformers, encode 50 technical lessons, build a FAISS IndexFlatIP, and benchmark nearest-neighbor query latency.",
    tasks: [
      "Load sentence-transformers/all-MiniLM-L6-v2.",
      "Encode 50 programming documents into normalized 384-dimensional float32 arrays.",
      "Create faiss.IndexFlatIP(384) and add document vectors.",
      "Execute 10 search queries and return top-3 matching documents.",
      "Persist index to disk with faiss.write_index and reload with faiss.read_index."
    ],
    starterCode: \`import faiss
from sentence_transformers import SentenceTransformer

def build_faiss_engine(documents: list[str]):
    # Student implementation: Encode, index with IndexFlatIP, and search
    pass\`
  },
  {
    id: "lab-03",
    title: "Lab 03: Approximate Search with FAISS IndexIVFFlat",
    difficulty: "Intermediate",
    estimatedTime: "60 mins",
    objective: "Train a FAISS Inverted File Index (IVF) with k-means clustering and evaluate how changing the nprobe parameter impacts search speed vs recall.",
    tasks: [
      "Generate a synthetic database of 10,000 vectors.",
      "Initialize faiss.IndexIVFFlat with 50 Voronoi clusters.",
      "Train the index on representative vectors.",
      "Measure search time and recall across nprobe = 1, 5, 10, and 50.",
      "Plot the trade-off curve between nprobe latency and nearest-neighbor recall."
    ],
    starterCode: \`def evaluate_ivf_nprobe(nb=10000, d=384, nlist=50):
    # Student implementation: Train IVF, sweep nprobe, and record recall
    pass\`
  },
  {
    id: "lab-04",
    title: "Lab 04: Persistent Multi-Course Knowledge Base with ChromaDB",
    difficulty: "Advanced",
    estimatedTime: "75 mins",
    objective: "Construct a persistent ChromaDB database supporting multi-course namespaces, structured metadata, and scoped filtering.",
    tasks: [
      "Initialize chromadb.PersistentClient(path='./prepspaces_db').",
      "Create a collection configured with metadata={'hnsw:space': 'cosine'}.",
      "Ingest 30 lessons across Java, Python, OS, Networks, and AI.",
      "Attach metadata attributes: course, module, difficulty, and token_count.",
      "Execute filtered queries using where={'course': 'Java', 'difficulty': 'Advanced'}."
    ],
    starterCode: \`import chromadb

def setup_chroma_knowledge_base():
    # Student implementation: Persistent Chroma collection with metadata
    pass\`
  },
  {
    id: "lab-05",
    title: "Lab 05: Recursive Overlapping Document Chunker",
    difficulty: "Intermediate",
    estimatedTime: "60 mins",
    objective: "Build an automated text ingestion chunker that splits long educational articles into overlapping token windows with heading preservation.",
    tasks: [
      "Implement a sliding-window text chunker with configurable size and overlap.",
      "Preserve Markdown structural boundaries (##, ### headers).",
      "Calculate chunk token distribution using a subword tokenizer.",
      "Verify zero data truncation across chunk boundaries."
    ],
    starterCode: \`def chunk_markdown_article(article_text: str, chunk_size: int = 400, overlap: int = 50):
    # Student implementation: Heading-aware overlapping chunker
    pass\`
  },
  {
    id: "lab-06",
    title: "Lab 06: Hybrid Search Engine with Reciprocal Rank Fusion",
    difficulty: "Advanced",
    estimatedTime: "90 mins",
    objective: "Combine dense semantic retrieval with sparse BM25 keyword matching and fuse candidate lists using RRF ranking.",
    tasks: [
      "Index technical lessons using Sentence Transformers (Dense).",
      "Index the same lessons using rank_bm25 BM25Okapi (Sparse).",
      "Implement reciprocal rank fusion RRF(d) = sum [ 1 / (60 + rank) ].",
      "Test queries with exact method names ('ConcurrentHashMap.get()') and demonstrate superior hybrid retrieval over pure semantic search."
    ],
    starterCode: \`def run_hybrid_search(query: str, dense_index, bm25_index, k=60):
    # Student implementation: Dense + BM25 with Reciprocal Rank Fusion
    pass\`
  }
];

export const VECTOR_DB_CAPSTONE_PROJECT = {
  title: "PrepSpaces Multi-Course Semantic Search & RAG Retrieval Platform",
  objective: "Build, evaluate, and deploy an enterprise-grade multi-course semantic search engine and RAG ingestion platform that indexes technical courses, executes hybrid retrieval with metadata filtering, reranks candidate passages, and serves grounded technical knowledge.",
  phases: [
    {
      phaseNumber: 1,
      name: "Knowledge Corpus Ingestion & Semantic Chunking",
      tasks: [
        "Curate 100+ comprehensive technical lessons across Java, Python, OS, Networks, AI, and Cybersecurity.",
        "Implement a heading-aware sliding-window chunker with 400-token chunks and 15% overlap.",
        "Extract structured metadata: course_id, module_id, lesson_slug, difficulty, and code_snippet_flag."
      ]
    },
    {
      phaseNumber: 2,
      name: "Embedding Pipeline & Vector Normalization",
      tasks: [
        "Select and benchmark embedding model (e.g. all-MiniLM-L6-v2 or BGE-base).",
        "Generate 384/768-dimensional L2-normalized embeddings for every document chunk.",
        "Verify vector dimensionality, zero NaN values, and uniform unit magnitude."
      ]
    },
    {
      phaseNumber: 3,
      name: "Dual Vector Store Architecture: FAISS + ChromaDB",
      tasks: [
        "Build an ultra-fast in-memory FAISS IndexFlatIP / HNSW index for high-throughput vector lookups.",
        "Implement a persistent ChromaDB store with HNSW cosine distance and collection partitioning.",
        "Verify persistence and hot-reloading capabilities after process restarts."
      ]
    },
    {
      phaseNumber: 4,
      name: "Metadata Filtering & Course Isolation",
      tasks: [
        "Implement server-side metadata filtering to restrict search results to student-selected courses and difficulty tiers.",
        "Enforce security boundaries ensuring private/unauthorized content cannot be retrieved via crafted queries."
      ]
    },
    {
      phaseNumber: 5,
      name: "Hybrid Search & Cross-Encoder Reranking",
      tasks: [
        "Integrate BM25 sparse keyword index alongside dense vector search.",
        "Fuse candidate rankings using Reciprocal Rank Fusion (RRF with k=60).",
        "Deploy a Cross-Encoder (e.g. cross-encoder/ms-marco-MiniLM-L-6-v2) to rerank top-50 candidates down to top-5."
      ]
    },
    {
      phaseNumber: 6,
      name: "Quantitative Retrieval Benchmarking",
      tasks: [
        "Construct an evaluation benchmark of 30 technical questions with human expert ground-truth document IDs.",
        "Measure and report Precision@5, Recall@5, Mean Reciprocal Rank (MRR), and end-to-end latency."
      ]
    },
    {
      phaseNumber: 7,
      name: "Production API & RAG Context Formatter",
      tasks: [
        "Package the retrieval engine into a FastAPI service exposing /api/search and /api/rag-context.",
        "Format retrieved passages into grounded, citation-ready prompts for the Nova AI assistant.",
        "Deliver complete technical documentation and reproducible benchmarking scripts."
      ]
    }
  ],
  rubric: [
    { component: "Document Ingestion & Semantic Chunking Pipeline", marks: 15 },
    { component: "Embedding Model Selection & Normalization Setup", marks: 10 },
    { component: "FAISS & ChromaDB Vector Store Implementation", marks: 20 },
    { component: "Metadata Filtering & Course Namespace Isolation", marks: 15 },
    { component: "Hybrid Search (BM25 + Dense) & Cross-Encoder Reranking", marks: 15 },
    { component: "Benchmark Evaluation (Precision@K, Recall@K, MRR)", marks: 15 },
    { component: "API Deployment, Documentation & RAG Formatter", marks: 10 }
  ]
};

export const VECTOR_DB_ASSIGNMENTS = {
  conceptualQuestions: [
    "What is an embedding and why is it superior to traditional keyword matching for conceptual search?",
    "Explain how a Transformer encoder converts natural language text into dense numerical vectors.",
    "What is the mathematical formulation of Cosine Similarity and what does CosSim(A, B) = 0 signify geometrically?",
    "Explain the mathematical equivalence between Dot Product and Cosine Similarity for L2-normalized vectors.",
    "What is semantic search and how does it retrieve relevant documents that share zero common words with the query?",
    "What are the four primary attributes comprising a modern vector database record?",
    "Compare a vector index (e.g. FAISS) with a complete vector database (e.g. ChromaDB).",
    "Explain the internal mechanics of FAISS IndexFlatL2, IndexFlatIP, and IndexIVFFlat.",
    "What is HNSW and why does its multi-layer hierarchical graph structure dominate approximate nearest neighbor search?",
    "What is Product Quantization (PQ) and what compute-memory trade-off does it introduce?",
    "What is document chunking and why does embedding an entire 100-page textbook fail in RAG applications?",
    "Explain fixed-size chunking versus overlapping chunking versus semantic chunking.",
    "What is hybrid search and why do exact function names or error codes require sparse BM25 retrieval?",
    "Explain Reciprocal Rank Fusion (RRF) and the mathematical role of the smoothing constant k.",
    "Why must an entire document database be re-embedded if the underlying embedding model is upgraded?"
  ],
  mathProblems: [
    {
      id: "p1",
      title: "Problem 1: Cosine Similarity Hand Calculation",
      problem: "Given vector A = [1, 2] and vector B = [2, 4]. Calculate the dot product, Euclidean magnitudes ||A|| and ||B||, and final cosine similarity.",
      solution: "Dot product A . B = (1*2) + (2*4) = 10. Magnitude ||A|| = sqrt(1^2 + 2^2) = sqrt(5). Magnitude ||B|| = sqrt(2^2 + 4^2) = sqrt(20) = 2*sqrt(5). CosSim(A, B) = 10 / (sqrt(5) * 2*sqrt(5)) = 10 / 10 = 1.0 (Exact directional alignment)."
    },
    {
      id: "p2",
      title: "Problem 2: Normalized Vector Inner Product",
      problem: "Vector A = [0.6, 0.8] and vector B = [0.8, -0.6]. Verify both vectors are unit magnitude (||A|| = 1, ||B|| = 1) and calculate their cosine similarity via dot product.",
      solution: "||A|| = sqrt(0.6^2 + 0.8^2) = sqrt(0.36 + 0.64) = 1.0. ||B|| = sqrt(0.8^2 + (-0.6)^2) = sqrt(0.64 + 0.36) = 1.0. CosSim(A, B) = A . B = (0.6*0.8) + (0.8*-0.6) = 0.48 - 0.48 = 0.0 (The vectors are perfectly orthogonal)."
    },
    {
      id: "p3",
      title: "Problem 3: Precision@5 and Recall@5 Calculation",
      problem: "A query has 8 total relevant documents in a database. The system retrieves 5 documents, of which 4 are genuinely relevant. Calculate Precision@5 and Recall@5.",
      solution: "Precision@5 = (Relevant in top 5) / 5 = 4 / 5 = 0.80 (80%). Recall@5 = (Relevant in top 5) / (Total Relevant) = 4 / 8 = 0.50 (50%)."
    },
    {
      id: "p4",
      title: "Problem 4: Mean Reciprocal Rank (MRR) Calculation",
      problem: "Across 3 test queries, the first relevant document was retrieved at Rank 1 for Query 1, Rank 3 for Query 2, and Rank 2 for Query 3. Calculate MRR.",
      solution: "RR_1 = 1/1 = 1.0. RR_2 = 1/3 = 0.3333. RR_3 = 1/2 = 0.5. MRR = (1.0 + 0.3333 + 0.5) / 3 = 1.8333 / 3 = 0.6111."
    },
    {
      id: "p5",
      title: "Problem 5: Reciprocal Rank Fusion (RRF) Score",
      problem: "Document D is ranked at Position 2 by Dense retrieval and Position 4 by Sparse BM25. Using smoothing constant k = 60, calculate its combined RRF score.",
      solution: "RRF(D) = [1 / (60 + 2)] + [1 / (60 + 4)] = (1 / 62) + (1 / 64) = 0.016129 + 0.015625 = 0.031754."
    }
  ],
  programmingChallenges: [
    "Write a Python script that loads 100 text files and generates 384-dim normalized embeddings.",
    "Implement a pure NumPy cosine similarity function and compare performance with Scikit-Learn.",
    "Build a FAISS IndexFlatIP search engine that indexes 50,000 vectors and profiles search latency.",
    "Implement an IVF index with 100 clusters and evaluate accuracy across nprobe values.",
    "Write a persistent ChromaDB script that ingests documents with multi-tier metadata.",
    "Implement metadata-filtered retrieval in ChromaDB with complex boolean conditions.",
    "Build a recursive sliding-window document chunker that preserves Markdown headers.",
    "Implement BM25Okapi search using the rank_bm25 library and profile exact keyword recall.",
    "Build a Reciprocal Rank Fusion (RRF) aggregator that merges dense and sparse rankings.",
    "Deploy a Cross-Encoder reranker to evaluate and reorder top-20 retrieved candidates."
  ]
};

export const VECTOR_DB_UNIVERSITY_RESOURCES = [
  {
    title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks",
    authors: "Nils Reimers and Iryna Gurevych (EMNLP 2019)",
    description: "The seminal research paper introducing Siamese and triplet network structures to generate semantically meaningful sentence embeddings.",
    link: "https://arxiv.org/abs/1908.10084"
  },
  {
    title: "Billion-scale similarity search with GPUs (FAISS)",
    authors: "Jeff Johnson, Matthijs Douze, Hervé Jégou (Meta AI Research, IEEE 2019)",
    description: "The foundational research paper detailing FAISS index algorithms, IVF clustering, Product Quantization, and GPU acceleration.",
    link: "https://arxiv.org/abs/1702.08734"
  },
  {
    title: "ChromaDB Official Documentation & Architecture Guide",
    authors: "Chroma Core Engineering Team (2026)",
    description: "Complete technical reference for PersistentClient, Collections, HNSW distance spaces, and metadata filtering.",
    link: "https://docs.trychroma.com/"
  },
  {
    title: "Efficient and Robust Approximate Nearest Neighbor Search Using HNSW Graphs",
    authors: "Yu. A. Malkov and D. A. Yashunin (IEEE Transactions on Pattern Analysis and Machine Intelligence, 2018)",
    description: "The breakthrough mathematical paper introducing Hierarchical Navigable Small World (HNSW) graphs for vector indexing.",
    link: "https://arxiv.org/abs/1603.09320"
  },
  {
    title: "The Probabilistic Relevance Framework: BM25 and Beyond",
    authors: "Stephen Robertson and Hugo Zaragoza (Foundations and Trends in Information Retrieval)",
    description: "Comprehensive theoretical derivation of BM25 term weighting, inverse document frequency (IDF), and document length normalization.",
    link: "https://www.staff.city.ac.uk/~sb317/papers/foundations_bm25_review.pdf"
  },
  {
    title: "Qdrant Vector Database Architecture Documentation",
    authors: "Qdrant Engineering Team",
    description: "In-depth guide on vector search engine architecture, payload filtering, HNSW graph construction, and vector quantization.",
    link: "https://qdrant.tech/documentation/"
  }
];

export const VECTOR_DB_EXAMINATION_QUESTIONS = [
  {
    id: 1,
    question: "What does an AI embedding model generate when given text input?",
    options: [
      "A relational SQL query table",
      "A dense ordered vector of real floating-point numbers representing semantic characteristics",
      "A compressed ZIP archive of character tokens",
      "A compiled binary bytecode executable"
    ],
    correctAnswer: 1,
    explanation: "An embedding model converts natural language text into a dense vector of floating-point numbers (e.g. 384 or 768 dimensions) capturing semantic meaning."
  },
  {
    id: 2,
    question: "What does Cosine Similarity primarily measure between two vectors?",
    options: [
      "The straight-line Euclidean distance between their endpoints",
      "The cosine of the angle between their directional orientations, independent of vector magnitude",
      "The total number of non-zero entries in both vectors",
      "The elapsed compute latency required to generate the vectors"
    ],
    correctAnswer: 1,
    explanation: "Cosine similarity measures the directional alignment between two vectors: CosSim(A, B) = (A . B) / (||A|| * ||B||). Two vectors pointing in the exact same direction have a cosine similarity of 1.0 regardless of magnitude."
  },
  {
    id: 3,
    question: "Which library specializes in ultra-fast similarity search and clustering of dense vectors developed by Meta FAIR?",
    options: [
      "Flask",
      "Django",
      "FAISS (Facebook AI Similarity Search)",
      "Pandas"
    ],
    correctAnswer: 2,
    explanation: "FAISS is Meta's high-performance library for efficient similarity search, nearest-neighbor retrieval, and clustering of dense vectors."
  },
  {
    id: 4,
    question: "What does ChromaDB organize its documents and embeddings into?",
    options: [
      "Collections",
      "Threads",
      "Routers",
      "Kernel Rings"
    ],
    correctAnswer: 0,
    explanation: "ChromaDB organizes documents, embeddings, IDs, and metadata into named namespaces called Collections."
  },
  {
    id: 5,
    question: "Why is document chunking mandatory when building a RAG retrieval system for large textbooks?",
    options: [
      "To encrypt all text files before sending to the GPU",
      "To divide large documents into focused, granular retrieval units so embeddings represent specific topics rather than broad averages",
      "To train an entirely new foundation model from scratch",
      "To convert 16-bit floats into integer bitmasks"
    ],
    correctAnswer: 1,
    explanation: "Embedding an entire 100-page document averages many unrelated concepts into one diluted vector. Chunking divides documents into coherent sections so queries match specific relevant passages."
  },
  {
    id: 6,
    question: "What does HNSW stand for in vector indexing algorithms?",
    options: [
      "Hierarchical Navigable Small World",
      "High Network Semantic Workflow",
      "Hybrid Neural Search Window",
      "Hierarchical Normalized Search Weight"
    ],
    correctAnswer: 0,
    explanation: "HNSW stands for Hierarchical Navigable Small World, a multi-layer graph-based algorithm that provides blazing-fast approximate nearest neighbor retrieval."
  },
  {
    id: 7,
    question: "What is the primary role of BM25 in a modern Hybrid Search architecture?",
    options: [
      "Sparse keyword retrieval based on term frequency and document length, capturing exact identifiers and code symbols",
      "Generating 768-dimensional multimodal image vectors",
      "Training low-rank adapter matrices (LoRA)",
      "Synthesizing speech from text"
    ],
    correctAnswer: 0,
    explanation: "BM25 is a sparse ranking algorithm that excels at exact keyword matching (e.g. function names, error codes), complementing dense semantic search."
  },
  {
    id: 8,
    question: "What is the primary purpose of a Cross-Encoder Reranker in a two-stage retrieval pipeline?",
    options: [
      "To compress vectors using Product Quantization",
      "To evaluate deep query-document cross-attention and reorder the top candidates retrieved by the bi-encoder for maximum relevance",
      "To replace the vector database entirely for all 1,000,000 documents",
      "To generate synthetic training questions"
    ],
    correctAnswer: 1,
    explanation: "A Cross-Encoder performs joint all-to-all attention between the query and candidate passages, providing highly accurate relevance scores to reorder the top 20–100 candidates."
  },
  {
    id: 9,
    question: "If two vectors A and B are both L2-normalized (||A|| = 1 and ||B|| = 1), what is their dot product equal to?",
    options: [
      "Their Euclidean distance squared",
      "Their exact Cosine Similarity",
      "Zero in all cases",
      "The vector dimensionality"
    ],
    correctAnswer: 1,
    explanation: "Because CosSim(A, B) = (A . B) / (||A|| * ||B||), when ||A|| = 1 and ||B|| = 1, the denominator equals 1.0, making the dot product exactly equal to cosine similarity."
  },
  {
    id: 10,
    question: "What must be done when an application upgrades its embedding model from 384 dimensions to 1536 dimensions?",
    options: [
      "Simply query the old index directly since FAISS automatically converts dimensions",
      "Pad the old 384 vectors with zeros to reach 1536",
      "Re-embed the entire document corpus using the new model and rebuild the vector index from scratch",
      "Average the old vectors with the new query vector"
    ],
    correctAnswer: 2,
    explanation: "Embeddings from different models inhabit completely different vector spaces and coordinate geometries. You cannot compare vectors across different models; the entire document corpus must be re-embedded."
  }
];

export const VECTOR_DB_COMPETENCY_CHECKLIST = [
  "Explain why keyword search fails and how dense embeddings capture semantic meaning.",
  "Differentiate vector dimensions (384, 768, 1024, 1536) and memory footprint implications.",
  "Describe the 6 stages of an embedding model from tokenization to L2 normalization.",
  "Explain Mean pooling, CLS pooling, and Max pooling for sentence-level representation.",
  "Compare Bi-encoders (fast retrieval) with Cross-encoders (accurate reranking).",
  "Derive and calculate Cosine Similarity: CosSim(A, B) = (A . B) / (||A|| * ||B||).",
  "Explain why L2-normalized vector dot product is mathematically identical to cosine similarity.",
  "Differentiate Euclidean distance (L2), Dot Product, and Cosine metrics.",
  "Map the 8 stages of the semantic search retrieval workflow.",
  "Explain the 4 core components of a vector record (ID, Embedding, Document, Metadata).",
  "Compare dedicated vector databases (ChromaDB, Qdrant) with relational vector extensions (pgvector).",
  "Explain FAISS index types: IndexFlatL2, IndexFlatIP, IndexIVFFlat, HNSW, and Product Quantization.",
  "Configure Voronoi clustering in FAISS IVF and analyze the nprobe speed vs recall tradeoff.",
  "Build and persist a multi-course ChromaDB database with collection namespaces.",
  "Execute metadata-filtered vector queries using scoped boolean attributes.",
  "Implement fixed-size, overlapping, and semantic heading-aware document chunking.",
  "Construct a hybrid search engine combining dense semantic search with sparse BM25.",
  "Fuse ranked candidate lists using Reciprocal Rank Fusion (RRF with k=60).",
  "Calculate information retrieval metrics: Precision@K, Recall@K, MRR, and NDCG.",
  "Explain why changing an embedding model requires a complete re-embedding and index rebuild."
];
`;

fs.writeFileSync(path.join(__dirname, '../src/Componets/aiVectorDatabasesData.js'), moduleData, 'utf8');
console.log('Successfully wrote src/Componets/aiVectorDatabasesData.js');
