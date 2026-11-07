const fs = require('fs');
const path = require('path');

const overview = {
  moduleNumber: "15",
  title: "Advanced RAG & Knowledge Engineering",
  recommendedDuration: "26–30 hours",
  difficulty: "Expert / Advanced",
  primaryLanguage: "Python & TypeScript / Node.js",
  mainLibraries: "Neo4j, NetworkX, Microsoft GraphRAG, LlamaIndex, LangChain, Qdrant, Rank-BM25, FlagEmbedding (BGE-Reranker)",
  supportingTools: "Cypher, SPARQL, Redis, DuckDB, Ollama / vLLM, Docker (Neo4j Desktop / Enterprise), Ragas",
  prerequisites: "Module 10 (Embeddings & Vector Databases), Module 11 (RAG Engineering), Module 13 (AI Agents & Tool Calling)",
  learningApproach: "Graph Theory + Hybrid Search Engineering + Knowledge Graph Extraction + Multi-Hop Graph Traversal + Hierarchical Community Summarization + Query Transformations + Production Governance",
  finalOutcome: "Architect, build, benchmark, and deploy an enterprise-grade Graph-Enhanced Hybrid RAG platform that overcomes vector search blindspots (the lost-in-the-middle problem, multi-hop reasoning failures, global thematic summarization deficits) by unifying dense embeddings, BM25 sparse keyword indices, and Neo4j property knowledge graphs with hierarchical Leiden community clustering.",
  learningObjectives: [
    "Analyze the structural failures of standard naive vector RAG: semantic drift, unstructured chunk myopia, multi-hop relationship blindness, and failure on global thematic aggregation queries.",
    "Master Hybrid Retrieval by formulating and implementing Dense Vector Search alongside Sparse Lexical Inverted Indices (BM25Okapi / BM25+), fusing results via Reciprocal Rank Fusion (RRF) and Distribution-Based Score Fusion (DBSF).",
    "Model complex domains using Property Graphs (LPG) and Resource Description Framework (RDF/OWL ontologies), writing expressive Cypher queries with graph pattern matching, path traversals, and variable-length edge hops.",
    "Construct knowledge graphs automatically from raw unstructured corpora using open-source LLMs: named entity recognition (NER), relation extraction (RE), coreference resolution, and entity disambiguation/deduplication.",
    "Implement Microsoft GraphRAG from the ground up: document chunking, graph extraction, hierarchical Leiden community detection, bottom-up community summarization, and query execution comparing Local, Global, and DRIFT search modes.",
    "Execute multi-hop graph reasoning and pathfinding algorithms (Dijkstra, BFS, PageRank, Personalized PageRank) to trace non-obvious entity connections and synthesize verifiable factual answers.",
    "Engineer advanced query transformations: Query Rewriting, Multi-Query Expansion, Sub-Question Decomposition (DAGs), Step-Back Prompting, and Hypothetical Document Embeddings (HyDE).",
    "Integrate Cross-Encoder neural rerankers (BGE-Reranker-Large, Cohere Rerank 3) and sentence-window context compression to deliver high-signal context windows to foundation models."
  ]
};

const curriculumUnits = [
  {
    id: "unit-01",
    number: "01",
    title: "Foundations & Limitations of Naive Vector RAG",
    subtitle: "Why Top-k Cosine Similarity Fails on Complex Relational Knowledge",
    summary: "Examine the theoretical underpinnings of naive dense vector RAG and dissect its fundamental failure modes: inability to answer global corpus-level queries, failure across multi-hop entity chains, semantic fragmentation from arbitrary chunking, and loss of structural domain topology.",
    topics: [
      {
        id: "sec-01-01",
        title: "The Naive RAG Architecture: Pipeline Review & Assumptions",
        content: `Standard Retrieval-Augmented Generation (RAG) relies on a three-stage pipeline: chunking unstructured documents into fixed-size passages (e.g., 512 tokens with 50-token overlap), encoding passages using a dense embedding model ($f: \\text{text} \\to \\mathbb{R}^d$), storing vectors in an Approximate Nearest Neighbor (ANN) index (HNSW, ScaNN, or IVF-PQ), and retrieving top-$k$ nearest chunks based on cosine similarity:

$$\\text{Sim}(\\mathbf{q}, \\mathbf{d}_i) = \\frac{\\mathbf{q} \\cdot \\mathbf{d}_i}{\\|\\mathbf{q}\\| \\|\\mathbf{d}_i\\|}$$

While effective for isolated fact-lookup queries ('What is the return policy?'), this architecture operates under the flawed assumption that all information needs can be fulfilled by finding text passages whose lexical or surface semantic profile closely mirrors the query string.

When domain queries require aggregating themes across thousands of documents, tracing multi-entity relationships across disparate reports, or disambiguating homonyms without lexical overlap, cosine similarity over independent chunks breaks down completely.`
      },
      {
        id: "sec-01-02",
        title: "The Four Critical Vector RAG Failure Modes",
        content: `1. **The Multi-Hop Inference Gap**: If Entity A is linked to Entity B in Document 1, and Entity B causes Event C in Document 40, answering 'How does Entity A influence Event C?' requires traversing the bridge Entity B. Naive RAG retrieves either chunks mentioning A or chunks mentioning C. Chunks explaining the bridge $B \\to C$ often have low cosine similarity to the initial query 'Entity A Event C' and are discarded.

2. **The Global Aggregation & Thematic Blindspot**: Queries like 'What are the top 5 systemic architectural risks across our 400 microservices codebases?' cannot be answered by any single chunk or top-10 chunks. Cosine similarity looks for a specific point in latent space, whereas global summarization requires whole-graph clustering and hierarchical synthesis.

3. **Arbitrary Chunk Boundary Destruction**: Sentences split across boundaries lose coreferential anchors. When a chunk starts with 'He then authorized the transaction...', the vector embedding lacks the subject's identity, resulting in ungrounded hallucination or retrieval failure.

4. **Semantic Over-Generalization & False Positives**: In dense vector spaces, semantically adjacent concepts (e.g., 'Java Thread pool starvation' and 'Java Database Connection pool starvation') have cosine similarities $>0.85$, leading models to retrieve irrelevant context when precise lexical or relational precision is demanded.`
      },
      {
        id: "sec-01-03",
        title: "Comparative Architectural Paradigm: Vector RAG vs Graph RAG",
        content: `To address these limitations, Knowledge Engineering introduces Graph RAG, which treats knowledge not as flat isolated text snippets, but as a structured topology of typed entities and directed relations:

| Dimension | Naive Vector RAG | Advanced Hybrid RAG | Graph RAG (Knowledge Graph) |
| :--- | :--- | :--- | :--- |
| **Data Representation** | Unstructured text chunks | Chunks + Inverted index | Nodes (Entities) + Edges (Relations) + Chunks |
| **Primary Index** | HNSW / IVF Vector Index | Vector + BM25 Lexical | Property Graph (Neo4j) / RDF Triplestore |
| **Retrieval Mechanism** | Cosine / Dot-Product $k$-NN | Reciprocal Rank Fusion (RRF) | Subgraph extraction, path traversal, community search |
| **Multi-Hop Reasoning** | Poor (relies on coincidence) | Moderate (query expansion) | Native ($N$-hop Cypher traversals & Dijkstra) |
| **Global Summarization** | Fails completely | Fails (context window limit) | Excellent (Hierarchical Leiden communities) |
| **Explainability** | Black-box vector distance | Rank scores | Verifiable deterministic subgraphs & citations |`
      }
    ]
  },
  {
    id: "unit-02",
    number: "02",
    title: "Hybrid Search: Dense Vector + Sparse Lexical (BM25) Fusion",
    subtitle: "Combining Semantic Latent Matching with Exact Keyword Inverted Indices",
    summary: "Formulate mathematically and implement hybrid retrieval pipelines pairing BM25Okapi with dense vector embeddings. Learn score normalization, Reciprocal Rank Fusion (RRF), Distribution-Based Score Fusion (DBSF), and Cross-Encoder neural rerankers.",
    topics: [
      {
        id: "sec-02-01",
        title: "The Mathematics of BM25Okapi & Sparse Lexical Retrieval",
        content: `While dense vectors excel at semantic synonymy ('automobile' $\\approx$ 'car'), they frequently stumble on exact tokens, part numbers, code identifiers (e.g., 'CVE-2024-38077', 'ConcurrentHashMap'), and acronyms.

BM25 scores passage relevance by balancing term frequency (TF) with document length normalization and inverse document frequency (IDF):

$$\\text{Score}_{\\text{BM25}}(D, Q) = \\sum_{i=1}^{n} \\text{IDF}(q_i) \\cdot \\frac{f(q_i, D) \\cdot (k_1 + 1)}{f(q_i, D) + k_1 \\cdot \\left(1 - b + b \\cdot \\frac{|D|}{\\text{avgdl}}\\right)}$$

where:
- $\\text{IDF}(q_i) = \\ln \\left(\\frac{N - n(q_i) + 0.5}{n(q_i) + 0.5} + 1\\right)$
- $f(q_i, D)$ is the term frequency of query token $q_i$ in document $D$.
- $|D|$ and $\\text{avgdl}$ represent document length and average corpus document length.
- $k_1 \\in [1.2, 2.0]$ controls non-linear term frequency saturation.
- $b \\in [0.75]$ controls the penalization for document length.`
      },
      {
        id: "sec-02-02",
        title: "Reciprocal Rank Fusion (RRF) vs Score Normalization",
        content: `Combining dense vector distance (typically bounded in $[0, 1]$ or $[-1, 1]$) with unbounded BM25 scores ($[0, \\infty)$) using naive linear combination $\\alpha S_{\\text{dense}} + (1-\\alpha) S_{\\text{sparse}}$ fails due to incompatible score distributions and calibration variance across different queries.

**Reciprocal Rank Fusion (RRF)** solves this by operating exclusively on ordinal rankings rather than raw scores:

$$\\text{RRF\\_Score}(d \\in D) = \\sum_{m \\in M} \\frac{w_m}{k + r_m(d)}$$

where:
- $M$ is the set of retrieval systems (e.g., $M = \\{\\text{Dense}, \\text{BM25}\\}$).
- $r_m(d)$ is the 1-based rank position of document $d$ in system $m$.
- $k$ is a smoothing constant (standardly set to $60$), preventing top-ranked items from drowning out all subsequent matches.
- $w_m$ is an optional weighting coefficient (e.g., $w_{\\text{dense}} = 1.0, w_{\\text{bm25}} = 0.8$).`
      },
      {
        id: "sec-02-03",
        title: "Distribution-Based Score Fusion (DBSF) & Cross-Encoder Rerankers",
        content: `When rank-only information discards the magnitude of relevance confidence, Distribution-Based Score Fusion (DBSF) standardizes scores using mean and standard deviation:

$$z(s) = \\frac{s - \\mu}{\\sigma}, \\quad \\tilde{s} = \\frac{1}{1 + e^{-z(s)}}$$

Following first-stage candidate retrieval (e.g., top-50 from BM25 and top-50 from Vector), a **Cross-Encoder Neural Reranker** (such as BAAI/bge-reranker-large or Cohere Rerank 3) is applied. Unlike bi-encoders which compute embeddings independently, cross-encoders feed the query and candidate chunk together through full self-attention layers:

$$\\text{Input} = [\\text{CLS}] \\circ Q \\circ [\\text{SEP}] \\circ D \\circ [\\text{EOS}]$$

This captures fine-grained cross-token interactions, boosting Mean Reciprocal Rank (MRR@10) and NDCG@10 by 15–30% prior to LLM context ingestion.`
      }
    ]
  },
  {
    id: "unit-03",
    number: "03",
    title: "Knowledge Graph Fundamentals & Ontological Modeling",
    subtitle: "Entities, Relationships, RDF Triples, and Labeled Property Graphs",
    summary: "Establish formal graph theory and ontological foundations. Contrast the Semantic Web stack (RDF, RDFS, OWL, SPARQL) with Labeled Property Graphs (Neo4j, Cypher), designing domain ontologies that capture schema rigor and structural flex.",
    topics: [
      {
        id: "sec-03-01",
        title: "Graph Theory Foundations: Nodes, Edges, and Hypergraphs",
        content: `A Knowledge Graph (KG) is a directed labeled multigraph $G = (V, E, \\mathcal{R}, \\mathcal{L})$ where:
- $V$ is the set of entity vertices (nodes), where each $v \\in V$ possesses a unique identifier and type label $\\mathcal{L}(v)$.
- $E \\subseteq V \\times \\mathcal{R} \\times V$ is the set of directed edges (relations) representing triples $(u, r, v)$.
- $\\mathcal{R}$ is the relation dictionary specifying predicates.
- In hypergraphs or property graphs, edges and nodes may themselves carry key-value property maps $\\mathcal{P}: (V \\cup E) \\to (\\text{Key} \\to \\text{Value})$.

Unlike flat relational tables with rigid foreign key joins or unindexed text blobs, knowledge graphs permit arbitrary $N$-hop path traversals in time proportional to the localized degree of the visited subgraph rather than total database size (index-free adjacency).`
      },
      {
        id: "sec-03-02",
        title: "RDF & OWL vs Labeled Property Graph (LPG) Architecture",
        content: `Two primary formalisms govern modern knowledge representations:

1. **The Semantic Web Stack (RDF / OWL / SPARQL)**:
   - Atomic unit: Subject-Predicate-Object triple (e.g., \`<http://data.org/Java> <http://purl.org/dc/terms/creator> <http://data.org/JamesGosling>\`).
   - Standards: W3C compliant, utilizing URIs/IRIs for global decentralized identification.
   - Strengths: Formal logic, automatic deductive reasoning via description logics (OWL reasoners like Pellet/HermiT), strict ontology definitions.
   - Weaknesses: Triples lack native attributes on edges (requires reification or RDF-star); higher query complexity in SPARQL for practical enterprise analytics.

2. **Labeled Property Graphs (LPG / Neo4j / Memgraph / AWS Neptune)**:
   - Atomic units: Nodes and Directed Relationships, both containing arbitrary key-value properties.
   - Queries: Expressed in Cypher or GQL (Graph Query Language ISO standard).
   - Strengths: Intuitive developer ergonomics, high-performance graph traversals, native edge weights, timestamps, and confidence scores directly on relationships.
   - Standard choice for production Graph RAG systems.`
      },
      {
        id: "sec-03-03",
        title: "Ontology Engineering: Taxonomies, Schemas & Constraints",
        content: `A robust Knowledge Graph requires a clear ontology—a formal specification of conceptualization:
- **Classes & Inheritance**: Defining hierarchies such as \`SoftwareComponent < Artifact < Entity\`.
- **Relationship Cardinality & Domain/Range**: Ensuring that \`COMPILED_BY\` must connect a \`SourceFile\` (domain) to a \`Compiler\` (range).
- **Identity & Uniqueness Constraints**: Neo4j uniqueness constraints (\`CREATE CONSTRAINT FOR (p:Person) REQUIRE p.id IS UNIQUE\`) ensure deterministic graph ingestion and prevent duplicate node proliferation.`
      }
    ]
  },
  {
    id: "unit-04",
    number: "04",
    title: "Graph Databases: Neo4j, Cypher & Graph Query Optimization",
    subtitle: "Writing High-Performance Pattern Matching and Traversal Queries",
    summary: "Master Neo4j architecture and the Cypher query language. Explore index-free adjacency, pattern-matching MATCH syntax, variable-length path expressions, aggregations, and query profiling with EXPLAIN and PROFILE.",
    topics: [
      {
        id: "sec-04-01",
        title: "Neo4j Storage Engine: Index-Free Adjacency Explained",
        content: `Traditional RDBMS systems join tables using indexes ($O(\\log N)$ lookups per join). If a query spans 5 table joins across millions of rows, execution times degrade geometrically.

Neo4j utilizes **Index-Free Adjacency (IFA)**: every node on disk maintains direct physical memory pointers to its incoming and outgoing relationship records. Traversing an edge requires dereferencing an offset pointer ($O(1)$ constant time per relationship hop). Graph traversal speed is determined solely by the size of the subgraph being traversed, completely decoupled from the billion-node scale of the broader database.`
      },
      {
        id: "sec-04-02",
        title: "Cypher Mastery: Declarative Pattern Matching Syntax",
        content: `Cypher uses ASCII-art visual idioms to depict graph paths: \`(node)-[:RELATIONSHIP]->(node)\`.

\`\`\`cypher
// Find all microservices dependent on authentication that have critical vulnerabilities
MATCH (svc:Microservice)-[:CALLS*1..3]->(auth:Service {name: 'AuthService'})
MATCH (auth)-[:USES_LIBRARY]->(lib:Library)-[:HAS_CVE]->(cve:Vulnerability)
WHERE cve.severity = 'CRITICAL'
RETURN svc.name AS ServiceName, 
       cve.cveId AS VulnerabilityId, 
       cve.cvssScore AS Score
ORDER BY Score DESC
LIMIT 10
\`\`\`

Key clauses:
- \`MATCH\`: Pattern recognition across node labels and typed directed edges.
- \`*1..3\`: Variable-length relationship traversal (hops between 1 and 3 degrees).
- \`MERGE\`: Idempotent upsert ensuring nodes and relationships are created only if they do not exist.
- \`UNWIND\`: Flattens lists into individual row records for batch transactions.`
      },
      {
        id: "sec-04-03",
        title: "Cypher Performance: Indexing, EXPLAIN & PROFILE",
        content: `To ensure millisecond retrieval under high concurrency:
- **Node Property Lookup Indexes**: Range, text, and point indexes (\`CREATE INDEX FOR (c:Concept) ON (c.name)\`).
- **Vector Indexes in Neo4j**: Neo4j 5+ natively supports vector indexes (\`CALL db.index.vector.queryNodes('chunk_embeddings', 10, $queryVector)\`), enabling combined vector search and graph traversal in a single Cypher query.
- **Query Plan Inspection**: Always evaluate queries using \`PROFILE\` to eliminate Cartesian products, eager aggregations, and unindexed full label scans.`
      }
    ]
  },
  {
    id: "unit-05",
    number: "05",
    title: "Automated Knowledge Graph Construction from Raw Text",
    subtitle: "Information Extraction: NER, Relation Extraction, and Entity Resolution",
    summary: "Build production extraction pipelines converting unstructured document corpora into typed knowledge graphs. Implement Named Entity Recognition (NER), Relation Extraction (RE), Coreference Resolution, and Entity Disambiguation.",
    topics: [
      {
        id: "sec-05-01",
        title: "The Information Extraction Pipeline: From Chunks to Triples",
        content: `Transforming raw text into high-fidelity knowledge graphs entails a four-step extraction pipeline:

1. **Chunk Decomposition & Sentence Tokenization**: Text is split into overlapping semantic units while tracking source document IDs, chapter metadata, and character offsets.
2. **Named Entity Recognition (NER)**: Identifying entity spans and mapping them to predefined ontology categories (\`Technology\`, \`Risk\`, \`Person\`, \`ArchitecturePattern\`).
3. **Relation Extraction (RE)**: Classifying directed predicates between detected entity pairs (e.g., \`(Kafka)-[:IMPLEMENTS_PATTERN]->(EventSourcing)\`).
4. **Attribution & Provenance Tracking**: Attaching source passage IDs and verbatim quotes to edges as metadata properties (\`provenance_chunk_id\`, \`confidence\`).`
      },
      {
        id: "sec-05-02",
        title: "Coreference Resolution & Entity Disambiguation",
        content: `Real-world text frequently conceals entity names behind pronouns ('it', 'their system') or acronyms ('JVM', 'HotSpot').

- **Coreference Resolution**: Models (such as fastcoref or LLM prompt-guided resolution) replace anaphoric references with their canonical antecedent before triple extraction.
- **Entity Disambiguation & Normalization**: Resolving 'Python', 'Python3', 'CPython', and 'Python language' to a single canonical entity node \`(:Language {canonical_name: 'Python', aliases: ['Python3', 'CPython']}\`).
- Without entity resolution, knowledge graphs fragment into disconnected duplicate islands, destroying multi-hop reasoning capability.`
      },
      {
        id: "sec-05-03",
        title: "LLM-Powered Few-Shot Open Information Extraction (OpenIE)",
        content: `Modern Graph RAG architectures leverage structured LLM outputs (via JSON Schema or Pydantic) to extract triples in a single inference pass:

\`\`\`python
from pydantic import BaseModel, Field
from typing import List

class ExtractedEntity(BaseModel):
    name: str = Field(description="Canonical capitalized name of the entity")
    category: str = Field(description="Entity label conforming to domain ontology")
    summary: str = Field(description="Concise 1-sentence definition in context")

class ExtractedRelation(BaseModel):
    source_entity: str
    target_entity: str
    relation_type: str = Field(description="UPPERCASE_SNAKE_CASE verb predicate")
    factual_quote: str = Field(description="Direct verbatim sentence supporting relationship")

class KnowledgeGraphExtraction(BaseModel):
    entities: List[ExtractedEntity]
    relations: List[ExtractedRelation]
\`\`\`

System prompts constrain the extractor to predefined relation types to prevent semantic explosion.`
      }
    ]
  },
  {
    id: "unit-06",
    number: "06",
    title: "Graph RAG Architecture & Context Assembly",
    subtitle: "Bridging Vector Queries and Knowledge Graph Subgraphs for LLM Context",
    summary: "Architect the end-to-end Graph RAG pipeline. Learn how to map user queries to seed entities, retrieve localized 1-hop and 2-hop subgraphs, serialize subgraphs into high-density prompt context, and ground generation.",
    topics: [
      {
        id: "sec-06-01",
        title: "The Graph RAG End-to-End Execution Flow",
        content: `A complete Graph RAG retrieval sequence executes as follows:
1. **Query Entity Identification**: The user query is parsed by an NER model or lightweight LLM to isolate target entity mentions.
2. **Seed Node Resolution**: Target entities are matched against graph node indices using exact match, Levenshtein distance, or vector index similarity on node definitions.
3. **Subgraph Expansion ($k$-hop Ego Network)**: For each seed node, the system traverses adjacent edges up to $k=2$ hops, filtering relationships by relevance and edge weight.
4. **Hybrid Context Merging**: Retrieved graph paths (triples) and raw text chunks associated with traversed nodes are merged into a unified context payload.
5. **Context Serialization**: The graph structure is converted into clean, human- and LLM-readable structured text (e.g., Markdown or structured YAML).
6. **Constrained Generation**: The LLM synthesizes the final response, referencing both structured graph facts and narrative chunk details.`
      },
      {
        id: "sec-06-02",
        title: "Subgraph Serialization Strategies for LLM Prompts",
        content: `Raw graph data cannot be injected as binary pointers into an LLM context window. Effective serialization options include:

- **Triple Notation**: \`Subject -> Predicate -> Object (Confidence: 0.95)\`
- **Hierarchical Markdown Outlines**:
  \`\`\`markdown
  ### Entity: Virtual Thread (Concept)
  - DEFINITION: Lightweight thread managed by the JVM rather than the OS.
  - INTRODUCED_IN -> Java 21
  - SOLVES -> Thread-per-request OS thread exhaustion
  - COMPATIBLE_WITH -> Synchronous blocking I/O (java.net.Socket)
  \`\`\`
- Experiments prove hierarchical Markdown serialization yields higher LLM comprehension and fewer hallucinations compared to raw JSON-LD or verbose Cypher statements.`
      },
      {
        id: "sec-06-03",
        title: "Grounded Answer Generation with Graph Citations",
        content: `To provide verifiable, enterprise-grade auditability, Graph RAG systems compel the generator to cite specific graph nodes and relationship paths:

\`\`\`text
According to [Node: Virtual Thread], virtual threads solve thread exhaustion [Edge: SOLVES -> OS Thread Exhaustion]. 
However, as documented in [Edge: BLOCKED_BY -> JNI Native Method], pinning can still occur when executing inside 
synchronized blocks [Source: Doc-402, Section 3.2].
\`\`\`

This provides full bidirectional provenance: users can click any citation to highlight the corresponding node and relationship in the interactive visual graph.`
      }
    ]
  },
  {
    id: "unit-07",
    number: "07",
    title: "Microsoft GraphRAG & Hierarchical Community Detection",
    subtitle: "Leiden Clustering, Hierarchical Community Summaries, and Global Search",
    summary: "Deep dive into the architecture of Microsoft GraphRAG. Understand the Leiden community detection algorithm, multi-level hierarchical clustering, bottom-up community summarization, and Local vs Global vs DRIFT search modalities.",
    topics: [
      {
        id: "sec-07-01",
        title: "The Microsoft GraphRAG Paradigm Shift",
        content: `Microsoft Research introduced GraphRAG to solve a profound problem: **corpus-level holistic understanding**.
Traditional RAG fails questions like: 'What are the main thematic themes in this 5,000-page regulatory archive?' or 'What are the overarching systemic risks in these clinical trial reports?'

Instead of relying solely on bottom-up chunk matching, Microsoft GraphRAG transforms the entire corpus into an interconnected knowledge graph, partitions the graph into communities of related concepts using hierarchical clustering, and precomputes natural language summaries for every community at multiple abstraction levels.`
      },
      {
        id: "sec-07-02",
        title: "The Leiden Community Detection Algorithm",
        content: `GraphRAG partitions entity networks using the **Leiden algorithm** (an improvement over the Louvain method that guarantees well-connected communities and eliminates disconnected subsets):
- **Modularity Optimization**: Maximizes the density of edges within communities compared to edges between communities.
- **Refinement Phase**: Nodes are iteratively reassigned to ensure all sub-communities are well-connected.
- **Hierarchy Construction**: Sub-communities are aggregated into super-communities, creating a multi-tier tree (Level 0: Micro-communities $\\to$ Level 1: Meso-communities $\\to$ Level 2: Macro-communities).`
      },
      {
        id: "sec-07-03",
        title: "Search Modalities: Local Search vs Global Search vs DRIFT",
        content: `GraphRAG implements distinct operational query modes tailored to different question types:

1. **Local Search**:
   - Ideal for: Specific entity and relationship queries ('How does Service X interact with Database Y?').
   - Mechanism: Identifies seed entities, extracts their local 1-hop / 2-hop neighborhood, associated raw text units, and low-level community reports.

2. **Global Search**:
   - Ideal for: Holistic, thematic, corpus-wide synthesis ('What are the major compliance trends discussed in this audit?').
   - Mechanism: Bypasses chunk search entirely. Scans precomputed **Community Summaries** at intermediate levels of the Leiden hierarchy, generates intermediate map-reduce partial answers, and aggregates them into a comprehensive synthesis.

3. **DRIFT Search (Dynamic Reasoning and Information Fusion with Traversal)**:
   - Combines Global Search's thematic scope with Local Search's granular precision through dynamic query branching and iterative graph exploration.`
      }
    ]
  },
  {
    id: "unit-08",
    number: "08",
    title: "Graph Traversal Algorithms & Multi-Hop Reasoning",
    subtitle: "Pathfinding, Dijkstra, Personalized PageRank, and Graph-Guided Deduction",
    summary: "Implement deterministic and probabilistic graph algorithms to uncover hidden connections across distant concepts. Master Breadth-First Search (BFS), Shortest Path (Dijkstra), Personalized PageRank (PPR), and Graph Neural Network (GNN) embeddings.",
    topics: [
      {
        id: "sec-08-01",
        title: "Multi-Hop Pathfinding: Tracing Transitive Dependencies",
        content: `A multi-hop query requires chaining multiple logical relationships:
$$\\text{Query: } \\text{How does a thread deadlock in Java trigger an OS-level context-switching spike?}$$

Path discovery identifies intermediate causal nodes:
$$\\text{Java Code} \\xrightarrow{\\text{SYNCHRONIZED}} \\text{Intrinsic Lock} \\xrightarrow{\\text{BLOCKED}} \\text{OS Futex Wait} \\xrightarrow{\\text{YIELDS}} \\text{CPU Core} \\xrightarrow{\\text{TRIGGERS}} \\text{Context Switch}$$

By running graph path traversals (e.g., all paths up to length 4 between \`Java Thread\` and \`OS Context Switch\`), the system surfaces causal mechanisms that no single text chunk ever articulates directly.`
      },
      {
        id: "sec-08-02",
        title: "Dijkstra & Weighted Shortest Path Traversal",
        content: `In production graphs where edges carry confidence weights or inverse frequency penalties ($w_e = 1 - \\text{confidence}$ or $w_e = -\\log P(e)$), finding the most credible explanatory chain reduces to solving the **Single-Source Shortest Path** problem using Dijkstra's algorithm:

$$d(v) = \\min_{u \\in \\text{Adj}(v)} (d(u) + w(u, v))$$

This ensures the generated context prefers high-confidence factual paths verified across multiple source documents over speculative single-mention edges.`
      },
      {
        id: "sec-08-03",
        title: "Personalized PageRank (PPR) for Context Relevance Scoring",
        content: `When a query activates multiple seed nodes, how do we determine which peripheral graph nodes deserve space in the LLM's limited context window?

**Personalized PageRank (PPR)** simulates a random walk with teleportation biased towards the query's seed entity set $S$:

$$\\mathbf{p} = (1 - \\alpha) \\mathbf{A} \\mathbf{D}^{-1} \\mathbf{p} + \\alpha \\mathbf{s}$$

where $\\mathbf{s}$ is the personalized restart vector with mass concentrated on seed nodes $S$, and $\\alpha \\approx 0.15$ is the teleport probability. Nodes with the highest steady-state probability score $\\mathbf{p}_i$ represent the most topologically relevant concepts to the user's specific inquiry.`
      }
    ]
  },
  {
    id: "unit-09",
    number: "09",
    title: "Advanced Query Transformation Techniques",
    subtitle: "Rewriting, Multi-Query Expansion, Sub-Question Decomposition & HyDE",
    summary: "Transform ambiguous, complex, or poorly formulated user inputs into optimized retrieval structures. Implement Query Rewriting, Multi-Query Generation, Sub-Question Decomposition (DAGs), Step-Back Prompting, and Hypothetical Document Embeddings (HyDE).",
    topics: [
      {
        id: "sec-09-01",
        title: "Query Rewriting & Coreference Expansion in Multi-Turn Chat",
        content: `User queries in conversational sessions frequently contain implicit pronouns and references:
- User Turn 1: 'Explain how Kafka handles message deduplication.'
- User Turn 2: 'What are its performance trade-offs compared to RabbitMQ?'

A naive retrieval on Turn 2 searches for 'its performance trade-offs...', failing to retrieve Kafka documentation.
A **Query Rewriting Transformer** analyzes conversational history and synthesizes an autonomous, fully contextualized query:
\`\`\`text
Resolved Query: "What are the performance trade-offs of Kafka message deduplication compared to RabbitMQ?"
\`\`\``
      },
      {
        id: "sec-09-02",
        title: "Sub-Question Decomposition for Multi-Part Inquiries",
        content: `Complex inquiries often require assembling data from distinct sub-domains.
Query: *'Compare the latency, consistency guarantees, and operational cost of Apache Cassandra vs AWS DynamoDB.'*

The Sub-Question Decomposition engine breaks this into an execution Directed Acyclic Graph (DAG):
1. Sub-query 1: *'Apache Cassandra latency benchmarks and consistency levels (tunable consistency)'*
2. Sub-query 2: *'AWS DynamoDB latency benchmarks and read/write consistency models'*
3. Sub-query 3: *'Total cost of ownership and pricing model comparison between Cassandra self-hosted and DynamoDB on-demand'*

Each sub-query is executed independently across vector and graph indexes, and the intermediate outputs are synthesized by a final aggregation agent.`
      },
      {
        id: "sec-09-03",
        title: "HyDE (Hypothetical Document Embeddings) & Step-Back Prompting",
        content: `- **Hypothetical Document Embeddings (HyDE)**: Instead of embedding the query string directly, an LLM is prompted to generate a speculative *hypothetical answer passage*. While the hypothetical passage may contain factual errors, its *vector representation* resides in document space rather than query space, bridging the semantic gap between questions and encyclopedic text.
- **Step-Back Prompting**: For high-level or overly specific engineering questions, the system generates a generalized, high-level abstraction question ('Step-back question') to retrieve foundational principles alongside specific troubleshooting records.`
      }
    ]
  },
  {
    id: "unit-10",
    number: "10",
    title: "Advanced Retrieval Strategies & Context Compression",
    subtitle: "Parent Document Retrieval, Sentence Window, and Contextual Reranking",
    summary: "Solve the chunk size dilemma. Learn how small chunks optimize vector retrieval while large chunks preserve context coherence using Parent Document Retrieval, Sentence Windowing, and LLM Contextual Compression.",
    topics: [
      {
        id: "sec-10-01",
        title: "The Chunk Size Dilemma: Precision vs Comprehension",
        content: `Embedding chunk size involves a strict engineering trade-off:
- **Small Chunks (e.g., 100 tokens)**: High embedding precision; vectors reflect exact, focused thoughts. However, they lack surrounding narrative context, leading the downstream LLM to misinterpret nuances.
- **Large Chunks (e.g., 1000 tokens)**: High contextual coherence; however, vector embeddings suffer from semantic diffusion where critical specific details are diluted across the passage average.`
      },
      {
        id: "sec-10-02",
        title: "Parent Document & Sentence Window Retrieval",
        content: `Two decoupled architectures resolve this dilemma:

1. **Parent Document Retrieval**:
   - The corpus is split into large parent documents (e.g., 1,500 tokens).
   - Each parent document is further divided into smaller child chunks (e.g., 200 tokens).
   - Child chunks are embedded in the vector index.
   - Upon query match, the system looks up the matched child chunk, but returns the full **Parent Document** to the LLM context.

2. **Sentence Window Retrieval**:
   - Individual sentences are embedded.
   - Upon retrieval, the system dynamically expands the context window by retrieving the $k$ preceding and $k$ succeeding sentences (e.g., window size $k=3$).`
      },
      {
        id: "sec-10-03",
        title: "Contextual Compression & Token Budget Optimization",
        content: `Feeding raw 10,000-token retrieved contexts directly into an LLM degrades reasoning due to the **'Lost-in-the-Middle' phenomenon** (Liu et al., 2023), where LLMs focus on tokens at the beginning and end of prompts while ignoring middle passages.

**Contextual Compression** filters out irrelevant sentences within retrieved passages prior to LLM submission using token-level cross-encoders or selective LLM extractors, shrinking context size by 40–70% while raising factual accuracy.`
      }
    ]
  },
  {
    id: "unit-11",
    number: "11",
    title: "Dynamic Query Routing & Orchestration",
    subtitle: "Directing Questions to Vector, Graph, SQL, or Direct LLM Execution Paths",
    summary: "Build intelligent routers that inspect query intent, structure, and complexity to dynamically dispatch requests to the optimal retrieval backend: Vector Search, Knowledge Graph Cypher traversal, Structured SQL, or zero-retrieval LLM paths.",
    topics: [
      {
        id: "sec-11-01",
        title: "The Multi-Engine Routing Challenge",
        content: `In an enterprise information ecosystem, no single retrieval store answers every question efficiently:
- Point-fact semantic lookups $\\to$ Vector Store (HNSW / Qdrant)
- Multi-hop relationship and dependency tracing $\\to$ Graph Database (Neo4j Cypher)
- Numerical aggregations and time-series metrics $\\to$ Analytical SQL Database (DuckDB / ClickHouse)
- Conversational chitchat and general reasoning $\\to$ Direct LLM completion without retrieval

A unified intelligent router evaluates each inbound query and delegates to the appropriate backend, optimizing latency, compute cost, and retrieval accuracy.`
      },
      {
        id: "sec-11-02",
        title: "Routing Architectures: Semantic Router vs LLM Intent Classifier",
        content: `1. **Semantic Vector Router (Low Latency: <15ms)**:
   - Uses pre-computed anchor centroid embeddings for each routing category.
   - Computes cosine similarity between user query and routing anchors.
   - Extremely fast, ideal for high-throughput API gateways.

2. **LLM Structured Function Router (High Precision: 200–500ms)**:
   - Utilizes small, specialized SLMs (e.g., Llama-3.2-3B or Qwen-2.5-3B) with JSON Schema output.
   - Able to extract structured parameters (date ranges, entity IDs, metric names) simultaneously during classification.`
      },
      {
        id: "sec-11-03",
        title: "Adaptive Fallback & Multi-Modal Hybrid Ensembles",
        content: `When a primary route yields insufficient confidence (e.g., Cypher query returns zero graph paths or vector cosine distance exceeds a safety threshold $> 0.45$), the orchestration engine activates an **Adaptive Fallback Policy**:
- Falling back from Cypher to Hybrid BM25+Vector.
- Re-querying with query expansion.
- Generating a polite clarifying question if ambiguities persist.`
      }
    ]
  },
  {
    id: "unit-12",
    number: "12",
    title: "Production Knowledge Engineering & Governance",
    subtitle: "Schema Evolution, Entity Deduplication, Evaluation (Ragas), and Drift",
    summary: "Deploy and govern industrial-grade Knowledge Graphs. Learn techniques for handling knowledge drift, temporal validity, automated entity deduplication (blocking, Jaro-Winkler), and evaluating RAG quality using Ragas metrics.",
    topics: [
      {
        id: "sec-12-01",
        title: "Knowledge Drift & Temporal Graph Management",
        content: `Knowledge is rarely static. Facts that were true yesterday (e.g., 'Company X CEO is Alice') may be superseded today ('Alice resigned; Bob is CEO').

**Temporal Knowledge Graphs (TKG)** annotate edges with validity intervals:
\`\`\`cypher
(:Person {name: 'Alice'})-[:HOLDS_ROLE {role: 'CEO', valid_from: date('2021-01-01'), valid_to: date('2024-06-30')}]->(:Company {name: 'TechCorp'})
\`\`\`

Queries specify temporal evaluation windows (\`WHERE r.valid_from <= $queryDate <= r.valid_to\`), preventing historical hallucinations.`
      },
      {
        id: "sec-12-02",
        title: "Large-Scale Entity Deduplication & Link Prediction",
        content: `When aggregating knowledge graphs from dozens of independent departments:
- **Blocking Techniques**: Partitioning millions of entities into candidate buckets by Phonetic Metaphone or Locality Sensitive Hashing (LSH).
- **Pairwise Similarity Comparison**: Jaro-Winkler string similarity, vector cosine similarity of descriptions, and shared neighbor graph Jaccard index:

$$J(u, v) = \\frac{|\\Gamma(u) \\cap \\Gamma(v)|}{|\\Gamma(u) \\cup \\Gamma(v)|}$$

- **Link Prediction**: Graph Neural Networks (GNNs) or embedding models (TransE, RotatE) predict missing relationships based on surrounding topological patterns.`
      },
      {
        id: "sec-12-03",
        title: "Rigorous Evaluation with RAG Triad & Ragas Metrics",
        content: `Continuous evaluation in CI/CD pipelines relies on the **Ragas Evaluation Framework**:
1. **Faithfulness**: Measures whether all claims in the generated answer are grounded in the retrieved context (detects hallucinations).
2. **Answer Relevance**: Assesses how directly the answer addresses the user's initial question.
3. **Context Precision**: Evaluates whether retrieved ground-truth chunks and graph triples appear at the top of the context ranking.
4. **Context Recall**: Verifies that all necessary supporting facts required to answer the question were successfully retrieved.`
      }
    ]
  }
];

const practicalLabs = [
  {
    id: "lab-01",
    number: "01",
    title: "Lab 1: In-Memory Knowledge Graph Construction with NetworkX",
    difficulty: "Intermediate",
    duration: "3.5 hours",
    summary: "Construct a directed knowledge graph from raw technical text using Python and NetworkX. Implement entity extraction, triple mapping, shortest-path calculation, and interactive graph serialization.",
    code: `import networkx as nx
import json

class InMemoryKnowledgeGraph:
    def __init__(self):
        self.graph = nx.DiGraph()

    def add_entity(self, entity_id: str, label: str, properties: dict):
        self.graph.add_node(entity_id, label=label, **properties)

    def add_relation(self, source_id: str, target_id: str, rel_type: str, properties: dict = None):
        props = properties or {}
        self.graph.add_edge(source_id, target_id, relation=rel_type, **props)

    def find_shortest_causal_path(self, start_id: str, end_id: str):
        try:
            path = nx.shortest_path(self.graph, source=start_id, target=end_id)
            path_details = []
            for i in range(len(path) - 1):
                u, v = path[i], path[i+1]
                edge_data = self.graph.get_edge_data(u, v)
                u_node = self.graph.nodes[u]
                v_node = self.graph.nodes[v]
                path_details.append({
                    "from": u, "from_label": u_node.get("label"),
                    "relation": edge_data.get("relation"),
                    "to": v, "to_label": v_node.get("label")
                })
            return {"found": True, "hops": len(path) - 1, "path": path_details}
        except nx.NetworkXNoPath:
            return {"found": False, "hops": 0, "path": []}

    def serialize_subgraph_markdown(self, center_id: str, radius: int = 1) -> str:
        subgraph_nodes = nx.single_source_shortest_path_length(self.graph, center_id, cutoff=radius).keys()
        subgraph = self.graph.subgraph(subgraph_nodes)
        
        lines = [f"## Knowledge Graph Context around: {center_id}"]
        for node in subgraph.nodes():
            node_data = self.graph.nodes[node]
            lines.append(f"\\n### Entity: {node} [{node_data.get('label', 'Entity')}]")
            for k, val in node_data.items():
                if k != 'label':
                    lines.append(f"- {k}: {val}")
            
            # Outgoing relations
            out_edges = self.graph.out_edges(node, data=True)
            if out_edges:
                lines.append("  Relationships:")
                for _, target, data in out_edges:
                    lines.append(f"  - [{data.get('relation')}] -> {target}")
        return "\\n".join(lines)

# Example Execution
kg = InMemoryKnowledgeGraph()
kg.add_entity("Java_Synchronized", "LanguageFeature", {"desc": "Mutual exclusion lock"})
kg.add_entity("Intrinsic_Lock", "JVMConcept", {"desc": "Monitor lock associated with Java objects"})
kg.add_entity("OS_Mutex_Contention", "OSConcept", {"desc": "Heavyweight context switch kernel lock"})
kg.add_entity("CPU_Throttling", "HardwareSymptom", {"desc": "High system CPU time due to context switches"})

kg.add_relation("Java_Synchronized", "Intrinsic_Lock", "ACQUIRES")
kg.add_relation("Intrinsic_Lock", "OS_Mutex_Contention", "ESCALATES_TO_WHEN_BLOCKED")
kg.add_relation("OS_Mutex_Contention", "CPU_Throttling", "TRIGGERS")

result = kg.find_shortest_causal_path("Java_Synchronized", "CPU_Throttling")
print("Shortest Path Result:", json.dumps(result, indent=2))
print(kg.serialize_subgraph_markdown("Java_Synchronized", radius=2))`
  },
  {
    id: "lab-02",
    number: "02",
    title: "Lab 2: Production Neo4j & Cypher Graph Database Engineering",
    difficulty: "Advanced",
    duration: "4.5 hours",
    summary: "Spin up a Neo4j instance, define strict constraints, and write optimized Cypher queries for multi-hop graph traversals, entity neighborhoods, and vector-guided graph expansions.",
    code: `from neo4j import GraphDatabase

class Neo4jKnowledgeStore:
    def __init__(self, uri, auth):
        self.driver = GraphDatabase.driver(uri, auth=auth)

    def close(self):
        self.driver.close()

    def initialize_schema(self):
        with self.driver.session() as session:
            # Create uniqueness constraints
            session.run("""
            CREATE CONSTRAINT unique_concept_name IF NOT EXISTS
            FOR (c:Concept) REQUIRE c.name IS UNIQUE
            """)
            # Create full-text search index
            session.run("""
            CREATE FULLTEXT INDEX conceptTextIndex IF NOT EXISTS
            FOR (c:Concept) ON EACH [c.name, c.description]
            """)
            print("Schema constraints and indexes applied successfully.")

    def upsert_concept_triple(self, source: str, source_type: str, 
                              relation: str, target: str, target_type: str, weight: float = 1.0):
        query = """
        MERGE (s:Concept {name: $source})
        ON CREATE SET s.type = $source_type, s.created_at = timestamp()
        MERGE (t:Concept {name: $target})
        ON CREATE SET t.type = $target_type, t.created_at = timestamp()
        MERGE (s)-[r:RELATION {type: $relation}]->(t)
        ON CREATE SET r.weight = $weight, r.count = 1
        ON MATCH SET r.count = r.count + 1
        RETURN s.name, type(r), t.name
        """
        with self.driver.session() as session:
            session.run(query, source=source, source_type=source_type,
                        relation=relation, target=target, target_type=target_type, weight=weight)

    def query_multihop_reasoning(self, start_concept: str, max_hops: int = 3):
        query = """
        MATCH path = (start:Concept {name: $start_concept})-[r:RELATION*1..3]->(dest:Concept)
        WHERE ALL(rel IN relationships(path) WHERE rel.weight >= 0.7)
        RETURN [node IN nodes(path) | node.name] AS PathNodes,
               [rel IN relationships(path) | rel.type] AS Relations,
               length(path) AS HopLength
        ORDER BY HopLength ASC
        LIMIT 15
        """
        with self.driver.session() as session:
            result = session.run(query, start_concept=start_concept)
            return [record.data() for record in result]`
  },
  {
    id: "lab-03",
    number: "03",
    title: "Lab 3: Hybrid Retrieval Pipeline with BM25 & Reciprocal Rank Fusion",
    difficulty: "Intermediate",
    duration: "4.0 hours",
    summary: "Implement dual-track dense and sparse retrieval from scratch. Index document passages with BM25Okapi and OpenAI/HuggingFace embeddings, fusing candidate sets using Reciprocal Rank Fusion (RRF).",
    code: `import numpy as np
from rank_bm25 import BM25Okapi
from typing import List, Dict, Any

class HybridSearchEngine:
    def __init__(self, documents: List[Dict[str, Any]], embedding_client):
        self.documents = documents
        self.embedding_client = embedding_client
        
        # Tokenize corpus for BM25
        self.tokenized_corpus = [doc["content"].lower().split() for doc in documents]
        self.bm25 = BM25Okapi(self.tokenized_corpus)
        
        # Precompute dense embeddings
        print("Precomputing dense embeddings for corpus...")
        self.embeddings = np.array([
            embedding_client.embed(doc["content"]) for doc in documents
        ])

    def sparse_search(self, query: str, top_k: int = 10) -> List[Dict[str, Any]]:
        query_tokens = query.lower().split()
        scores = self.bm25.get_scores(query_tokens)
        ranked_indices = np.argsort(scores)[::-1][:top_k]
        return [
            {"id": self.documents[idx]["id"], "content": self.documents[idx]["content"], 
             "score": float(scores[idx]), "rank": r + 1}
            for r, idx in enumerate(ranked_indices) if scores[idx] > 0
        ]

    def dense_search(self, query: str, top_k: int = 10) -> List[Dict[str, Any]]:
        query_vec = np.array(self.embedding_client.embed(query))
        # Compute cosine similarities
        norm_query = np.linalg.norm(query_vec)
        norm_docs = np.linalg.norm(self.embeddings, axis=1)
        similarities = np.dot(self.embeddings, query_vec) / (norm_docs * norm_query + 1e-9)
        
        ranked_indices = np.argsort(similarities)[::-1][:top_k]
        return [
            {"id": self.documents[idx]["id"], "content": self.documents[idx]["content"], 
             "score": float(similarities[idx]), "rank": r + 1}
            for r, idx in enumerate(ranked_indices)
        ]

    def reciprocal_rank_fusion(self, query: str, top_k: int = 5, k_constant: int = 60) -> List[Dict[str, Any]]:
        dense_results = self.dense_search(query, top_k=top_k * 2)
        sparse_results = self.sparse_search(query, top_k=top_k * 2)
        
        rrf_scores = {}
        doc_map = {doc["id"]: doc for doc in self.documents}
        
        # Process dense ranks
        for item in dense_results:
            doc_id = item["id"]
            rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k_constant + item["rank"]))
            
        # Process sparse ranks
        for item in sparse_results:
            doc_id = item["id"]
            rrf_scores[doc_id] = rrf_scores.get(doc_id, 0.0) + (1.0 / (k_constant + item["rank"]))
            
        # Sort by fused score
        sorted_docs = sorted(rrf_scores.items(), key=lambda x: x[1], reverse=True)[:top_k]
        
        final_results = []
        for rank, (doc_id, score) in enumerate(sorted_docs, start=1):
            final_results.append({
                "final_rank": rank,
                "rrf_score": score,
                "document": doc_map[doc_id]
            })
        return final_results`
  },
  {
    id: "lab-04",
    number: "04",
    title: "Lab 4: Automated Triple Extraction with Pydantic & Structured LLM",
    difficulty: "Advanced",
    duration: "4.5 hours",
    summary: "Build an automated Information Extraction (IE) engine using instructor/Pydantic with Ollama or OpenAI. Parse complex technical articles into verified nodes, relationships, and edge attributes.",
    code: `from pydantic import BaseModel, Field
from typing import List
import json

class GraphNode(BaseModel):
    name: str = Field(description="Normalized proper noun or technical concept identifier")
    category: str = Field(description="Category: e.g. Concept, Architecture, Tool, Risk, Metric")
    summary: str = Field(description="1-sentence explanation of role")

class GraphEdge(BaseModel):
    source: str = Field(description="Exact name of source node")
    target: str = Field(description="Exact name of target node")
    relationship: str = Field(description="UPPERCASE_SNAKE_CASE verb predicate (e.g. IMPLEMENTS, MITIGATES)")
    confidence: float = Field(ge=0.0, le=1.0, description="Confidence score")
    evidence: str = Field(description="Exact snippet from source text supporting this relationship")

class ExtractedKnowledgeGraph(BaseModel):
    nodes: List[GraphNode]
    edges: List[GraphEdge]

EXTRACTION_SYSTEM_PROMPT = """You are an expert Knowledge Graph Ontologist. 
Your goal is to parse unstructured technical text into high-fidelity knowledge graph entities and directed relationships.
Follow these ontological constraints:
1. Normalize names to title case (e.g., 'Kafka', not 'kafka message broker').
2. Ensure every edge connects two valid nodes in the nodes list.
3. Use precise predicates: 'DEPENDS_ON', 'CAUSES', 'MITIGATES', 'IMPLEMENTS', 'CONFIGURES'.
4. Include verbatim evidence for each extracted edge."""

def mock_llm_extractor(text: str) -> ExtractedKnowledgeGraph:
    # Simulated structured output response conforming to the Pydantic schema
    return ExtractedKnowledgeGraph(
        nodes=[
            GraphNode(name="Virtual Thread", category="Concept", summary="Lightweight user-mode thread introduced in Java 21"),
            GraphNode(name="Carrier Thread", category="Architecture", summary="Underlying OS platform thread executing virtual threads"),
            GraphNode(name="Thread Pinning", category="Risk", summary="Virtual thread locked to carrier thread during native operations"),
            GraphNode(name="Synchronized Block", category="LanguageFeature", summary="Java mutual exclusion monitor locking mechanism")
        ],
        edges=[
            GraphEdge(source="Virtual Thread", target="Carrier Thread", relationship="RUNS_ON", confidence=0.98,
                      evidence="Virtual threads are mounted on carrier threads during CPU execution."),
            GraphEdge(source="Synchronized Block", target="Thread Pinning", relationship="TRIGGERS", confidence=0.92,
                      evidence="Entering a synchronized block pins the virtual thread to its underlying carrier thread."),
            GraphEdge(source="Thread Pinning", target="Carrier Thread", relationship="BLOCKS_REUSE_OF", confidence=0.89,
                      evidence="While pinned, the carrier thread cannot take on other virtual thread tasks.")
        ]
    )

sample_text = "In modern Java 21+, virtual threads mount on carrier threads..."
result = mock_llm_extractor(sample_text)
print(json.dumps(result.model_dump(), indent=2))`
  },
  {
    id: "lab-05",
    number: "05",
    title: "Lab 5: Advanced Query Transformation & HyDE Generator",
    difficulty: "Advanced",
    duration: "4.0 hours",
    summary: "Construct a modular query transformation pipeline including Query Rewriting, Sub-Question Decomposition (DAG generation), and Hypothetical Document Embeddings (HyDE).",
    code: `from typing import List, Dict

class QueryTransformationEngine:
    def __init__(self, llm_invoker):
        self.llm = llm_invoker

    def rewrite_conversational_query(self, history: List[Dict[str, str]], current_query: str) -> str:
        prompt = f"""Given the following conversation history and the latest user query, 
rewrite the latest query into a complete, standalone question containing all necessary context and entity names.
Do NOT answer the question, only output the rewritten question string.

History:
{history}

Latest Query: {current_query}
Standalone Question:"""
        return self.llm(prompt).strip()

    def generate_hyde_passage(self, query: str) -> str:
        prompt = f"""You are a technical document writer. Write a detailed, authoritative paragraph 
answering the following technical query. Focus on domain mechanisms, technical terminology, 
and expected architectural implications.

Question: {query}
Hypothetical Document:"""
        return self.llm(prompt).strip()

    def decompose_sub_questions(self, complex_query: str) -> List[str]:
        prompt = f"""Decompose the following complex query into 2 to 4 atomic, focused sub-questions 
that can each be independently answered by a specialized retrieval system.
Output each question on a new line starting with a dash (-).

Query: {complex_query}
Sub-questions:"""
        response = self.llm(prompt)
        return [line.lstrip("- ").strip() for line in response.splitlines() if line.strip().startswith("-")]`
  },
  {
    id: "lab-06",
    number: "06",
    title: "Lab 6: End-to-End Graph-Enhanced Hybrid RAG with Reranking",
    difficulty: "Expert",
    duration: "5.5 hours",
    summary: "Integrate vector embeddings, BM25, Neo4j property graphs, and a cross-encoder reranker into a production question-answering pipeline with verifiable citations.",
    code: `class GraphEnhancedHybridRAG:
    def __init__(self, hybrid_searcher, graph_store, reranker, generator_llm):
        self.searcher = hybrid_searcher
        self.graph = graph_store
        self.reranker = reranker
        self.llm = generator_llm

    def answer_inquiry(self, query: str) -> Dict[str, Any]:
        # Step 1: Hybrid First-Stage Retrieval (Text Chunks)
        fused_candidates = self.searcher.reciprocal_rank_fusion(query, top_k=15)
        
        # Step 2: Extract Entities & Subgraph Traversal
        seed_entities = self.graph.extract_seed_entities(query)
        graph_facts = []
        for entity in seed_entities:
            paths = self.graph.query_multihop_reasoning(entity, max_hops=2)
            graph_facts.extend(paths)
            
        # Step 3: Neural Cross-Encoder Reranking
        candidate_texts = [c["document"]["content"] for c in fused_candidates]
        rerank_scores = self.reranker.compute_scores(query, candidate_texts)
        
        # Select top-5 chunks
        sorted_pairs = sorted(zip(rerank_scores, fused_candidates), key=lambda x: x[0], reverse=True)[:5]
        top_chunks = [item[1]["document"] for item in sorted_pairs]
        
        # Step 4: Assemble Context
        context_str = "=== VERIFIED KNOWLEDGE GRAPH TRIPLE PATHS ===\\n"
        for fact in graph_facts[:10]:
            context_str += f"- {' -> '.join(fact['PathNodes'])} (Via: {', '.join(fact['Relations'])})\\n"
            
        context_str += "\\n=== RETRIEVED HIGH-PRECISION TEXT PASSAGES ===\\n"
        for i, chunk in enumerate(top_chunks, start=1):
            context_str += f"[Passage {i} - ID: {chunk['id']}]:\\n{chunk['content']}\\n\\n"
            
        # Step 5: Grounded Answer Synthesis
        system_prompt = """You are a Principal AI Knowledge Engineer. Answer the user question 
synthesizing both the verified knowledge graph relational paths and textual passages. 
Always cite passages [Passage X] and graph paths [Path: A -> B] for every factual statement."""
        
        user_prompt = f"Context:\\n{context_str}\\n\\nUser Inquiry: {query}"
        final_answer = self.llm.generate(system_prompt, user_prompt)
        
        return {
            "answer": final_answer,
            "citations": {
                "graph_paths": graph_facts[:10],
                "passages": [c["id"] for c in top_chunks]
            }
        }`
  }
];

const capstoneProject = {
  id: "capstone-15",
  title: "Enterprise Knowledge Engineering Platform & Multi-Hop Educational QA",
  overview: "Design, construct, evaluate, and deploy an enterprise-grade Knowledge Engineering & Graph RAG platform. Your system will ingest an expansive software engineering corpus (Java concurrency, distributed consensus, microservice design patterns, cloud observability), build a persistent Neo4j Knowledge Graph with automated entity resolution, implement Leiden community detection for global thematic summaries, and orchestrate a hybrid multi-hop retrieval engine with cross-encoder neural rerankers and Ragas evaluation.",
  duration: "16–20 hours",
  deliverables: [
    "Comprehensive Information Extraction Pipeline (NER + Relation Extraction + Coreference Resolution) ingesting PDF/Markdown corpora into Neo4j.",
    "Persistent Neo4j Graph Database with schema constraints, vector indexing, full-text indexes, and index-free adjacency traversals.",
    "Dual-track Hybrid Retrieval engine combining BM25Okapi and BGE dense embeddings with Reciprocal Rank Fusion (RRF).",
    "Hierarchical Leiden Community Detection implementation generating multi-tier thematic summaries for Microsoft GraphRAG-style Global Search.",
    "Adaptive Query Router and Multi-Hop Reasoner that dynamically traces causal dependency chains (e.g., code locks $\\to$ kernel waits $\\to$ CPU spikes).",
    "Cross-Encoder Neural Reranking layer (bge-reranker-large) and contextual token compression module.",
    "Automated Ragas Evaluation suite calculating Faithfulness, Answer Relevance, Context Precision, and Context Recall across 50 benchmark multi-hop test queries."
  ],
  architectureMilestones: [
    {
      phase: "Milestone 1: Knowledge Modeling & Neo4j Ingestion",
      tasks: [
        "Design the domain property graph ontology with 10+ node labels and 15+ typed directed relationships.",
        "Implement LLM-guided structured extraction using Pydantic validation and coreference canonicalization.",
        "Execute batch MERGE Cypher transactions to ingest 5,000+ entities and 12,000+ relationships."
      ]
    },
    {
      phase: "Milestone 2: Hybrid Search & Cross-Encoder Reranker",
      tasks: [
        "Construct an in-memory or Qdrant vector index alongside an inverted BM25 index.",
        "Implement parameterized Reciprocal Rank Fusion with $k=60$ and tunable sparse/dense weights.",
        "Integrate a Cross-Encoder reranker to rescore top-50 hybrid candidates to top-5 high-signal chunks."
      ]
    },
    {
      phase: "Milestone 3: Community Summaries & Global Search",
      tasks: [
        "Run the Leiden algorithm to detect entity clusters at Level 0, Level 1, and Level 2.",
        "Precompute bottom-up LLM community summaries and store them with hierarchical parent pointers.",
        "Implement map-reduce global query execution answering corpus-wide architectural risk questions."
      ]
    },
    {
      phase: "Milestone 4: Multi-Hop Reasoning & Ragas Evaluation",
      tasks: [
        "Implement Dijkstra and Personalized PageRank (PPR) algorithms to extract explanatory subgraphs.",
        "Construct a Query Transformation pipeline (HyDE, Sub-question decomposition, Query rewriting).",
        "Deploy the automated Ragas evaluation suite and achieve Faithfulness $\\ge 0.92$ and Context Precision $\\ge 0.88$."
      ]
    }
  ]
};

const codingAssignments = [
  {
    id: "assign-01",
    title: "Exercise 1: BM25 Term Frequency Saturation & Length Normalization",
    difficulty: "Medium",
    instructions: "Implement the BM25Okapi scoring function from scratch in Python. Verify saturation behavior when term frequency increases from 1 to 50 under various document length conditions.",
    starterCode: `import math

def calculate_bm25_score(query_tokens, doc_tokens, corpus_stats, k1=1.5, b=0.75):
    # TODO: Implement BM25 formula
    pass`
  },
  {
    id: "assign-02",
    title: "Exercise 2: Reciprocal Rank Fusion (RRF) Fusing Engine",
    difficulty: "Medium",
    instructions: "Write a function that accepts two or more ranked candidate lists (e.g. dense vector ranks, BM25 ranks, full-text ranks) and outputs a merged ranking using RRF with parameter $k=60$.",
    starterCode: `def reciprocal_rank_fusion(ranking_lists, k=60):
    # ranking_lists: List[List[str]] (list of doc_ids in ranked order)
    # TODO: Return sorted list of tuples (doc_id, rrf_score)
    pass`
  },
  {
    id: "assign-03",
    title: "Exercise 3: Distribution-Based Score Fusion (DBSF)",
    difficulty: "Hard",
    instructions: "Implement Distribution-Based Score Fusion (DBSF) by computing the mean and variance of score distributions across disparate search engines, applying sigmoid normalization before weighted linear combination.",
    starterCode: `def distribution_based_score_fusion(dense_scores, sparse_scores, alpha=0.5):
    # TODO: Calculate z-scores and sigmoid mapping
    pass`
  },
  {
    id: "assign-04",
    title: "Exercise 4: NetworkX Directed Graph Construction & Degree Centrality",
    difficulty: "Easy",
    instructions: "Load a dictionary of entity triples into a NetworkX DiGraph. Calculate in-degree, out-degree, and betweenness centrality to identify the primary hub entities in the corpus.",
    starterCode: `import networkx as nx

def analyze_graph_centrality(triples):
    # triples: List of (source, relation, target)
    # TODO: Build graph and return top-5 nodes by betweenness centrality
    pass`
  },
  {
    id: "assign-05",
    title: "Exercise 5: Cypher Schema Constraints & Vector Index Creation",
    difficulty: "Medium",
    instructions: "Write raw Cypher statements to establish uniqueness constraints on Entity identifiers, create a fulltext search index on Entity name and summary, and configure a 1536-dimensional vector index for cosine distance.",
    starterCode: `def get_cypher_schema_queries():
    # TODO: Return list of Cypher DDL strings
    return []`
  },
  {
    id: "assign-06",
    title: "Exercise 6: Multi-Hop Cypher Variable-Length Path Query",
    difficulty: "Medium",
    instructions: "Craft an optimized Cypher query that finds all paths of length 1 to 4 between an input Concept and any SecurityRisk node, returning the path length, node names, and relationship types.",
    starterCode: `def build_pathfinding_cypher(start_concept_name, max_hops=4):
    # TODO: Return Cypher query string with parameters
    pass`
  },
  {
    id: "assign-07",
    title: "Exercise 7: Pydantic Schema for LLM Triple Extraction",
    difficulty: "Easy",
    instructions: "Define a robust Pydantic data model for Information Extraction that validates entity categories, prevents self-referential edges, and enforces confidence scores between 0.0 and 1.0.",
    starterCode: `from pydantic import BaseModel, Field

# TODO: Define Entity, Relation, and ExtractionContainer classes`
  },
  {
    id: "assign-08",
    title: "Exercise 8: Entity Disambiguation via Jaro-Winkler & Token Set Ratio",
    difficulty: "Hard",
    instructions: "Implement an entity deduplication algorithm that merges near-duplicate entity strings (e.g. 'PostgreSQL 15', 'Postgres DB', 'PostgreSQL database') into canonical entities using string similarity and prefix matching.",
    starterCode: `def deduplicate_entities(entity_list, threshold=0.85):
    # TODO: Cluster matching entities and assign canonical names
    pass`
  },
  {
    id: "assign-09",
    title: "Exercise 9: Graph Subgraph Serialization to Markdown",
    difficulty: "Medium",
    instructions: "Given a 2-hop extracted subgraph from NetworkX, serialize the nodes, metadata attributes, and relationships into clean hierarchical Markdown optimized for LLM token ingestion.",
    starterCode: `def serialize_subgraph_to_markdown(subgraph, root_node):
    # TODO: Output clean Markdown string
    pass`
  },
  {
    id: "assign-10",
    title: "Exercise 10: Leiden Community Detection Partitioning",
    difficulty: "Hard",
    instructions: "Implement or wrap a graph community detection algorithm (Leiden or Louvain) to partition a technical concept graph into non-overlapping clusters. Return cluster membership maps.",
    starterCode: `def partition_communities(graph):
    # TODO: Return dict mapping community_id -> list of node_ids
    pass`
  },
  {
    id: "assign-11",
    title: "Exercise 11: Hierarchical Community Summary Generator",
    difficulty: "Hard",
    instructions: "Write a map-reduce pipeline that accepts a partitioned community of entities and relationships, prompts an LLM to generate a comprehensive thematic summary, and aggregates summaries up the hierarchy.",
    starterCode: `def generate_community_summary(community_nodes, community_edges, llm_fn):
    # TODO: Format prompt and return synthesis
    pass`
  },
  {
    id: "assign-12",
    title: "Exercise 12: Dijkstra Shortest Path with Confidence Weights",
    difficulty: "Medium",
    instructions: "Implement Dijkstra's algorithm on a graph where edge weights equal negative log probabilities ($-\\log(p)$). Find the most probable explanatory path between two distant entities.",
    starterCode: `def most_probable_explanation_path(graph, start_node, end_node):
    # TODO: Execute weighted pathfinding
    pass`
  },
  {
    id: "assign-13",
    title: "Exercise 13: Personalized PageRank (PPR) for Context Selection",
    difficulty: "Hard",
    instructions: "Calculate Personalized PageRank (PPR) using power iteration given a set of seed query entities. Rank all graph nodes by topical relevance to the seed set.",
    starterCode: `import numpy as np

def compute_personalized_pagerank(adjacency_matrix, seed_indices, alpha=0.85, max_iter=100):
    # TODO: Return steady-state probability vector
    pass`
  },
  {
    id: "assign-14",
    title: "Exercise 14: Multi-Turn Conversational Query Rewriter",
    difficulty: "Medium",
    instructions: "Build a Query Rewriter that consumes a list of past conversation turns and transforms an anaphoric query ('What about its concurrency guarantees?') into a fully specified independent search query.",
    starterCode: `def rewrite_query_with_context(history, current_query, llm_caller):
    # TODO: Formulate contextual rewriting prompt
    pass`
  },
  {
    id: "assign-15",
    title: "Exercise 15: Sub-Question Decomposition Planner",
    difficulty: "Medium",
    instructions: "Given a multi-part comparative question, generate a structured execution plan dividing the request into discrete sub-questions and an aggregation synthesis prompt.",
    starterCode: `def plan_sub_questions(complex_question, llm_caller):
    # TODO: Output list of atomic questions
    pass`
  },
  {
    id: "assign-16",
    title: "Exercise 16: HyDE (Hypothetical Document Embeddings) Pipeline",
    difficulty: "Easy",
    instructions: "Implement the HyDE pipeline: generate a hypothetical passage for an engineering question, embed the hypothetical text, and execute vector search against the document store.",
    starterCode: `def hyde_retrieval(query, llm_caller, embedding_fn, vector_store, top_k=5):
    # TODO: Generate passage, embed, and query store
    pass`
  },
  {
    id: "assign-17",
    title: "Exercise 17: Cross-Encoder Neural Reranking Scoring",
    difficulty: "Medium",
    instructions: "Write a reranker wrapper using HuggingFace transformers or FlagEmbedding (bge-reranker-large) that scores (query, passage) pairs and returns re-ordered results with normalized logits.",
    starterCode: `def rerank_passages(query, candidate_passages, reranker_model, top_n=5):
    # TODO: Score pairs and sort
    pass`
  },
  {
    id: "assign-18",
    title: "Exercise 18: Ragas Automated Metric Calculation",
    difficulty: "Hard",
    instructions: "Implement synthetic evaluation scoring for Faithfulness and Context Recall: parse ground truth answers, contexts, and generated outputs, computing token overlap and claim verification ratios.",
    starterCode: `def evaluate_faithfulness(generated_answer, retrieved_contexts, llm_evaluator):
    # TODO: Extract atomic claims and verify grounding
    pass`
  }
];

const theoryQuestions = [
  {
    id: "theory-01",
    question: "Explain why standard naive vector RAG fails on global thematic aggregation queries (e.g., 'What are the main architectural themes across all 500 RFC documents?').",
    answer: "Naive vector RAG relies on finding the top-k chunks with highest cosine similarity to the query string in latent embedding space. A global thematic query does not seek a specific isolated passage; rather, its answer is distributed across hundreds or thousands of documents. Because vector similarity ranks isolated points rather than synthesizing global topology, top-k chunks capture only fragmented anecdotes. Furthermore, context window limits prevent feeding hundreds of chunks to the LLM. Microsoft GraphRAG solves this by pre-clustering the entire corpus into hierarchical Leiden communities and generating community summaries at multiple abstraction levels."
  },
  {
    id: "theory-02",
    question: "Derive the BM25Okapi scoring formula and explain the mathematical role of parameters k1 and b.",
    answer: "The BM25 formula scores document D against query Q as: \\sum IDF(q_i) * (f(q_i, D) * (k1 + 1)) / (f(q_i, D) + k1 * (1 - b + b * (|D| / avgdl))). Parameter k1 controls the term frequency saturation limit: as the count of a query word in a document grows, the score asymptotes toward (k1 + 1) * IDF, preventing repetitive keyword stuffing from dominating. Parameter b (typically 0.75) dictates document length penalization: b=1 fully normalizes term frequency by the ratio of document length to average corpus length, while b=0 disables length normalization entirely."
  },
  {
    id: "theory-03",
    question: "What is Reciprocal Rank Fusion (RRF), why is constant k standardly set to 60, and why is RRF superior to raw score normalization?",
    answer: "RRF calculates document relevance by summing reciprocal rank positions across multiple search systems: Score(d) = \\sum 1 / (k + rank_i(d)). Score normalization (e.g. min-max or z-score) suffers because dense cosine similarities and sparse BM25 scores follow fundamentally different, non-stationary probability distributions that vary wildly across queries. RRF is scale-invariant because it relies purely on ordinal rankings. The smoothing constant k=60 was empirically shown by Cormack, Clarke, and Buettcher to mitigate the excessive advantage given to the top 1–2 ranked items, providing balanced weight to documents that perform consistently well across multiple ranking lists."
  },
  {
    id: "theory-04",
    question: "Define Index-Free Adjacency (IFA) in graph databases and contrast its computational complexity with relational SQL JOINs.",
    answer: "In relational databases, joining two tables requires an index lookup on foreign keys, typically operating in O(log N) or O(N log N) time, which scales poorly when joining across 4 to 6 tables. In contrast, graph databases with Index-Free Adjacency (like Neo4j) store direct physical memory pointer offsets between connected node records on disk. Traversing an edge requires simply dereferencing a memory address (O(1) constant time per hop). Graph traversal complexity is therefore O(k), where k is the localized degree of the traversed subgraph, completely decoupled from the total number of records N in the entire database."
  },
  {
    id: "theory-05",
    question: "Differentiate between Labeled Property Graphs (LPG) and RDF/OWL Semantic Web Graphs in terms of data model and enterprise suitability.",
    answer: "LPG models (Neo4j, Memgraph) represent data as nodes and directed relationships, both of which can possess arbitrary key-value property maps. Queries are expressed in Cypher or GQL, making them developer-friendly, performant for graph traversals, and well-suited for attaching metadata (timestamps, confidence weights, chunk IDs) directly to edges. RDF/OWL represents data strictly as Subject-Predicate-Object triples using universal URIs/IRIs, queried with SPARQL. RDF enforces formal ontological rigor and logical inference (reasoners), but attaching properties to relationships requires complex reification or RDF-star, introducing overhead that makes LPG the predominant industry choice for Graph RAG."
  },
  {
    id: "theory-06",
    question: "Explain the multi-hop inference gap in naive RAG and how Knowledge Graphs resolve it.",
    answer: "The multi-hop gap occurs when answering a question requires connecting two concepts (A and C) whose relationship is mediated by an intermediate bridge entity (B) that appears across different documents. For example, Doc 1 states 'Service A communicates with Broker B', while Doc 2 states 'Broker B triggers Queue C overflow'. Naive vector search on 'Service A Queue C' fails because neither Doc 1 nor Doc 2 alone has high semantic similarity to both terms. A Knowledge Graph resolves this because edges between (Service A)-[:CALLS]->(Broker B)-[:TRIGGERS]->(Queue C) form a contiguous path. Graph traversal algorithms (BFS, Cypher variable hops) discover this path deterministically."
  },
  {
    id: "theory-07",
    question: "How does the Leiden community detection algorithm improve upon the Louvain algorithm in GraphRAG?",
    answer: "The Louvain algorithm optimizes modularity by iteratively grouping nodes, but has a well-documented flaw: it frequently leaves communities internally disconnected or weakly tied, creating artificial clusters. The Leiden algorithm introduces a crucial refinement phase between node aggregation steps. It guarantees that all discovered communities are connected and modularly optimal, runs faster through smart local moving heuristics, and creates hierarchical clusters (Level 0, Level 1, Level 2) that accurately mirror the true thematic hierarchy of complex knowledge bases."
  },
  {
    id: "theory-08",
    question: "Compare Local Search, Global Search, and DRIFT Search in Microsoft GraphRAG.",
    answer: "Local Search begins at seed entities identified in the query, explores their 1-hop and 2-hop neighborhoods, and retrieves adjacent raw text chunks; it is optimal for specific, localized entity questions. Global Search ignores chunk-level embeddings, instead sweeping across precomputed LLM Community Summaries at intermediate levels of the Leiden hierarchy using a map-reduce architecture; it is optimal for corpus-wide thematic queries. DRIFT Search combines both paradigms: it starts with high-level community overviews and dynamically expands down into granular entity subgraphs and chunks where ambiguity or deeper evidence is required."
  },
  {
    id: "theory-09",
    question: "What is Personalized PageRank (PPR) and how is it used for dynamic context selection in Graph RAG?",
    answer: "Personalized PageRank computes node importance relative to a specific set of seed nodes by modifying the standard PageRank random walk so that the teleport probability alpha (e.g., 0.15) always jumps back to the seed nodes rather than uniformly across the graph. In Graph RAG, when a user asks a question mentioning entities {X, Y}, PPR distributes random walk probabilities outwards from {X, Y}. Nodes with the highest steady-state probability represent the most topologically relevant concepts within the context of the user's specific query, providing an objective mathematical criterion for pruning large subgraphs."
  },
  {
    id: "theory-10",
    question: "How does HyDE (Hypothetical Document Embeddings) bridge the semantic asymmetry between queries and documents?",
    answer: "Queries and document passages exhibit asymmetric linguistic structures: queries are short, interrogative, and sparse, while documents are descriptive, assertive, and dense. Embedding a short query directly often yields low cosine similarity to the ideal document passage. HyDE instructs an LLM to hallucinate a speculative answer passage to the query. Even if the passage contains factual inaccuracies, its linguistic style, vocabulary, and semantic coordinates match document space. Embedding this hypothetical document retrieves true matching passages with substantially higher recall."
  },
  {
    id: "theory-11",
    question: "Explain Parent Document Retrieval and Sentence Window Retrieval as solutions to the chunk size trade-off.",
    answer: "Small chunks maximize embedding specificity but discard broader context; large chunks preserve context but dilute vector signal. Parent Document Retrieval embeds small child chunks (e.g. 150 tokens) to ensure precise vector matching, but upon retrieval, fetches and injects the larger parent document (e.g. 1,000 tokens) into the LLM prompt. Sentence Window Retrieval embeds individual sentences, but upon retrieval, dynamically expands the context by retrieving the k preceding and k following sentences, supplying the generator with localized narrative context without sacrificing retrieval specificity."
  },
  {
    id: "theory-12",
    question: "Describe the architectural difference between Bi-Encoder and Cross-Encoder retrieval models.",
    answer: "A Bi-Encoder (such as text-embedding-3 or BGE-small) processes the query and candidate documents independently into static dense vectors, scoring relevance via dot product or cosine similarity. This allows precomputing millions of document vectors offline and executing sub-millisecond ANN searches, but prevents cross-token attention between query and document. A Cross-Encoder feeds the concatenated query and document string [CLS] Q [SEP] D [EOS] through all transformer self-attention layers simultaneously, capturing fine-grained cross-token interactions. Cross-Encoders are computationally too slow for first-stage retrieval over millions of records, but provide state-of-the-art accuracy when used as second-stage rerankers on top-50 candidates."
  },
  {
    id: "theory-13",
    question: "What is the 'Lost-in-the-Middle' phenomenon in LLMs, and how does Contextual Compression mitigate it?",
    answer: "Liu et al. (2023) demonstrated that LLMs exhibit a U-shaped attention distribution over long input contexts: they reliably attend to information located at the very beginning and very end of the prompt, while accuracy plummets when critical facts reside in the middle of a 10k+ token context. Contextual Compression uses token-level classifiers, small cross-encoders, or prompt-based extractors to strip out irrelevant filler sentences from retrieved chunks prior to prompt assembly, shortening the context window and ensuring that only high-density, relevant tokens occupy the prompt."
  },
  {
    id: "theory-14",
    question: "Explain the role of Coreference Resolution and Entity Disambiguation in automated Knowledge Graph construction.",
    answer: "Raw text frequently refers to entities using pronouns ('it', 'they') or surface variants ('JVM', 'Java Virtual Machine', 'HotSpot VM'). If an information extraction system creates a separate node for each variant and leaves pronouns unresolved, the resulting graph becomes fragmented into isolated sub-graphs. Coreference resolution maps pronouns back to their explicit antecedent. Entity disambiguation clusters synonymous surface names and maps them to a single canonical entity node with an alias list, ensuring edges consolidate onto unified hub nodes to enable continuous multi-hop traversals."
  },
  {
    id: "theory-15",
    question: "What are Temporal Knowledge Graphs (TKGs), and how do they prevent historical hallucination?",
    answer: "A static knowledge graph assumes relationships are eternally valid, leading to hallucinations when facts change over time (e.g., leadership changes, deprecated API methods). A Temporal Knowledge Graph augments relationships with temporal validity bounds: (NodeA)-[:RELATION {valid_from: T1, valid_to: T2}]->(NodeB). When a user query includes temporal constraints (e.g., 'Who was the lead architect in 2022?'), the Cypher traversal filters edges against the query timestamp (valid_from <= 2022 <= valid_to), ensuring obsolete facts are not retrieved."
  },
  {
    id: "theory-16",
    question: "Explain the four core metrics of the Ragas evaluation framework: Faithfulness, Answer Relevance, Context Precision, and Context Recall.",
    answer: "1. Faithfulness: The proportion of claims in the generated response that can be directly verified from the retrieved context (measures absence of hallucination). 2. Answer Relevance: The semantic consistency between the generated answer and the original query, ensuring the LLM directly answered what was asked. 3. Context Precision: The degree to which ground-truth relevant chunks and graph paths are ranked at the top of the context payload rather than buried at the bottom. 4. Context Recall: The fraction of all ground-truth facts required to answer the question that were successfully retrieved into the context."
  },
  {
    id: "theory-17",
    question: "How does Sub-Question Decomposition handle multi-hop comparative queries, and what is the role of an execution DAG?",
    answer: "Comparative questions (e.g., 'Compare the replication models of Cassandra and Raft-based CockroachDB') cannot be answered by a single search query without conflating contexts. Sub-Question Decomposition uses an LLM to parse the prompt into an execution Directed Acyclic Graph (DAG) of atomic queries: Task 1 retrieves Cassandra replication details, Task 2 retrieves CockroachDB Raft details, and Task 3 is a dependent node that receives outputs from 1 and 2 to perform comparative synthesis. This prevents cross-contamination of search results."
  },
  {
    id: "theory-18",
    question: "Explain the trade-offs of using an LLM to dynamically generate Cypher queries (Text-to-Cypher) vs retrieving subgraphs via pre-defined parameterized Cypher templates.",
    answer: "Text-to-Cypher allows an LLM to translate arbitrary natural language into Cypher statements on the fly, offering maximum querying flexibility. However, it suffers from syntax errors, hallucinations of non-existent relationship types, and security risks (Cypher injection or expensive Cartesian queries that exhaust database memory). Pre-defined parameterized Cypher templates restrict traversal to rigorously indexed, safe patterns (e.g., get_neighbors(entity, depth=2)), guaranteeing deterministic performance and security at the cost of lower flexibility. Production systems often combine both by using semantic routing to choose among hardened templates."
  },
  {
    id: "theory-19",
    question: "What is Distribution-Based Score Fusion (DBSF) and when should it be selected over Reciprocal Rank Fusion (RRF)?",
    answer: "DBSF standardizes raw relevance scores from different retrieval backends (e.g., BM25 and dense cosine) by computing each system's mean and standard deviation: z = (s - mu) / sigma, followed by sigmoid scaling into [0, 1]. Unlike RRF which discards raw score magnitudes and uses only ordinal ranks, DBSF preserves the margin of victory: if candidate 1 has a massive confidence lead over candidate 2, DBSF reflects that separation. DBSF should be selected when the underlying scoring systems provide calibrated, high-fidelity confidence scores."
  },
  {
    id: "theory-20",
    question: "How do Graph Neural Networks (GNNs) such as Graph Convolutional Networks (GCNs) generate node embeddings for downstream retrieval?",
    answer: "GCNs generate node representations through recursive neighborhood aggregation (message passing). At layer k, a node v updates its feature vector by aggregating the representations of its immediate neighbors from layer k-1, followed by a non-linear transformation: h_v^(k) = sigma( W^(k) * \\sum_{u \\in N(v)} (h_u^(k-1) / sqrt(|N(u)||N(v)|)) ). After K layers, each node embedding encodes both its intrinsic text features and the topological structure of its K-hop neighborhood, enabling topological similarity search in vector space."
  },
  {
    id: "theory-21",
    question: "Explain how Step-Back Prompting improves reasoning over overly specific technical queries.",
    answer: "When a query is bogged down with hyper-specific low-level details (e.g., 'Why does my C++ program segfault on line 42 with pointer offset 0x7ffd?'), naive retrieval often retrieves noise. Step-Back Prompting prompts an LLM to generate a broader, high-level question addressing the underlying foundational concept ('What causes segmentation faults during stack pointer offsets in Linux?'). The system retrieves context for both the high-level principle and the specific query, enabling the model to apply general engineering principles to solve the specific bug."
  },
  {
    id: "theory-22",
    question: "What is an Ontology Schema Constraint and how does it prevent knowledge graph degradation during automated ingestion?",
    answer: "An ontology schema defines the strict types of entities (Classes) and valid predicates (Properties) permitted in a domain, alongside domain and range constraints (e.g., relation 'EMPLOYED_BY' requires a 'Person' as domain and an 'Organization' as range). Without constraints, automated LLM extraction produces an unconstrained explosion of synonymous predicates ('works_at', 'employed_at', 'hired_by', 'is_employee_of'), fragmenting the graph. Schema validation rejects or normalizes invalid predicates during ingestion."
  },
  {
    id: "theory-23",
    question: "Explain the mechanism of Dijkstra shortest path on an inverse-confidence weighted knowledge graph.",
    answer: "When knowledge graphs are populated automatically, edges carry extraction confidence probabilities p in (0, 1]. If we define edge cost as w = -log(p), then minimizing the sum of edge costs along a path \\sum -log(p_i) is mathematically equivalent to maximizing the product of edge confidences \\prod p_i (the joint probability of the explanatory path). Dijkstra's algorithm finds the path with lowest total weight, deterministically retrieving the most credible and verifiable factual bridge between two concepts."
  },
  {
    id: "theory-24",
    question: "Why does chunking without sentence boundary awareness ruin embedding quality?",
    answer: "Naive chunking by fixed token counts frequently splits sentences down the middle. This truncates subjects from their predicates, creates dangling clauses, and strips anaphoric antecedents. The resulting vector embedding captures a distorted semantic profile that matches neither the preceding thought nor the subsequent thought. Sentence-aware or semantic boundary chunking ensures that chunks split only at paragraph or sentence terminations, preserving semantic completeness."
  },
  {
    id: "theory-25",
    question: "Explain the concept of Semantic Drift in iterative multi-hop agentic retrieval.",
    answer: "Semantic drift occurs when an autonomous agent or iterative retrieval loop searches for hop 1, retrieves a tangential entity, and uses that entity to formulate hop 2. With each successive hop, the context deviates further from the original query intent, accumulating irrelevant noise. To prevent drift, systems enforce strict anchor constraints: every hop must maintain a minimum Personalized PageRank connection to the original seed query, or must be pruned by a cross-encoder relevance check against the original root question."
  },
  {
    id: "theory-26",
    question: "How does the BM25+ algorithm modify BM25 to prevent severe penalization of long documents containing relevant matches?",
    answer: "Standard BM25Okapi incorporates a lower bound of zero on term frequency normalization. In very long documents with low relative term frequency, the score can approach zero even when the term occurs multiple times. BM25+ adds an empirical tuning parameter delta (typically 1.0) directly to the normalized term frequency: ( (f * (k1 + 1)) / (f + k1 * (1 - b + b * len_ratio)) ) + delta. This guarantees that any document containing a query term receives a non-zero minimum baseline score regardless of its total length."
  },
  {
    id: "theory-27",
    question: "What is the difference between an Inverted Index and a Forward Index in text retrieval engines?",
    answer: "A Forward Index maps a document ID to the sequence of words it contains (Doc_ID -> [Token_1, Token_2, ...]). It is used for displaying snippets and recalculating document scores. An Inverted Index maps each unique vocabulary token to the list of document IDs (and positions) where it appears (Token -> [(Doc_1, pos_list), (Doc_2, pos_list), ...]). The inverted index is the fundamental data structure enabling sub-millisecond sparse keyword search (BM25, Lucene, Elasticsearch)."
  },
  {
    id: "theory-28",
    question: "Explain why Knowledge Graph Subgraphs must be serialized into structured formats before feeding into an LLM.",
    answer: "Large Language Models operate on token sequences, not binary pointer structures or graph adjacency lists. To ground an LLM with graph facts, subgraphs must be serialized into text. Research shows that structured Markdown outlines or clean bulleted triples ('Subject -[RELATION]-> Object') yield the highest generation fidelity and lowest hallucination rates. Serializing as verbose JSON-LD or raw Cypher statements consumes excessive tokens on structural syntax and increases parsing errors."
  },
  {
    id: "theory-29",
    question: "How does a Semantic Router operate in an enterprise RAG gateway, and what is its latency profile?",
    answer: "A Semantic Router routes incoming queries by comparing their vector embeddings against pre-computed centroid vectors representing specific destinations (e.g. Vector Store, Neo4j Graph, SQL Database, Chitchat). Because this involves only a single embedding call and a handful of dot-product comparisons, routing decisions complete in under 15 milliseconds. This avoids the 200–800ms latency and financial cost of invoking an LLM for classification."
  },
  {
    id: "theory-30",
    question: "Describe the end-to-end architecture of a Graph-Enhanced Hybrid RAG system in an enterprise environment.",
    answer: "An enterprise Graph-Enhanced Hybrid RAG architecture consists of: 1. Input Gate: Semantic routing and query rewriting. 2. First-Stage Parallel Retrieval: Dual-track dense vector search (Qdrant) and sparse BM25 search (Elasticsearch). 3. Rank Fusion: Merging text candidates via Reciprocal Rank Fusion (RRF). 4. Graph Knowledge Retrieval: Seed entity extraction, followed by Neo4j Cypher 2-hop subgraph traversal and Personalized PageRank filtering. 5. Second-Stage Reranking: Cross-encoder (bge-reranker-large) scoring combined text chunks and graph paths. 6. Prompt Assembly: Contextual compression formatting high-signal passages and triples with source citations. 7. Grounded Generation & Audit: LLM response generation with verifiable citations, evaluated continuously by Ragas."
  }
];

const quizQuestions = [
  {
    id: "quiz-01",
    question: "What is the primary limitation of naive top-k dense vector retrieval that Knowledge Graphs overcome?",
    options: [
      "Inability to compute cosine similarity on high-dimensional vectors",
      "Failure to resolve multi-hop relational dependencies between concepts across disparate documents",
      "Excessive storage requirements of inverted index data structures",
      "Incompatibility with modern transformer embedding models"
    ],
    correctIndex: 1,
    explanation: "Naive vector retrieval looks for chunks with high surface semantic similarity to the query string. When answering an inquiry requires following a chain of reasoning across distinct documents (A -> B -> C), vector search fails to retrieve intermediate bridge chunks, a problem natively solved by graph path traversals."
  },
  {
    id: "quiz-02",
    question: "In the BM25Okapi formula, what does parameter k1 control?",
    options: [
      "The degree of document length normalization",
      "The minimum score threshold for rare tokens",
      "The term frequency saturation limit",
      "The reciprocal rank smoothing factor"
    ],
    correctIndex: 2,
    explanation: "Parameter k1 controls the term frequency saturation curve. As a word's count in a document increases, its score contribution asymptotes toward (k1 + 1) * IDF, preventing keyword repetition from skewing relevance."
  },
  {
    id: "quiz-03",
    question: "Why is Reciprocal Rank Fusion (RRF) preferred over raw linear score combination when fusing Dense and BM25 search results?",
    options: [
      "RRF converts all documents into high-dimensional embeddings",
      "Dense cosine distances and sparse BM25 scores follow fundamentally different, uncalibrated score distributions",
      "RRF eliminates the need for first-stage candidate retrieval",
      "Linear score combinations cannot be executed in parallel"
    ],
    correctIndex: 1,
    explanation: "Dense vector similarities (typically bounded in [0, 1]) and BM25 scores (unbounded [0, infinity)) have drastically different distributions that shift from query to query. RRF bypasses score calibration by fusing purely ordinal rank positions."
  },
  {
    id: "quiz-04",
    question: "What is 'Index-Free Adjacency' in graph databases like Neo4j?",
    options: [
      "The elimination of indexes on node properties to save disk space",
      "Direct physical memory pointer offsets between connected node records, enabling O(1) traversal per hop",
      "Using full-text inverted indexes instead of B-trees",
      "Storing all graph relationships in an in-memory Redis key-value cache"
    ],
    correctIndex: 1,
    explanation: "Index-Free Adjacency means every node record physically points directly to its connected relationship records on disk. Traversing an edge requires dereferencing an offset pointer (constant time), making traversal speed independent of total database size."
  },
  {
    id: "quiz-05",
    question: "In Microsoft GraphRAG, which algorithm is used to partition the entity knowledge graph into hierarchical communities?",
    options: [
      "K-Means clustering",
      "Dijkstra's shortest path",
      "Leiden community detection algorithm",
      "Principal Component Analysis (PCA)"
    ],
    correctIndex: 2,
    explanation: "Microsoft GraphRAG uses the Leiden community detection algorithm to partition the knowledge graph into well-connected, modular clusters across multiple hierarchical levels (Level 0, 1, 2)."
  },
  {
    id: "quiz-06",
    question: "Which Microsoft GraphRAG search mode is best suited for holistic questions like 'What are the main systemic risks across the entire corpus?'",
    options: [
      "Local Search",
      "Global Search",
      "Vector-only Search",
      "Sentence Window Search"
    ],
    correctIndex: 1,
    explanation: "Global Search synthesizes precomputed community summaries generated across the Leiden hierarchy using a map-reduce architecture, enabling comprehensive corpus-level understanding without scanning thousands of raw chunks."
  },
  {
    id: "quiz-07",
    question: "How does HyDE (Hypothetical Document Embeddings) improve retrieval performance?",
    options: [
      "It compresses the document index using PCA dimensional reduction",
      "An LLM generates a speculative answer passage, and its embedding is used to search the document vector space",
      "It translates all documents into English prior to indexing",
      "It replaces dense vectors with sparse BM25 tokens"
    ],
    correctIndex: 1,
    explanation: "HyDE bridges the semantic gap between short questions and encyclopedic documents by having an LLM write a hypothetical answer paragraph. Embedding this passage maps the search directly into document space."
  },
  {
    id: "quiz-08",
    question: "What is the primary architectural difference between a Bi-Encoder and a Cross-Encoder?",
    options: [
      "Bi-Encoders use recurrent neural networks, while Cross-Encoders use transformers",
      "Bi-Encoders compute query and document representations independently, while Cross-Encoders apply full self-attention across query-document token pairs simultaneously",
      "Bi-Encoders are used exclusively for reranking top-5 candidates",
      "Cross-Encoders generate static vector embeddings for pre-indexing"
    ],
    correctIndex: 1,
    explanation: "Bi-encoders encode queries and documents separately, enabling fast ANN vector search. Cross-encoders process the concatenated query and document through full self-attention layers, yielding superior relevance accuracy at higher computational cost."
  },
  {
    id: "quiz-09",
    question: "What is the purpose of Parent Document Retrieval in modern RAG systems?",
    options: [
      "To restrict search to only documents created by root administrators",
      "To embed small child chunks for precise vector matching, while injecting the larger parent document into the LLM context",
      "To automatically delete child chunks after 30 days",
      "To serialize the knowledge graph into JSON-LD format"
    ],
    correctIndex: 1,
    explanation: "Parent Document Retrieval resolves the chunk size dilemma: small child chunks guarantee high semantic retrieval precision, while retrieving the full parent document ensures the LLM receives complete narrative context."
  },
  {
    id: "quiz-10",
    question: "In graph reasoning, how does Personalized PageRank (PPR) select context for a specific user query?",
    options: [
      "It ranks all documents alphabetically based on author credentials",
      "It runs a random walk with teleportation biased towards the query's seed entities, scoring peripheral nodes by topical relevance",
      "It deletes all nodes with an out-degree less than 3",
      "It computes the Euclidean distance between node labels"
    ],
    correctIndex: 1,
    explanation: "Personalized PageRank concentrates the teleport probability on the query's seed entities. Nodes with high steady-state probability are topologically relevant to those specific seeds, allowing objective context pruning."
  },
  {
    id: "quiz-11",
    question: "What does the 'Faithfulness' metric in the Ragas evaluation framework measure?",
    options: [
      "The lexical overlap between the query and retrieved chunks",
      "The proportion of claims in the generated response that are directly grounded in the retrieved context",
      "The execution speed of the underlying Cypher queries",
      "The percentage of user queries successfully parsed by the router"
    ],
    correctIndex: 1,
    explanation: "Faithfulness evaluates whether the LLM's generated response is strictly grounded in the retrieved context, penalizing ungrounded hallucinations."
  },
  {
    id: "quiz-12",
    question: "What is the primary role of a Cross-Encoder Neural Reranker in a two-stage retrieval pipeline?",
    options: [
      "To build the initial inverted index from raw text",
      "To re-score and re-rank the top-50 candidates from first-stage retrieval to identify the top-5 highest-signal context passages",
      "To execute multi-hop Cypher queries in Neo4j",
      "To partition the graph into Leiden communities"
    ],
    correctIndex: 1,
    explanation: "A Cross-Encoder serves as a second-stage reranker. First-stage hybrid search quickly retrieves candidate chunks (e.g. top-50), and the cross-encoder applies deep cross-attention to isolate the top-5 most relevant passages for the generator."
  }
];

const competenciesChecklist = [
  { id: "comp-01", label: "Analyze why naive dense vector RAG fails on multi-hop and corpus-level aggregation queries." },
  { id: "comp-02", label: "Implement BM25Okapi sparse lexical retrieval from scratch with custom tokenization and length normalization." },
  { id: "comp-03", label: "Implement Reciprocal Rank Fusion (RRF) with parameter k=60 to fuse dense and sparse candidate sets." },
  { id: "comp-04", label: "Implement Distribution-Based Score Fusion (DBSF) using z-score normalization and sigmoid mapping." },
  { id: "comp-05", label: "Design a formal domain ontology defining entity classes, relationship types, and schema constraints." },
  { id: "comp-06", label: "Configure a production Neo4j instance with node uniqueness constraints and full-text indexes." },
  { id: "comp-07", label: "Write expressive Cypher pattern matching queries with variable-length relationships (*1..3)." },
  { id: "comp-08", label: "Implement automated Information Extraction (NER + Relation Extraction) using Pydantic schemas and LLMs." },
  { id: "comp-09", label: "Perform coreference resolution and entity disambiguation to prevent duplicate node fragmentation." },
  { id: "comp-10", label: "Serialize multi-hop subgraphs into clean hierarchical Markdown for LLM prompt context." },
  { id: "comp-11", label: "Understand the Leiden community detection algorithm and how it partitions entity graphs." },
  { id: "comp-12", label: "Differentiate between Local Search, Global Search, and DRIFT Search in Microsoft GraphRAG." },
  { id: "comp-13", label: "Execute Dijkstra's shortest path algorithm over confidence-weighted edges to find explanatory chains." },
  { id: "comp-14", label: "Calculate Personalized PageRank (PPR) to prune peripheral graph context based on seed entities." },
  { id: "comp-15", label: "Implement a conversational Query Rewriter that resolves pronouns and anaphoric references." },
  { id: "comp-16", label: "Build a Sub-Question Decomposition planner that generates an execution DAG for comparative queries." },
  { id: "comp-17", label: "Implement Hypothetical Document Embeddings (HyDE) to bridge question-document semantic asymmetry." },
  { id: "comp-18", label: "Implement Parent Document Retrieval and Sentence Window Retrieval to solve chunk size dilemmas." },
  { id: "comp-19", label: "Deploy a Cross-Encoder neural reranker (bge-reranker-large) to score candidate passages." },
  { id: "comp-20", label: "Evaluate RAG pipeline performance using the Ragas framework (Faithfulness, Answer Relevance, Context Recall, Context Precision)." }
];

const learningResources = [
  {
    title: "Microsoft GraphRAG Official Documentation & Paper",
    url: "https://microsoft.github.io/graphrag/",
    description: "The definitive guide to Microsoft GraphRAG, covering extraction, hierarchical Leiden communities, global search, and local search."
  },
  {
    title: "Neo4j Cypher Manual & Graph Academy",
    url: "https://neo4j.com/docs/cypher-manual/current/",
    description: "Official reference for the Cypher query language, pattern matching, variable-length path traversal, and performance tuning."
  },
  {
    title: "Rank-BM25 & Sparse Retrieval Engineering",
    url: "https://github.com/dorianbrown/rank_bm25",
    description: "Standard Python implementation of BM25Okapi, BM25L, and BM25+ algorithms for inverted index lexical search."
  },
  {
    title: "Qdrant Hybrid Search & Reciprocal Rank Fusion Guide",
    url: "https://qdrant.tech/documentation/concepts/hybrid-queries/",
    description: "Architectural blueprint for implementing production dense + sparse retrieval and fusion in high-throughput vector databases."
  },
  {
    title: "Ragas: Supervised Evaluation Framework for RAG Pipelines",
    url: "https://docs.ragas.io/en/stable/",
    description: "Comprehensive documentation for computing Faithfulness, Answer Relevance, Context Precision, and Context Recall metrics."
  },
  {
    title: "BAAI FlagEmbedding: BGE-Reranker Models",
    url: "https://github.com/FlagOpen/FlagEmbedding",
    description: "State-of-the-art open-source Cross-Encoder neural rerankers for second-stage candidate passage scoring."
  },
  {
    title: "NetworkX: Network Analysis in Python",
    url: "https://networkx.org/documentation/stable/",
    description: "Python library for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks."
  },
  {
    title: "LlamaIndex Knowledge Graph & Property Graph Index Guide",
    url: "https://docs.llamaindex.ai/en/stable/module_guides/indexing/lpg_index_guide/",
    description: "Step-by-step documentation for building Property Graph Indexes, Cypher extractors, and graph-guided retrieval agents in LlamaIndex."
  }
];

const outputContent = `// Module 15: Advanced RAG & Knowledge Engineering Curriculum Data
// Generated automatically for PrepSpaces AI Engineering & Generative AI track.

export const overview = ${JSON.stringify(overview, null, 2)};

export const curriculumUnits = ${JSON.stringify(curriculumUnits, null, 2)};

export const practicalLabs = ${JSON.stringify(practicalLabs, null, 2)};

export const capstoneProject = ${JSON.stringify(capstoneProject, null, 2)};

export const codingAssignments = ${JSON.stringify(codingAssignments, null, 2)};

export const theoryQuestions = ${JSON.stringify(theoryQuestions, null, 2)};

export const quizQuestions = ${JSON.stringify(quizQuestions, null, 2)};

export const competenciesChecklist = ${JSON.stringify(competenciesChecklist, null, 2)};

export const learningResources = ${JSON.stringify(learningResources, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/Componets/aiGraphRagData.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log('Successfully generated Module 15 curriculum data at ' + outputPath);
console.log('File size: ' + fs.statSync(outputPath).size + ' bytes');

