import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://prepspaces.com";

// Comprehensive route SEO definitions
const routeMeta = {
  "/": {
    title: "PrepSpaces — AI Interview Preparation & Technical Learning",
    description: "Prepare for technical interviews with structured learning resources, System Design masterclasses, DevOps, Cloud Computing, and interview practice tools from PrepSpaces.",
    canonical: `${BASE_URL}/`,
  },
  "/interview": {
    title: "AI Technical Interview Simulation — PrepSpaces",
    description: "Interactive technical interview simulation and design evaluations from PrepSpaces.",
    canonical: `${BASE_URL}/interview`,
    robots: "noindex, follow",
  },
  "/dashboard": {
    title: "Student Learning Progress & Course Dashboard — PrepSpaces",
    description: "Track your course progress, completed modules, and resume technical lessons across all PrepSpaces tracks.",
    canonical: `${BASE_URL}/dashboard`,
  },
  "/login": {
    title: "Student Sign In — PrepSpaces",
    description: "Sign in to PrepSpaces with Google or email to sync your course progress and technical interview preparation.",
    canonical: `${BASE_URL}/login`,
  },
  "/register": {
    title: "Create Student Account — PrepSpaces",
    description: "Join PrepSpaces to master operating systems, computer networks, system design, cloud, and DevOps.",
    canonical: `${BASE_URL}/register`,
  },
  "/privacy-policy": {
    title: "Privacy Policy — PrepSpaces",
    description: "Read the PrepSpaces Privacy Policy to learn how we protect and handle student information, Google authentication data, and learning records.",
    canonical: `${BASE_URL}/privacy-policy`,
  },
  "/terms-of-service": {
    title: "Terms of Service — PrepSpaces",
    description: "Review the PrepSpaces Terms of Service regarding student account responsibilities, educational curriculum usage, and platform terms.",
    canonical: `${BASE_URL}/terms-of-service`,
  },
    "/learning": {
    title: "Technical Systems Engineering Curriculum & Masterclasses — PrepSpaces",
    description: "Explore comprehensive university-informed preparation tracks in System Design, Cloud Computing, DevOps & SRE, Operating Systems, Computer Networks, and Cybersecurity.",
    canonical: `${BASE_URL}/learning`,
  },
  "/learn": {
    title: "Technical Interview Preparation Curriculum & Courses — PrepSpaces",
    description: "Explore comprehensive, interactive preparation tracks for System Design, DevOps & SRE, Cloud Computing, and Operating Systems.",
    canonical: `${BASE_URL}/learning`,
  },
  "/learning/ai": {
    title: "Artificial Intelligence Course — Learn AI Fundamentals | PrepSpaces",
    description: "Learn Artificial Intelligence from fundamentals to advanced concepts with university-level lessons, practical projects, AI algorithms, and hands-on learning on PrepSpaces.",
    keywords: "Artificial Intelligence course, AI course online, Learn Artificial Intelligence, AI fundamentals course, Artificial Intelligence learning, AI algorithms course",
    canonical: `${BASE_URL}/learning/ai`,
  },
  "/courses/artificial-intelligence": {
    title: "Artificial Intelligence Course — Learn AI Fundamentals | PrepSpaces",
    description: "Learn Artificial Intelligence from fundamentals to advanced concepts with university-level lessons, practical projects, AI algorithms, and hands-on learning on PrepSpaces.",
    keywords: "Artificial Intelligence course, AI course online, Learn Artificial Intelligence, AI fundamentals course, Artificial Intelligence learning, AI algorithms course",
    canonical: `${BASE_URL}/courses/artificial-intelligence`,
  },
  "/courses/generative-ai": {
    title: "Generative AI Course — Learn GenAI & LLMs | PrepSpaces",
    description: "Master Generative AI, Large Language Models, transformers, prompt engineering, embeddings, RAG, fine-tuning, and AI application development with PrepSpaces.",
    keywords: "Generative AI course, GenAI course, Generative AI online learning, Large Language Models course, LLM course, Prompt engineering course, RAG course, Learn Generative AI",
    canonical: `${BASE_URL}/courses/generative-ai`,
  },
  "/learning/ai/generative-ai": {
    title: "Generative AI Course — Learn GenAI & LLMs | PrepSpaces",
    description: "Master Generative AI, Large Language Models, transformers, prompt engineering, embeddings, RAG, fine-tuning, and AI application development with PrepSpaces.",
    keywords: "Generative AI course, GenAI course, Generative AI online learning, Large Language Models course, LLM course, Prompt engineering course, RAG course, Learn Generative AI",
    canonical: `${BASE_URL}/courses/generative-ai`,
  },
  "/courses/data-engineering": {
    title: "Data Engineering Master Course | Pipelines, Lakehouses & SQL – PrepSpaces",
    description: "Master data engineering with PrepSpaces. Learn data pipeline architecture, OLTP vs OLAP, batch and stream processing, ETL/ELT, data lakes, Apache Iceberg, Delta Lake, data quality, and Python data pipelines.",
    keywords: "Data Engineering Course, Learn Data Engineering, Data Pipeline, ETL, ELT, OLTP vs OLAP, Stream Processing, Apache Spark, Apache Kafka, Data Lakehouse, Apache Iceberg, Delta Lake, Snowflake, PrepSpaces",
    canonical: `${BASE_URL}/courses/data-engineering`,
  },
  "/learning/data-engineering": {
    title: "Data Engineering Master Course | Pipelines, Lakehouses & SQL – PrepSpaces",
    description: "Master data engineering with PrepSpaces. Learn data pipeline architecture, OLTP vs OLAP, batch and stream processing, ETL/ELT, data lakes, Apache Iceberg, Delta Lake, data quality, and Python data pipelines.",
    keywords: "Data Engineering Course, Learn Data Engineering, Data Pipeline, ETL, ELT, OLTP vs OLAP, Stream Processing, Apache Spark, Apache Kafka, Data Lakehouse, Apache Iceberg, Delta Lake, Snowflake, PrepSpaces",
    canonical: `${BASE_URL}/courses/data-engineering`,
  },
  "/learning/data-engineering/intro": {
    title: "Module 1: Introduction to Data Engineering & Data Systems | PrepSpaces",
    description: "Master data engineering fundamentals: lifecycle, data sources and consumers, structured vs unstructured data, OLTP vs OLAP, batch vs stream, ETL vs ELT, warehouses, lakes, lakehouses, data quality dimensions, and build a local Python data pipeline.",
    keywords: "Introduction to Data Engineering, Data Pipeline Architecture, OLTP vs OLAP, Batch vs Stream Processing, ETL vs ELT, Data Lakehouse, Parquet, Data Quality, Python Data Pipeline",
    canonical: `${BASE_URL}/learning/data-engineering/intro`,
  },
  "/learning/data-engineering/python": {
    title: "Module 2: Python Programming for Data Engineering | PrepSpaces",
    description: "Master Python for data engineering: variables, OOP, generators, iterators, CSV/JSON/XML parsing, chunk processing, regex, logging, API extraction, SQLite/SQLAlchemy, Pandas, Polars, and Pytest.",
    keywords: "Python for Data Engineering, Data Pipeline Python, Python Generators, Pandas vs Polars, SQLAlchemy, Pytest, Python ETL, API Ingestion, Chunk Processing, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/python`,
  },
  "/learning/data-engineering/sql": {
    title: "Module 3: Advanced SQL and Relational Database Systems | PrepSpaces",
    description: "Master advanced SQL and relational databases: PostgreSQL architecture, normal forms 1NF/2NF/3NF, DDL/DML, multi-table joins, CTEs, recursive CTEs, window functions, views, stored procedures, triggers, ACID transactions, MVCC, and indexing optimization.",
    keywords: "Advanced SQL, PostgreSQL, Relational Database Systems, SQL Joins, CTE, Recursive CTE, Window Functions, ACID Properties, MVCC, B-tree Indexing, EXPLAIN ANALYZE, Query Optimization, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/sql`,
  },
  "/learning/data-engineering/sql-databases": {
    title: "Module 3: Advanced SQL and Relational Database Systems | PrepSpaces",
    description: "Master advanced SQL and relational databases: PostgreSQL architecture, normal forms 1NF/2NF/3NF, DDL/DML, multi-table joins, CTEs, recursive CTEs, window functions, views, stored procedures, triggers, ACID transactions, MVCC, and indexing optimization.",
    keywords: "Advanced SQL, PostgreSQL, Relational Database Systems, SQL Joins, CTE, Recursive CTE, Window Functions, ACID Properties, MVCC, B-tree Indexing, EXPLAIN ANALYZE, Query Optimization, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/sql`,
  },
  "/learning/data-engineering/data-modeling": {
    title: "Module 4: Data Modeling and Database Design | PrepSpaces",
    description: "Master relational database design and analytical dimensional modeling: conceptual, logical, and physical models, Crow's Foot ERDs, 1NF/2NF/3NF/BCNF normalization, Star and Snowflake schemas, fact table grain, Slowly Changing Dimensions (SCD Type 1 & 2), event-driven modeling, and schema evolution.",
    keywords: "Data Modeling, Database Design, ER Diagrams, Normalization 1NF 2NF 3NF, BCNF, Star Schema, Snowflake Schema, Slowly Changing Dimensions, SCD Type 2, Fact Table Grain, Event Sourcing, Data Warehouse Modeling, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/data-modeling`,
  },
  "/learning/data-engineering/internals": {
    title: "Module 5: Database Internals and Performance Engineering | PrepSpaces",
    description: "Master database internals: 8KB pages, buffer pool LRU cache, B+ Trees vs LSM Trees vs Hash indexing, Bloom filters, cost-based query optimization, nested loop/hash/sort-merge joins, ACID transactions, MVCC tuple versioning, WAL crash recovery, table partitioning, and PostgreSQL performance tuning.",
    keywords: "Database Internals, Performance Engineering, Storage Engines, 8KB Pages, Buffer Pool, B+ Tree, LSM Tree, Bloom Filter, Cost-Based Optimizer, Hash Join, Nested Loop Join, Sort-Merge Join, MVCC, xmin xmax, Write-Ahead Logging WAL, ARIES Recovery, Table Partitioning, PostgreSQL Tuning, shared_buffers, work_mem, PgBouncer, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/internals`,
  },
  "/learning/data-engineering/data-formats": {
    title: "Module 6: Data Formats, Serialization and Data Integration | PrepSpaces",
    description: "Master data formats and serialization in data engineering: row vs columnar storage, CSV, JSON, XML, Apache Avro, Apache Parquet, Apache ORC, Apache Arrow in-memory, Protocol Buffers, compression algorithms (Snappy, GZIP, ZSTD, LZ4), schema evolution, Confluent Schema Registry, REST API ingestion with cursor pagination, rate limits, webhooks, and data contracts.",
    keywords: "Data Formats, Data Serialization, Apache Avro, Apache Parquet, Apache ORC, Apache Arrow, Row vs Columnar Storage, Protocol Buffers, MessagePack, Data Compression Snappy ZSTD GZIP, Schema Evolution, Confluent Schema Registry, REST API Ingestion, Cursor Pagination, Exponential Backoff, Webhooks HMAC Idempotency, Data Contracts, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/data-formats`,
  },
  "/learning/data-engineering/data-warehousing": {
    title: "Module 7: Data Warehousing and Analytical Systems | PrepSpaces",
    description: "Master enterprise data warehousing, OLAP architectures, multidimensional modeling, star and snowflake schemas, columnar storage engines, Massively Parallel Processing (MPP), data partitioning, clustering, materialized views, query optimization, and modern cloud warehouse internals (Snowflake, Google BigQuery, Amazon Redshift, and ClickHouse).",
    keywords: "Data Warehousing, Enterprise Data Warehouse, OLAP Architecture, Multidimensional Modeling, Star Schema, Snowflake Schema, Columnar Storage, Massively Parallel Processing MPP, Partitioning and Clustering, Materialized Views, Snowflake Architecture, Google BigQuery, Amazon Redshift, ClickHouse MergeTree, Analytical Query Optimization, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/data-warehousing`,
  },
  "/learning/data-engineering/lakehouse": {
    title: "Module 8: Data Lakes and Lakehouse Architecture | PrepSpaces",
    description: "Master data lakes and lakehouse architecture: cloud object storage (Amazon S3, ADLS, GCS), HDFS distributed storage, Raw/Processed/Curated data zones, Medallion Architecture (Bronze, Silver, Gold), columnar formats (Parquet, Avro, ORC), open table formats (Apache Iceberg, Delta Lake, Apache Hudi), ACID transactions, snapshot isolation, MVCC, time travel, schema evolution, partition evolution, metadata catalogs (AWS Glue, Unity Catalog), small file compaction, and data governance.",
    keywords: "Data Lakes, Lakehouse Architecture, Apache Iceberg, Delta Lake, Apache Hudi, Medallion Architecture, Bronze Silver Gold, Amazon S3 Data Lake, HDFS Distributed Storage, Columnar Storage Parquet, Open Table Formats, ACID Data Lakes, Snapshot Isolation MVCC, Time Travel Delta Lake, Schema Evolution, Partition Evolution, AWS Glue Data Catalog, Unity Catalog, Small File Compaction, Data Lake Governance, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/lakehouse`,
  },
  "/learning/data-engineering/ingestion-cdc": {
    title: "Module 9: Data Ingestion and Change Data Capture (CDC) | PrepSpaces",
    description: "Master data ingestion pipelines and Change Data Capture (CDC): batch and incremental ingestion, full vs incremental loads, database log extraction (MySQL Binlog, PostgreSQL WAL logical decoding), REST API ingestion with cursor pagination, rate limits (HTTP 429) and exponential backoff, file and cloud storage discovery, Debezium, Apache Kafka transport, watermarks, offsets, checkpointing, deduplication, idempotent upserts, schema evolution, Dead-Letter Queues (DLQ), and scalable backpressure management.",
    keywords: "Data Ingestion, Change Data Capture, CDC, Log-Based CDC, Debezium, MySQL Binlog, PostgreSQL WAL Logical Decoding, Apache Kafka Ingestion, Incremental Ingestion, Watermarks, Offsets, Checkpointing, Idempotent Upserts, Deduplication, REST API Ingestion Cursor Pagination, HTTP 429 Exponential Backoff, Dead-Letter Queue DLQ, Backpressure Management, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/ingestion-cdc`,
  },
  "/learning/data-engineering/etl-batch": {
    title: "Module 10: ETL, ELT and Batch Data Processing | PrepSpaces",
    description: "Master end-to-end data pipeline architectures: ETL vs ELT trade-offs, SQL/API/CDC extraction techniques, transformation paradigms (cleansing, standardization, filtering, aggregation, joins, enrichment), loading strategies (full refresh, append, upsert/MERGE, partition overwrite), incremental batch processing with watermarks, partition pruning, handling late-arriving data and backfills, data deduplication with row_number(), idempotent pipeline design, failure recovery, data reconciliation with hash-based checksums, workflow orchestration with Apache Airflow DAGs, and distributed batch processing with Apache Spark.",
    keywords: "ETL, ELT, Batch Data Processing, Apache Spark, Apache Airflow, DAG Orchestration, dbt Incremental Models, AWS Glue Job Bookmarks, Data Cleansing, Data Standardization, SQL Aggregations, Joins Enrichment, Incremental Processing Watermarks, Partition Pruning, Late-Arriving Data, Historical Backfill, Data Deduplication, Idempotent Pipelines, MERGE INTO Upsert, Data Reconciliation Hash Checksums, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/etl-batch`,
  },
  "/learning/data-engineering/spark-processing": {
    title: "Module 11: Distributed Data Processing with Apache Spark | PrepSpaces",
    description: "Master distributed computing fundamentals and large-scale big data processing with Apache Spark & PySpark: cluster architecture (Driver, Cluster Manager, Executors, Tasks), RDD lineage and fault tolerance, DataFrames, Datasets, Spark SQL and Catalyst Optimizer, narrow vs wide transformations, lazy evaluation, partitioning (repartition vs coalesce), shuffle mechanics, broadcast joins, memory management (execution vs storage), data skew mitigation (salting, AQE), Spark Web UI tuning, Parquet columnar internals, Delta Lake Medallion Architecture (Bronze, Silver, Gold), and distributed data pipelines.",
    keywords: "Apache Spark, PySpark, Distributed Data Processing, Spark Architecture, Driver, Executor, Cluster Manager, RDD Lineage, Spark DataFrames, Datasets, Spark SQL, Catalyst Optimizer, Predicate Pushdown, Column Pruning, Narrow vs Wide Transformations, Lazy Evaluation, Spark Partitioning, repartition vs coalesce, Shuffling and Data Exchange, Broadcast Joins, Spark Memory Management, Data Skew Salting, Adaptive Query Execution AQE, Spark Web UI Tuning, Apache Parquet Internals, Delta Lakehouse, Medallion Architecture Bronze Silver Gold, PrepSpaces",
    canonical: `${BASE_URL}/learning/data-engineering/spark-processing`,
  },
  "/courses/blockchain": {
    title: "Blockchain Development Course | Solidity, Web3 & Smart Contracts – PrepSpaces",
    description: "Master blockchain development with PrepSpaces. Learn Bitcoin, Ethereum, Solidity, smart contracts, DeFi, NFTs, Web3, Hyperledger Fabric, Solana, and blockchain security through hands-on projects.",
    keywords: "Blockchain Development Course, Blockchain Course, Solidity Programming, Smart Contract Development, Web3 Development, Ethereum Development, DeFi Development, Blockchain Security, Bitcoin, Hyperledger Fabric, Solana Rust, Smart Contracts, PrepSpaces",
    canonical: `${BASE_URL}/courses/blockchain`,
  },
  "/learning/blockchain": {
    title: "Blockchain Development Course | Solidity, Web3 & Smart Contracts – PrepSpaces",
    description: "Master blockchain development with PrepSpaces. Learn Bitcoin, Ethereum, Solidity, smart contracts, DeFi, NFTs, Web3, Hyperledger Fabric, Solana, and blockchain security through hands-on projects.",
    keywords: "Blockchain Development Course, Blockchain Course, Solidity Programming, Smart Contract Development, Web3 Development, Ethereum Development, DeFi Development, Blockchain Security, Bitcoin, Hyperledger Fabric, Solana Rust, Smart Contracts, PrepSpaces",
    canonical: `${BASE_URL}/courses/blockchain`,
  },
  "/courses/blockchain-technology": {
    title: "Blockchain Development Course | Solidity, Web3 & Smart Contracts – PrepSpaces",
    description: "Master blockchain development with PrepSpaces. Learn Bitcoin, Ethereum, Solidity, smart contracts, DeFi, NFTs, Web3, Hyperledger Fabric, Solana, and blockchain security through hands-on projects.",
    keywords: "Blockchain Development Course, Blockchain Course, Solidity Programming, Smart Contract Development, Web3 Development, Ethereum Development, DeFi Development, Blockchain Security, Bitcoin, Hyperledger Fabric, Solana Rust, Smart Contracts, PrepSpaces",
    canonical: `${BASE_URL}/courses/blockchain`,
  },
  "/learning/blockchain-technology": {
    title: "Blockchain Development Course | Solidity, Web3 & Smart Contracts – PrepSpaces",
    description: "Master blockchain development with PrepSpaces. Learn Bitcoin, Ethereum, Solidity, smart contracts, DeFi, NFTs, Web3, Hyperledger Fabric, Solana, and blockchain security through hands-on projects.",
    keywords: "Blockchain Development Course, Blockchain Course, Solidity Programming, Smart Contract Development, Web3 Development, Ethereum Development, DeFi Development, Blockchain Security, Bitcoin, Hyperledger Fabric, Solana Rust, Smart Contracts, PrepSpaces",
    canonical: `${BASE_URL}/courses/blockchain`,
  },
  "/learn/blockchain": {
    title: "Blockchain Development Course | Solidity, Web3 & Smart Contracts – PrepSpaces",
    description: "Master blockchain development with PrepSpaces. Learn Bitcoin, Ethereum, Solidity, smart contracts, DeFi, NFTs, Web3, Hyperledger Fabric, Solana, and blockchain security through hands-on projects.",
    keywords: "Blockchain Development Course, Blockchain Course, Solidity Programming, Smart Contract Development, Web3 Development, Ethereum Development, DeFi Development, Blockchain Security, Bitcoin, Hyperledger Fabric, Solana Rust, Smart Contracts, PrepSpaces",
    canonical: `${BASE_URL}/courses/blockchain`,
  },
  "/learning/blockchain/intro": {
    title: "Module 1: Introduction to Blockchain Technology | PrepSpaces",
    description: "Learn blockchain fundamentals, centralized vs decentralized systems, DLT, SHA-256 hashing, block structure, and build a verified Python blockchain from scratch.",
    keywords: "Introduction to blockchain, Blockchain fundamentals, SHA-256 hashing, Distributed ledger, Block structure, Python blockchain tutorial",
    canonical: `${BASE_URL}/learning/blockchain/intro`,
  },
  "/learning/blockchain/cryptography": {
    title: "Module 2: Cryptography Fundamentals for Blockchain | PrepSpaces",
    description: "Master blockchain cryptography: modular arithmetic, finite groups, SHA-256, Keccak-256, secp256k1 ECC, ECDSA digital signatures, HD wallets, address derivation, and binary Merkle trees.",
    keywords: "Blockchain cryptography, SHA-256 vs Keccak-256, Elliptic Curve Cryptography, secp256k1, ECDSA digital signatures, Merkle tree proofs, HD wallets, Ethereum address derivation",
    canonical: `${BASE_URL}/learning/blockchain/cryptography`,
  },
  "/learning/blockchain/consensus": {
    title: "Module 3: Distributed Systems & Consensus Mechanisms | PrepSpaces",
    description: "Master distributed systems, node communication, Byzantine fault tolerance (BFT), Proof of Work (PoW), Nakamoto consensus, Proof of Stake (PoS), Proof of Authority (PoA), PBFT, chain reorganizations, finality models, CAP theorem, and FLP impossibility based on Stanford, MIT, ETH Zürich, and EPFL curricula.",
    keywords: "Distributed systems, Byzantine Generals Problem, BFT quorums, Proof of Work mining, Nakamoto consensus, Proof of Stake, PBFT algorithm, CAP theorem, FLP impossibility result, chain reorganizations, probabilistic finality",
    canonical: `${BASE_URL}/learning/blockchain/consensus`,
  },
  "/learning/blockchain/bitcoin-utxo": {
    title: "Module 4: Bitcoin Architecture & Transactions | PrepSpaces",
    description: "Master Bitcoin internal architecture: P2P network gossip, UTXO model, 80-byte block headers, transaction serialization, Script stack execution, secp256k1 keys, PSBT workflow, mining & difficulty adjustment, mempool fee markets, SegWit, Lightning Network channels, and Regtest practical lab.",
    keywords: "Bitcoin architecture, Bitcoin UTXO model, Bitcoin Script opcodes, P2PKH, P2SH, P2WPKH, Taproot, PSBT, Proof of Work mining, difficulty adjustment, Bitcoin halving, mempool sat/vB fee rate, SegWit block weight, Lightning Network HTLC, Bitcoin Core Regtest",
    canonical: `${BASE_URL}/learning/blockchain/bitcoin-utxo`,
  },
  "/learning/blockchain/bitcoin": {
    title: "Module 4: Bitcoin Architecture & Transactions | PrepSpaces",
    description: "Master Bitcoin internal architecture: P2P network gossip, UTXO model, 80-byte block headers, transaction serialization, Script stack execution, secp256k1 keys, PSBT workflow, mining & difficulty adjustment, mempool fee markets, SegWit, Lightning Network channels, and Regtest practical lab.",
    keywords: "Bitcoin architecture, Bitcoin UTXO model, Bitcoin Script opcodes, P2PKH, P2SH, P2WPKH, Taproot, PSBT, Proof of Work mining, difficulty adjustment, Bitcoin halving, mempool sat/vB fee rate, SegWit block weight, Lightning Network HTLC, Bitcoin Core Regtest",
    canonical: `${BASE_URL}/learning/blockchain/bitcoin-utxo`,
  },
  "/learning/blockchain/ethereum-evm": {
    title: "Module 5: Ethereum Architecture, EVM & Ecosystem | PrepSpaces",
    description: "Master Ethereum architecture: execution & consensus layers, Geth/Lighthouse clients, account-based state model, Merkle Patricia Tries, EVM bytecode, EIP-1559 gas economics, Proof of Stake, staking lifecycle, and Sepolia JSON-RPC development.",
    keywords: "Ethereum architecture, Ethereum Virtual Machine, EVM bytecode, Geth, Lighthouse, Merkle Patricia Trie, stateRoot, EIP-1559 gas fee, Proof of Stake, Casper FFG finality, Sepolia testnet, JSON-RPC, eth_getBalance, smart contracts",
    canonical: `${BASE_URL}/learning/blockchain/ethereum-evm`,
  },
  "/learning/blockchain/ethereum": {
    title: "Module 5: Ethereum Architecture, EVM & Ecosystem | PrepSpaces",
    description: "Master Ethereum architecture: execution & consensus layers, Geth/Lighthouse clients, account-based state model, Merkle Patricia Tries, EVM bytecode, EIP-1559 gas economics, Proof of Stake, staking lifecycle, and Sepolia JSON-RPC development.",
    keywords: "Ethereum architecture, Ethereum Virtual Machine, EVM bytecode, Geth, Lighthouse, Merkle Patricia Trie, stateRoot, EIP-1559 gas fee, Proof of Stake, Casper FFG finality, Sepolia testnet, JSON-RPC, eth_getBalance, smart contracts",
    canonical: `${BASE_URL}/learning/blockchain/ethereum-evm`,
  },
  "/learning/blockchain/evm-internals": {
    title: "Module 6: Ethereum Virtual Machine (EVM) Internals | PrepSpaces",
    description: "Master EVM low-level architecture, stack machine execution, opcodes, memory expansion, storage packing, Solidity compilation pipeline, ABI calldata encoding, contract deployment lifecycle, gas economics, and execution tracing.",
    keywords: "Ethereum Virtual Machine, EVM internals, EVM opcodes, EVM bytecode, Solidity compilation pipeline, ABI calldata encoding, storage packing, memory expansion gas, CREATE2 address derivation, Foundry Forge Anvil, opcode execution trace",
    canonical: `${BASE_URL}/learning/blockchain/evm-internals`,
  },
  "/learning/blockchain/evm": {
    title: "Module 6: Ethereum Virtual Machine (EVM) Internals | PrepSpaces",
    description: "Master EVM low-level architecture, stack machine execution, opcodes, memory expansion, storage packing, Solidity compilation pipeline, ABI calldata encoding, contract deployment lifecycle, gas economics, and execution tracing.",
    keywords: "Ethereum Virtual Machine, EVM internals, EVM opcodes, EVM bytecode, Solidity compilation pipeline, ABI calldata encoding, storage packing, memory expansion gas, CREATE2 address derivation, Foundry Forge Anvil, opcode execution trace",
    canonical: `${BASE_URL}/learning/blockchain/evm-internals`,
  },
  "/learning/blockchain/solidity": {
    title: "Module 7: Solidity Programming Fundamentals | PrepSpaces",
    description: "Master Solidity smart contract development pinned to Solidity 0.8.38: data types, storage layout, modifiers, custom errors, events, Foundry testing, and full StudentRegistry & Voting projects.",
    keywords: "Solidity course, Solidity 0.8.38, smart contract development, Foundry testing, Forge, Cast, Anvil, StudentRegistry, Voting contract, reentrancy guard, EVM storage packing, custom errors",
    canonical: `${BASE_URL}/learning/blockchain/solidity`,
  },
  "/learning/blockchain/solidity-fundamentals": {
    title: "Module 7: Solidity Programming Fundamentals | PrepSpaces",
    description: "Master Solidity smart contract development pinned to Solidity 0.8.38: data types, storage layout, modifiers, custom errors, events, Foundry testing, and full StudentRegistry & Voting projects.",
    keywords: "Solidity course, Solidity 0.8.38, smart contract development, Foundry testing, Forge, Cast, Anvil, StudentRegistry, Voting contract, reentrancy guard, EVM storage packing, custom errors",
    canonical: `${BASE_URL}/learning/blockchain/solidity`,
  },
  "/learning/blockchain/advanced-solidity": {
    title: "Module 8: Advanced Solidity & Smart Contract Design | PrepSpaces",
    description: "Master advanced Solidity smart contract architecture: nested mappings, memory vs storage vs calldata, C3 linearization, abstract interfaces, internal libraries, RBAC access control, upgradeable proxies (UUPS, Transparent, Beacon), EIP-2535 Diamond standard, Yul inline assembly, and modular vault development.",
    keywords: "Advanced Solidity, Smart contract design, UUPS proxy, EIP-2535 Diamond standard, Yul assembly, delegatecall, Reentrancy protection, Checks-Effects-Interactions, OpenZeppelin AccessControl, gas optimization, Hardhat testing",
    canonical: `${BASE_URL}/learning/blockchain/advanced-solidity`,
  },
  "/learning/blockchain/smart-contract-design": {
    title: "Module 8: Advanced Solidity & Smart Contract Design | PrepSpaces",
    description: "Master advanced Solidity smart contract architecture: nested mappings, memory vs storage vs calldata, C3 linearization, abstract interfaces, internal libraries, RBAC access control, upgradeable proxies (UUPS, Transparent, Beacon), EIP-2535 Diamond standard, Yul inline assembly, and modular vault development.",
    keywords: "Advanced Solidity, Smart contract design, UUPS proxy, EIP-2535 Diamond standard, Yul assembly, delegatecall, Reentrancy protection, Checks-Effects-Interactions, OpenZeppelin AccessControl, gas optimization, Hardhat testing",
    canonical: `${BASE_URL}/learning/blockchain/advanced-solidity`,
  },
  "/learning/blockchain/architecture": {
    title: "Module 9: Smart Contract Development & Architecture | PrepSpaces",
    description: "Master end-to-end decentralized application engineering: requirements analysis, threat modeling, on-chain vs off-chain boundaries, factory pattern, registry pattern, pull payments, escrow state machines, multi-contract systems, OpenZeppelin integration, UUPS proxies, and The Graph event indexing.",
    keywords: "Smart contract architecture, DApp lifecycle, Factory pattern, Escrow contract, Pull payment pattern, Checks-Effects-Interactions, State machine, The Graph indexer, Contract verification, OpenZeppelin",
    canonical: `${BASE_URL}/learning/blockchain/architecture`,
  },
  "/learning/blockchain/testing": {
    title: "Module 10: Smart Contract Testing with Foundry & Hardhat | PrepSpaces",
    description: "Master enterprise smart contract testing and quality assurance: Foundry (Forge, Cast, Anvil, Chisel), Hardhat, stateless property-based fuzzing, stateful invariant testing, mainnet fork testing, time manipulation cheatcodes, gas benchmarking, custom error revert testing, and automated GitHub Actions CI/CD pipelines.",
    keywords: "Smart contract testing, Foundry, Forge, Hardhat, Fuzz testing, Invariant testing, Mainnet fork testing, Anvil, Cast, Chisel, Solidity unit tests, gas benchmarking, forge snapshot, smart contract CI/CD, Web3 QA",
    canonical: `${BASE_URL}/learning/blockchain/testing`,
  },
  "/learning/blockchain/wallets-keys": {
    title: "Module 11: Wallets, Keys & Transaction Signing | PrepSpaces",
    description: "Master blockchain wallet engineering: secp256k1 private keys, public key derivation, Keccak-256 address hashing, BIP-39 mnemonic phrases, BIP-32/BIP-44 HD account trees, EIP-1559 Type 2 ECDSA transaction signing, EIP-1193 providers, MetaMask architecture, WalletConnect v2, nonce management, and hardware security.",
    keywords: "Blockchain wallets, private keys, secp256k1, BIP-39 mnemonic, BIP-32 HD wallet, BIP-44 derivation path, EIP-1193, MetaMask, WalletConnect, ECDSA signing, transaction nonces, hardware wallets, Web3 authentication",
    canonical: `${BASE_URL}/learning/blockchain/wallets-keys`,
  },
  "/learning/blockchain/tokens": {
    title: "Module 12: ERC Token Standards (ERC-20, ERC-721, ERC-1155) | PrepSpaces",
    description: "Master Ethereum token engineering: ERC-20 fungible tokens, ERC-721 NFTs, ERC-1155 multi-tokens, allowances, minting, burning, tokenURI, IPFS metadata, OpenZeppelin contracts, tokenomics, and vesting schedules.",
    keywords: "ERC-20, ERC-721, ERC-1155, token standards, Ethereum tokens, NFTs, OpenZeppelin, token minting, token burning, allowance, transferFrom, tokenomics, token vesting, ERC-2981, ERC-2612",
    canonical: `${BASE_URL}/learning/blockchain/tokens`,
  },
  "/learning/blockchain/web3-libraries": {
    title: "Module 13: Web3.js, Ethers.js & Viem - Frontend Blockchain Engineering | PrepSpaces",
    description: "Master JavaScript and TypeScript Ethereum libraries: JSON-RPC fundamentals, Ethers.js v6 providers and signers, Viem typed clients and actions, ABI encoding, function selectors, EIP-1193 MetaMask wallet integration, gas estimation, and React dApp development.",
    keywords: "Web3.js, Ethers.js, Viem, JSON-RPC, Ethereum JavaScript, dApp frontend, MetaMask integration, EIP-1193, ABI encoding, function selector, eth_call, gas estimation, React Web3, Wagmi, Sepolia testnet",
    canonical: `${BASE_URL}/learning/blockchain/web3-libraries`,
  },
  "/learning/blockchain/dapp-development": {
    title: "Module 14: Full-Stack DApp Development - React, Solidity & Web3 Architecture | PrepSpaces",
    description: "Design, develop, and deploy full-stack decentralized applications: React and TypeScript frontends, Solidity smart contracts, EIP-1193 wallet connections, SIWE (EIP-4361) authentication, The Graph event indexing, hybrid on-chain/off-chain storage, and end-to-end decentralized voting on Sepolia.",
    keywords: "Full-Stack DApp, Web3 development, React Web3, Solidity voting dApp, Viem, Wagmi, SIWE, Sign-In with Ethereum, EIP-4361, The Graph protocol, event indexing, on-chain storage, IPFS, Sepolia testnet, DApp architecture",
    canonical: `${BASE_URL}/learning/blockchain/dapp-development`,
  },
  "/learning/blockchain/ipfs-storage": {
    title: "Module 15: IPFS & Decentralized Storage Architecture | PrepSpaces",
    description: "Master decentralized storage architecture, IPFS, Content Identifiers (CIDv1), Multiformats, Kademlia DHT routing, Bitswap block exchange, pinning services, Arweave Permaweb, Filecoin deals, client-side AES-GCM encryption, and Solidity IPFSRegistry smart contracts.",
    keywords: "IPFS, decentralized storage, Web3 storage, CID, Content Identifier, CIDv1, Multihash, Multicodec, libp2p, Kademlia DHT, Bitswap, Pinata, Web3.Storage, Arweave, Permaweb, Filecoin, Proof of Replication, Proof of Spacetime, client-side encryption, AES-GCM, Solidity IPFSRegistry",
    canonical: `${BASE_URL}/learning/blockchain/ipfs-storage`,
  },
  "/learning/blockchain/defi-protocols": {
    title: "Module 16: Decentralized Finance (DeFi) Architecture | PrepSpaces",
    description: "Master Decentralized Finance architecture: Automated Market Makers (x * y = k), pooled lending markets, overcollateralization, Health Factor liquidations, kinked interest rate models, impermanent loss derivation, flash loans, and Solidity DEX smart contracts.",
    keywords: "DeFi architecture, Automated Market Makers, AMM, constant product, x * y = k, Uniswap, Curve, Aave, Compound, overcollateralization, Health Factor, liquidation bonus, kinked interest rate, yield farming, impermanent loss, flash loans, composability, money legos, DeFi security, reentrancy",
    canonical: `${BASE_URL}/learning/blockchain/defi-protocols`,
  },

  "/learning/blockchain/dex-lending": {
    title: "Module 17: Decentralized Exchanges & Lending Protocols | PrepSpaces",
    description: "Master Decentralized Exchanges (DEXs) and Lending Protocols: Uniswap V2/V3 concentrated liquidity, tick math, constant product formulas, multi-hop routing, Compound cTokens, Aave aTokens, collateral factors, Health Factors, liquidation engines, Chainlink oracles, and flash loan arbitrage.",
    keywords: "Decentralized Exchanges, DEX architecture, AMM, Uniswap V2, Uniswap V3, concentrated liquidity, ticks, virtual reserves, slippage protection, multi-hop swap routing, lending protocols, Compound, cTokens, Aave, aTokens, variable debt, Collateral Factor, LTV, Health Factor, liquidation threshold, liquidation bonus, Chainlink oracle, flash loan arbitrage",
    canonical: `${BASE_URL}/learning/blockchain/dex-lending`,
  },

  "/learning/blockchain/final-capstone": {
    title: "Module 24: Final Blockchain Capstone Project | PrepSpaces",
    description: "Complete final year blockchain capstone project: build, test, audit, and deploy a production-style Web3 DApp. Covers VoteChain, NFT marketplaces, supply chain provenance, DeFi lending protocols, and oral defense.",
    keywords: "Blockchain Capstone, Final Year Project, Web3 DApp, Solidity, Hardhat, Foundry, Wagmi, Viem, React, IPFS, Security Audit, Etherscan Verification",
    canonical: `${BASE_URL}/learning/blockchain/final-capstone`,
  },

  "/learning/blockchain/solana-rust": {
    title: "Module 23: Solana Development with Rust | PrepSpaces",
    description: "Master Solana development with Rust and Anchor: accounts model, Sealevel parallel execution, Proof of History, PDAs, Cross-Program Invocations (CPI), SPL Tokens, and build a full token-management DApp.",
    keywords: "Solana, Rust, Anchor, Program Derived Address, PDA, CPI, SPL Token, Token-2022, Sealevel, Proof of History, Web3, Smart Contracts",
    canonical: `${BASE_URL}/learning/blockchain/solana-rust`,
  },

  "/learning/blockchain/hyperledger-fabric": {
    title: "Module 22: Hyperledger Fabric & Enterprise Blockchain | PrepSpaces",
    description: "Master Hyperledger Fabric 3.1.x and enterprise distributed ledgers: execute-order-validate consensus, MSP identity management, isolated channels, Private Data Collections (PDC), Go chaincode, CouchDB rich queries, and Docker deployment.",
    keywords: "Hyperledger Fabric, enterprise blockchain, permissioned blockchain, Go chaincode, Membership Service Provider, MSP, Fabric CA, Private Data Collections, PDC, CouchDB, execute-order-validate, Raft consensus, supply chain blockchain",
    canonical: `${BASE_URL}/learning/blockchain/hyperledger-fabric`,
  },
  "/learning/blockchain/daos-governance": {
    title: "Module 21: DAOs & Blockchain Governance | PrepSpaces",
    description: "Master Decentralized Autonomous Organizations (DAOs) and governance architecture: ERC20Votes checkpoints, OpenZeppelin Governor, TimelockController security, quadratic voting, treasury management, and legal wrappers.",
    keywords: "DAO, blockchain governance, decentralized autonomous organization, ERC20Votes, OpenZeppelin Governor, TimelockController, quadratic voting, treasury management, governance attack, Web3 governance",
    canonical: `${BASE_URL}/learning/blockchain/daos-governance`,
  },
  "/learning/blockchain/oracles-chainlink": {
    title: "Module 20: Oracles & Chainlink Architecture | PrepSpaces",
    description: "Master blockchain oracles and Chainlink infrastructure: deterministic consensus boundaries, Data Feeds, latestRoundData() validation, VRF v2.5 verifiable randomness, Offchain Reporting (OCR), Chainlink Runtime Environment (CRE), and flash loan price manipulation defense.",
    keywords: "blockchain oracles, Chainlink, Data Feeds, latestRoundData, AggregatorV3Interface, VRF v2.5, verifiable random function, Offchain Reporting, OCR, Chainlink Runtime Environment, CRE, data freshness, flash loan attack, oracle problem, proof of reserve, L2 sequencer uptime feed, decentralized oracle network, DON",
    canonical: `${BASE_URL}/learning/blockchain/oracles-chainlink`,
  },
  "/learning/blockchain/layer-2-scaling": {
    title: "Module 19: Layer 2 & Blockchain Scaling | PrepSpaces",
    description: "Master Ethereum Layer 2 architecture and blockchain scaling: Optimistic Rollups vs ZK Rollups, interactive dispute bisection, validity proofs, EIP-4844 blobs, data availability sampling, sequencer economics, and cross-chain bridge invariants.",
    keywords: "Layer 2 scaling, blockchain scaling, Ethereum rollups, Optimistic Rollups, ZK Rollups, Arbitrum Nitro, Optimism OP Stack, Polygon CDK, zkSync Era, EIP-4844, blobs, proto-danksharding, data availability sampling, DAS, interactive bisection, fraud proofs, validity proofs, sequencers, cross-chain bridges, lock-and-mint invariant",
    canonical: `${BASE_URL}/learning/blockchain/layer-2-scaling`,
  },
  "/learning/blockchain/security-vulnerabilities": {
    title: "Module 18: Blockchain Security & Smart Contract Auditing | PrepSpaces",
    description: "Master Solidity smart contract security and auditing: threat modeling, reentrancy attacks, Checks-Effects-Interactions (CEI), flash loan oracle manipulation, delegatecall storage collisions, Slither static analysis, Foundry fuzzing, formal verification, and professional audit reports.",
    keywords: "blockchain security, smart contract auditing, Solidity security, reentrancy, checks-effects-interactions, CEI, flash loan attack, oracle manipulation, delegatecall, storage collision, EIP-1967, Slither static analysis, Foundry fuzz testing, property-based testing, formal verification, Hoare logic, responsible disclosure, audit report, SWC registry",
    canonical: `${BASE_URL}/learning/blockchain/security-vulnerabilities`,
  },
  "/learning/blockchain/erc-token-standards": {
    title: "ERC Token Standards Architecture & Development | PrepSpaces",
    description: "Deep dive into ERC-20, ERC-721, and ERC-1155 token architecture. Learn allowance front-running mitigations, safeTransferFrom receiver callbacks, batch transfers, and vesting mathematics.",
    keywords: "ERC-20 architecture, ERC-721 metadata, ERC-1155 batch transfer, safeTransferFrom, tokenomics, vesting schedules, OpenZeppelin contracts",
    canonical: `${BASE_URL}/learning/blockchain/tokens`,
  },
  "/learning/blockchain/transaction-signing": {
    title: "Ethereum Transaction Signing & ECDSA Cryptography | PrepSpaces",
    description: "Deep dive into Ethereum transaction signing: EIP-1559 envelopes, ECDSA (r, s, v/yParity), personal_sign, Sign-In with Ethereum (SIWE), and nonce management.",
    keywords: "Ethereum transaction signing, ECDSA, secp256k1, EIP-1559, personal_sign, SIWE, nonce gap, gas price replacement",
    canonical: `${BASE_URL}/learning/blockchain/wallets-keys`,
  },
  "/learning/blockchain/smart-contract-testing": {
    title: "Smart Contract Quality Assurance & Testing Frameworks | PrepSpaces",
    description: "Comprehensive guide to testing Solidity smart contracts using Foundry Forge and Hardhat. Learn unit testing, fuzzing, invariants, mocks, fixtures, and execution debugging.",
    keywords: "Solidity testing, Foundry Forge, Hardhat, property-based testing, smart contract security, invariant handlers",
    canonical: `${BASE_URL}/learning/blockchain/testing`,
  },
  "/learning/blockchain/contract-architecture": {
    title: "Module 9: Smart Contract Development & Architecture | PrepSpaces",
    description: "Master end-to-end decentralized application engineering: requirements analysis, threat modeling, on-chain vs off-chain boundaries, factory pattern, registry pattern, pull payments, escrow state machines, multi-contract systems, OpenZeppelin integration, UUPS proxies, and The Graph event indexing.",
    keywords: "Smart contract architecture, DApp lifecycle, Factory pattern, Escrow contract, Pull payment pattern, Checks-Effects-Interactions, State machine, The Graph indexer, Contract verification, OpenZeppelin",
    canonical: `${BASE_URL}/learning/blockchain/architecture`,
  },
  "/learning/ai/math": {
    title: "Module 2: Mathematics for AI & Machine Learning | PrepSpaces",
    description: "Master linear algebra, vector calculus, probability distributions, statistics, and loss optimization for artificial intelligence and machine learning.",
    canonical: `${BASE_URL}/learning/ai/math`,
  },
  "/learning/ai/machine-learning": {
    title: "Module 3: Machine Learning Fundamentals & Scikit-Learn | PrepSpaces",
    description: "Master supervised regression, classification algorithms, unsupervised clustering, feature engineering pipelines, cross-validation, and production model evaluation.",
    canonical: `${BASE_URL}/learning/ai/machine-learning`,
  },
  "/learning/ai/deep-learning": {
    title: "Module 4: Deep Learning & Neural Network Engineering | PrepSpaces",
    description: "Master artificial neurons, multilayer perceptrons, backpropagation via the chain rule, activation functions, loss optimization, and deep learning in PyTorch.",
    canonical: `${BASE_URL}/learning/ai/deep-learning`,
  },
  "/learning/ai/nlp": {
    title: "Module 5: Natural Language Processing (NLP) Engineering | PrepSpaces",
    description: "Master linguistic foundations, production regex preprocessing, BPE tokenization, lemmatization, POS & NER with spaCy, TF-IDF, Word2Vec, BiLSTMs in PyTorch, and attention.",
    canonical: `${BASE_URL}/learning/ai/nlp`,
  },
  "/learning/ai/transformers": {
    title: "Module 6: Transformer Architecture from Scratch | PrepSpaces",
    description: "Build an encoder-decoder Transformer from scratch in PyTorch: scaled dot-product attention, multi-head subspaces, sinusoidal positional encodings, causal masks, and translation.",
    keywords: "Transformer architecture, Attention is All You Need, PyTorch Transformer, self-attention, multi-head attention, LLM architecture, Generative AI course",
    canonical: `${BASE_URL}/learning/ai/transformers`,
  },
  "/learning/ai/llms": {
    title: "Module 7: Large Language Models: GPT, Llama & Qwen | PrepSpaces",
    description: "Master modern Large Language Models: GPT, Llama 4 MoE, Qwen3, decoder-only Transformer architecture, next-token prediction, KV-caching, quantization, and MiniGPT from scratch.",
    canonical: `${BASE_URL}/learning/ai/llms`,
  },
  "/learning/ai/fine-tuning": {
    title: "Module 8: LLM Training & Fine-Tuning Foundations (LoRA & QLoRA) | PrepSpaces",
    description: "Master the complete LLM training lifecycle, supervised fine-tuning (SFT), assistant loss masking, parameter-efficient fine-tuning (PEFT), LoRA rank decomposition, and QLoRA 4-bit NF4 quantization.",
    canonical: `${BASE_URL}/learning/ai/fine-tuning`,
  },
  "/learning/ai/prompt-engineering": {
    title: "Module 9: Prompt Engineering & Structured LLM Outputs | PrepSpaces",
    description: "Master production prompt engineering, message role hierarchies, zero-shot and few-shot demonstrations, Chain-of-Thought, strict JSON Schema generation, Pydantic validation, and prompt injection defense.",
    canonical: `${BASE_URL}/learning/ai/prompt-engineering`,
  },
  "/learning/ai/vector-databases": {
    title: "Module 10: Embeddings, Vector Databases & Semantic Search | PrepSpaces",
    description: "Master dense embeddings, cosine similarity, Euclidean distance, FAISS indexing (Flat, IVF, HNSW, PQ), ChromaDB collections and metadata filtering, document chunking strategies, hybrid BM25 search, and cross-encoder rerankers.",
    canonical: `${BASE_URL}/learning/ai/vector-databases`,
  },
  "/learning/ai/rag-architecture": {
    title: "Module 11: Retrieval-Augmented Generation (RAG) Engineering | PrepSpaces",
    description: "Master enterprise RAG engineering: multi-format document ingestion, token-aware chunking, dense/sparse hybrid search with Reciprocal Rank Fusion, Cross-Encoder reranking, token budgeting, advanced agentic RAG, and Ragas evaluation.",
    canonical: `${BASE_URL}/learning/ai/rag-architecture`,
  },
  "/learning/ai/multimodal-ai": {
    title: "Module 12: Multimodal Generative AI (Vision & Audio) | PrepSpaces",
    description: "Master multimodal AI architectures: Vision Transformers (ViT), Projection Adapters, CLIP contrastive learning, Faster-Whisper speech-to-text, neural TTS with HiFi-GAN vocoders, real-time voice agents with barge-in, and Multimodal RAG.",
    canonical: `${BASE_URL}/learning/ai/multimodal-ai`,
  },
  "/learning/ai/ai-agents": {
    title: "Module 13: AI Agents & Tool-Calling Systems | PrepSpaces",
    description: "Master autonomous AI agent architecture: structured function calling schemas, ReAct observe-think-act loops, task planning DAGs, durable FSM state checkpointing, cognitive memory systems, Model Context Protocol (MCP), and multi-agent orchestration.",
    canonical: `${BASE_URL}/learning/ai/ai-agents`,
  },
  "/learning/ai/multi-agent-systems": {
    title: "Module 14: Multi-Agent AI Systems & Orchestration | PrepSpaces",
    description: "Master multi-agent AI systems: intelligent routing, planner-executor architecture, DAG dependency scheduling, sequential & parallel workflows, blackboard shared state, conflict resolution, circuit breakers, and Agent2Agent (A2A) protocol.",
    canonical: `${BASE_URL}/learning/ai/multi-agent-systems`,
  },
  "/learning/ai/graph-rag": {
    title: "Module 15: Advanced RAG & Knowledge Engineering | PrepSpaces",
    description: "Master Graph RAG and Knowledge Engineering: Dense + BM25 hybrid search, Reciprocal Rank Fusion (RRF), Neo4j Cypher property graphs, automated triple extraction, Microsoft GraphRAG Leiden community detection, multi-hop reasoning, HyDE, and Ragas evaluation.",
    canonical: `${BASE_URL}/learning/ai/graph-rag`,
  },
  "/learning/ai/llm-evaluation": {
    title: "Module 16: AI Evaluation, Alignment & Safety Engineering | PrepSpaces",
    description: "Master AI evaluation, alignment, and safety engineering: hallucination detection, atomic claim decomposition, LLM-as-a-judge, adversarial red teaming, OWASP Top 10 for LLMs, defense-in-depth guardrails, RLHF, DPO, Constitutional AI, and NIST AI RMF governance.",
    canonical: `${BASE_URL}/learning/ai/llm-evaluation`,
  },
  "/learning/ai/inference-serving": {
    title: "Module 17: LLM Inference & Model Serving Engineering | PrepSpaces",
    description: "Master high-throughput LLM inference and serving: vLLM, PagedAttention, continuous iteration-level batching, Ollama local runtime, Hugging Face TGI, post-training quantization (AWQ, GPTQ, GGUF), KV cache memory formulas, prefill vs decode profiling, and Server-Sent Events (SSE) progressive streaming.",
    canonical: `${BASE_URL}/learning/ai/inference-serving`,
  },
  "/learning/ai/backend-engineering": {
    title: "Module 18: AI Backend Engineering & API Development | PrepSpaces",
    description: "Master asynchronous AI backend engineering: FastAPI, Starlette ASGI, Pydantic V2 validation, Redis Token Bucket rate limiting, Server-Sent Events (SSE) token streaming, JWT Argon2id authentication, object-level authorization (BOLA defense), and Celery task fleets.",
    canonical: `${BASE_URL}/learning/ai/backend-engineering`,
  },
  "/learning/ai/mlops-deployment": {
    title: "Module 19: AI MLOps, Deployment & CI/CD | PrepSpaces",
    description: "Master enterprise MLOps and cloud deployment: multi-stage Docker containerization, MLflow experiment tracking and model registry, DVC data versioning, GitHub Actions CI/CD with automated evaluation gates, Kubernetes Canary & Blue-Green rollouts, and Evidently AI data drift monitoring.",
    canonical: `${BASE_URL}/learning/ai/mlops-deployment`,
  },
  "/learning/ai/scalability-optimization": {
    title: "Module 20: AI Scalability, Optimization & Observability | PrepSpaces",
    description: "Master high-scale AI engineering: Little's Law capacity planning, GPU VRAM dimensioning, GQA KV cache compression, TTFT/TPOT latency profiling, continuous iteration batching, Redis multi-tier caching, Prometheus & Grafana SRE golden signals, and resilient circuit breaking.",
    canonical: `${BASE_URL}/learning/ai/scalability-optimization`,
  },
  "/learning/ai/fine-tuning-domain": {
    title: "Module 21: Fine-Tuning LLMs for Domain-Specific Applications | PrepSpaces",
    description: "Master enterprise domain LLM fine-tuning: parameter-efficient fine-tuning (PEFT), LoRA matrix decomposition, QLoRA 4-bit NF4 quantization, conversational JSONL dataset engineering, SFTTrainer with response-only loss masking, model merging, and vLLM deployment.",
    canonical: `${BASE_URL}/learning/ai/fine-tuning-domain`,
  },
  "/learning/ai/scratch-slm": {
    title: "Module 22: Building Small Language Models from Scratch | PrepSpaces",
    description: "Learn how to build a small language model (SLM) from scratch in PyTorch: understand GPT architecture, character and BPE tokenization, learnable positional embeddings, scaled dot-product attention with causal masking, Pre-LayerNorm transformer blocks, next-token prediction with cross-entropy and AdamW, and autoregressive text generation.",
    canonical: `${BASE_URL}/learning/ai/scratch-slm`,
  },
  "/learning/ai/system-design": {
    title: "Module 23: AI System Design & Real-World Architecture | PrepSpaces",
    description: "Design and scale enterprise AI systems: 6-layer production architecture, RAG vs fine-tuning decision matrices, circuit breakers and graceful degradation, polyglot storage, real-time voice streaming with VAD and barge-in, Little's Law GPU capacity planning, and OWASP GenAI Top 10 security.",
    canonical: `${BASE_URL}/learning/ai/system-design`,
  },
  "/learning/ai/final-capstone": {
    title: "Module 24: Final AI Engineering Capstone | PrepSpaces",
    description: "Build and deploy an enterprise AI Technical Interview Platform: end-to-end full-stack AI system, hybrid RAG with pgvector, server-authoritative 7-state machine, streaming voice with Silero VAD and barge-in, Pydantic rubric validation, golden evaluation datasets, and technical viva defense.",
    canonical: `${BASE_URL}/learning/ai/final-capstone`,
  },
  "/learning/ai/foundations": {
    title: "Module 1: AI Engineering Foundations & Python for AI | PrepSpaces",
    description: "Learn AI taxonomy, agent perception and reasoning, Python internals, SIMD vectorization with NumPy, Pandas dataframes, and end-to-end AI workflows.",
    canonical: `${BASE_URL}/learning/ai/foundations`,
  },
  "/learning/os": {
    title: "Operating Systems Master Course — Kernel Internals & Systems Thinking | PrepSpaces",
    description: "Master operating systems internals, kernel architectures, process scheduling, virtual memory, concurrency, and Linux systems programming.",
    canonical: `${BASE_URL}/learning/os`,
  },
  "/learning/os/intro": {
    title: "Module 1: Introduction to Operating Systems and Systems Thinking | PrepSpaces",
    description: "Learn why operating systems exist, hardware abstraction layers, kernel vs user space, system calls, and Linux inspection labs.",
    canonical: `${BASE_URL}/learning/os`,
  },
  "/learning/os/architecture": {
    title: "Module 2: Computer Architecture for OS Engineers | PrepSpaces",
    description: "Master CPU execution, registers, privilege rings, interrupts, MMU page translation, TLBs, DMA, and system boot stages.",
    canonical: `${BASE_URL}/learning/os/architecture`,
  },
  "/learning/os/systems-programming": {
    title: "Module 3: C Programming & Systems Programming Model | PrepSpaces",
    description: "Master C memory models, virtual address space layouts, ELF binaries, static and dynamic linking, AddressSanitizer, and POSIX system interfaces.",
    canonical: `${BASE_URL}/learning/os/systems-programming`,
  },
  "/learning/os/syscalls": {
    title: "Module 4: OS Interfaces, System Calls & Program Execution | PrepSpaces",
    description: "Master system call transitions, file descriptors, fork, execvp, waitpid, process lifecycle, signals, pipes, and strace diagnostics.",
    canonical: `${BASE_URL}/learning/os/syscalls`,
  },
  "/learning/os/processes": {
    title: "Module 5: Processes and Process Lifecycle | PrepSpaces",
    description: "Master process abstractions, kernel task_struct (PCB), 5-state transitions, context switching, orphans, zombies, and Linux /proc exploration.",
    canonical: `${BASE_URL}/learning/os/processes`,
  },
  "/learning/os/scheduling": {
    title: "Module 6: CPU Scheduling and Performance | PrepSpaces",
    description: "Master FCFS, SJF, SRTF, Round Robin, Multilevel Feedback Queues (MLFQ), context-switch overhead, CPU affinity, and Linux EEVDF.",
    canonical: `${BASE_URL}/learning/os/scheduling`,
  },
  "/learning/os/threads": {
    title: "Module 7: Threads and Multithreaded Programming | PrepSpaces",
    description: "Master POSIX threads (pthreads), shared vs private state, threading models (1:1, N:1, M:N), Amdahl's Law, and cache false sharing mitigation.",
    canonical: `${BASE_URL}/learning/os/threads`,
  },
  "/learning/os/concurrency": {
    title: "Module 8: Concurrency, Synchronization and Deadlocks | PrepSpaces",
    description: "Master race conditions, critical sections, POSIX mutexes, condition variables, semaphores, C11 memory ordering, Coffman deadlock conditions, and linearizability.",
    canonical: `${BASE_URL}/learning/os/concurrency`,
  },
  "/learning/os/memory": {
    title: "Module 9: Memory Hierarchy and Memory Allocation | PrepSpaces",
    description: "Master virtual address spaces, stack frames, heap allocators, first-fit vs best-fit vs buddy allocation, fragmentation, and cache locality.",
    canonical: `${BASE_URL}/learning/os/memory`,
  },
  "/learning/os/virtual-memory": {
    title: "Module 10: Virtual Memory and Address Translation | PrepSpaces",
    description: "Master hardware MMU address translation, hierarchical page tables, PTE flags, TLB hit rates, Effective Access Time (EAT), and Copy-on-Write.",
    canonical: `${BASE_URL}/learning/os/virtual-memory`,
  },
  "/learning/os/demand-paging": {
    title: "Module 11: Demand Paging and Page Replacement | PrepSpaces",
    description: "Master demand paging, minor and major faults, working sets, thrashing, FIFO, Optimal, LRU, Clock, Belady's Anomaly, and Linux memory pressure.",
    canonical: `${BASE_URL}/learning/os/demand-paging`,
  },
  "/learning/os/virtualization": {
    title: "Module 12: Advanced Memory, Virtual Machines and Containers | PrepSpaces",
    description: "Master memory-mapped I/O, huge pages, NUMA nodes, hypervisors, EPT/NPT two-stage translation, Linux namespaces, and cgroup v2 memory limits.",
    canonical: `${BASE_URL}/learning/os/virtualization`,
  },
  "/learning/os/filesystems": {
    title: "Module 13: Filesystems and Storage Architecture | PrepSpaces",
    description: "Master files, directories, inodes, dentries, extents, journaling, crash consistency, VFS, page cache writeback, fsync, and ext4/XFS/Btrfs design.",
    canonical: `${BASE_URL}/learning/os/filesystems`,
  },
  "/learning/os/storage": {
    title: "Module 14: Storage Architecture, I/O Scheduling & Performance | PrepSpaces",
    description: "Master HDDs, flash SSDs, NVMe parallel queues, Little's Law, Linux I/O schedulers, DMA, write amplification, and io_uring.",
    canonical: `${BASE_URL}/learning/os/storage`,
  },
  "/learning/os/ipc": {
    title: "Module 15: IPC, Pipes, Shared Memory & Signals | PrepSpaces",
    description: "Master interprocess communication, anonymous pipes, named FIFOs, Unix domain sockets, POSIX shared memory, semaphores, signals, and backpressure.",
    canonical: `${BASE_URL}/learning/os/ipc`,
  },
  "/learning/os/crash-consistency": {
    title: "Module 16: Crash Consistency, Durability and Recovery | PrepSpaces",
    description: "Master crash consistency, page cache write ordering, fsync, atomic file replacement, journaling, copy-on-write, and disaster recovery validation.",
    canonical: `${BASE_URL}/learning/os/crash-consistency`,
  },
  "/learning/os/kernel-architecture": {
    title: "Module 17: Kernel Architecture & System Implementation | PrepSpaces",
    description: "Master kernel internals, boot flow from UEFI to PID 1, system-call dispatch tables, trap handling, spinlock interrupt safety, and MIT xv6 vs Linux.",
    canonical: `${BASE_URL}/learning/os/kernel-architecture`,
  },
  "/learning/os/diagnostics": {
    title: "Module 18: Linux Internals & Performance Diagnostics | PrepSpaces",
    description: "Master Linux performance diagnostics, /proc, /sys, vmstat, iostat, perf, strace, PSI stalls, and evidence-based bottleneck triage.",
    canonical: `${BASE_URL}/learning/os/diagnostics`,
  },
  "/learning/os/networking": {
    title: "Module 19: OS Networking & Network I/O | PrepSpaces",
    description: "Master the Linux kernel network stack, TCP/UDP sockets, non-blocking I/O, epoll event loops, socket buffers, application backpressure, and network namespaces.",
    canonical: `${BASE_URL}/learning/os/networking`,
  },
  "/learning/os/security": {
    title: "Module 20: OS Security, Isolation & Reliability | PrepSpaces",
    description: "Master Linux identities, capabilities, POSIX permissions, cgroup v2 limits, seccomp filters, Secure Boot, DoS defenses, and STRIDE threat modeling.",
    canonical: `${BASE_URL}/learning/os/security`,
  },
  "/learning/os/advanced-sync": {
    title: "Module 21: Advanced Synchronization & Multiprocessor Systems | PrepSpaces",
    description: "Master multiprocessor synchronization, spinlocks, atomics, lock-free queues, memory ordering, cache coherence, false sharing, NUMA, and RCU.",
    canonical: `${BASE_URL}/learning/os/advanced-sync`,
  },
  "/learning/os/testing": {
    title: "Module 22: OS Design, Testing & Failure Analysis | PrepSpaces",
    description: "Master systems testing, component invariants, fault injection, ThreadSanitizer race detection, kernel panics, and performance regression gates.",
    canonical: `${BASE_URL}/learning/os/testing`,
  },
  "/learning/os/design-testing": {
    title: "Module 22: OS Design, Testing & Failure Analysis | PrepSpaces",
    description: "Master systems testing, component invariants, fault injection, ThreadSanitizer race detection, kernel panics, and performance regression gates.",
    canonical: `${BASE_URL}/learning/os/testing`,
  },
  "/learning/os/capstone": {
    title: "Module 23 Capstone: Build an OS Component (xv6/RISC-V) | PrepSpaces",
    description: "Build, extend, and test an educational operating system component using MIT xv6 on RISC-V, system call traps, and engineering verification.",
    canonical: `${BASE_URL}/learning/os/capstone`,
  },
  "/learning/os/final-capstone": {
    title: "Module 24: Final Capstone — Operating Systems Engineering Lab | PrepSpaces",
    description: "Culminating operating systems engineering project. Implement bounded concurrent worker queues, performance diagnostic tools, or virtual memory simulators.",
    canonical: `${BASE_URL}/learning/os/final-capstone`,
  },
  "/learning/networks": {
    title: "Module 1: Introduction to Computer Networks & Internet Architecture | PrepSpaces",
    description: "Master computer networks from physical signals and Ethernet switching to global BGP routing, packet switching math, TCP/IP protocols, and network security.",
    canonical: `${BASE_URL}/learning/networks`,
  },
  "/learning/networks/intro": {
    title: "Module 1: Introduction to Computer Networks & Internet Architecture | PrepSpaces",
    description: "Master computer networks from physical signals and Ethernet switching to global BGP routing, packet switching math, TCP/IP protocols, and network security.",
    canonical: `${BASE_URL}/learning/networks`,
  },
  "/learning/networks/models": {
    title: "Module 2: Network Models — OSI & TCP/IP Protocol Architecture | PrepSpaces",
    description: "Master OSI 7-layer and TCP/IP 4-layer network models, protocol encapsulation, router frame re-framing, Wireshark packet dissection, and layered troubleshooting.",
    canonical: `${BASE_URL}/learning/networks/models`,
  },
  "/learning/networks/physical": {
    title: "Module 3: Physical Layer & Data Transmission | PrepSpaces",
    description: "Master physical layer signals, Nyquist and Shannon channel capacity, optical power budgets, line coding (NRZ, Manchester, PAM-4), and ethtool transceiver diagnostics.",
    canonical: `${BASE_URL}/learning/networks/physical`,
  },
  "/learning/networks/datalink": {
    title: "Module 4: Data Link Layer & Ethernet Switching | PrepSpaces",
    description: "Master Ethernet frame structures, CAM table MAC learning, ARP resolution, 802.1Q VLAN trunking, Spanning Tree Protocol (STP), and Layer 2 link security.",
    canonical: `${BASE_URL}/learning/networks/datalink`,
  },
  "/learning/networks/ipv4": {
    title: "Module 5: IPv4 Addressing, Subnetting & Enterprise Planning | PrepSpaces",
    description: "Master 32-bit binary arithmetic, CIDR notation, subnet calculations, VLSM address optimization, RFC 1918 private addressing, and NAT/PAT connection tracking.",
    canonical: `${BASE_URL}/learning/networks/ipv4`,
  },
  "/learning/networks/ipv6": {
    title: "Module 6: IPv6 Architecture, Modern Addressing & Transition Engineering | PrepSpaces",
    description: "Master 128-bit hexadecimal addressing, address compression rules, Global Unicast, Link-Local, Neighbor Discovery Protocol (NDP), SLAAC autoconfiguration, DHCPv6, dual-stack networks, transition mechanisms (NAT64/DNS64), and IPv6 defense-in-depth.",
    canonical: `${BASE_URL}/learning/networks/ipv6`,
  },
  "/learning/networks/routing": {
    title: "Module 7: Routing and Router Architecture | PrepSpaces",
    description: "Master Longest-Prefix Matching (LPM), RIB vs FIB data structures, hop-by-hop TTL frame re-encapsulation, Dijkstra link-state calculations in OSPF, BGP interdomain policy, and network fault troubleshooting.",
    canonical: `${BASE_URL}/learning/networks/routing`,
  },
  "/learning/networks/config": {
    title: "Module 8: ICMP, ARP, DHCP & Network Configuration | PrepSpaces",
    description: "Master host configuration protocols, DHCP DORA lease lifecycle, ARP address resolution and spoofing, ICMP diagnostics, DNS name resolution dependencies, and tcpdump packet analysis.",
    canonical: `${BASE_URL}/learning/networks/config`,
  },
  "/learning/networks/tcp": {
    title: "Module 9: TCP — Reliable Transport & Performance Engineering | PrepSpaces",
    description: "Master TCP internals, 3-way handshake, 11 connection states, sliding windows, flow control (rwnd), congestion control (cwnd), Fast Retransmit, PMTUD black holes, BDP calculation, and SYN cookies.",
    canonical: `${BASE_URL}/learning/networks/tcp`,
  },
  "/learning/networks/udp": {
    title: "Module 10: UDP, QUIC & Modern Transport Protocols | PrepSpaces",
    description: "Master UDP datagrams, 8-byte headers, checksum verification, application-managed reliability, QUIC (RFC 9000), HTTP/3, 0-RTT handshakes, Head-of-Line blocking elimination, connection migration, and DDoS amplification defense.",
    canonical: `${BASE_URL}/learning/networks/udp`,
  },
  "/learning/networks/dns": {
    title: "Module 11: DNS & Internet Naming Architecture | PrepSpaces",
    description: "Master global DNS hierarchy, root servers, recursive vs iterative resolution, 12-byte wire headers, resource records (A, AAAA, CNAME, MX, TXT, PTR), negative caching, DoH/DoT encryption, DNSSEC trust chains, and DNS tunneling forensics.",
    canonical: `${BASE_URL}/learning/networks/dns`,
  },
  "/learning/networks/application-layer": {
    title: "Module 12: Application Protocols & Web Networking | PrepSpaces",
    description: "Master HTTP/1.1 semantics, status codes, conditional caching (ETags), TLS 1.3 handshakes, X.509 PKI certificates, reverse proxies, REST APIs, CORS, and WebSockets.",
    canonical: `${BASE_URL}/learning/networks/application-layer`,
  },
  "/learning/networks/wireless": {
    title: "Module 13: Wireless, Wi-Fi & Mobile Networking | PrepSpaces",
    description: "Master IEEE 802.11 Wi-Fi generations (Wi-Fi 4-7), RF propagation, channel planning, WPA3-SAE, enterprise 802.1X EAP-TLS, Bluetooth LE, 5G Core, and WIPS defense.",
    canonical: `${BASE_URL}/learning/networks/wireless`,
  },
  "/learning/networks/switching": {
    title: "Module 14: Switching, VLANs & Enterprise LAN Design | PrepSpaces",
    description: "Master hierarchical campus networks, 802.1Q trunking, inter-VLAN routing (ROAS and SVIs), 802.1w RSTP loop prevention, LACP link aggregation, and Layer 2 switch port security.",
    canonical: `${BASE_URL}/learning/networks/switching`,
  },
  "/learning/networks/firewalls": {
    title: "Module 15: Network Services, Firewalls & Access Control | PrepSpaces",
    description: "Master stateful packet inspection, conntrack, ACL rule ordering, NAT, IPsec/WireGuard VPNs, Suricata IDS/IPS, bastion jump hosts, and Linux nftables.",
    canonical: `${BASE_URL}/learning/networks/firewalls`,
  },
  "/learning/networks/enterprise-cloud": {
    title: "Module 16: Enterprise, Data Center & Cloud Networking | PrepSpaces",
    description: "Master data center leaf-spine fabrics, ECMP routing, multi-tier cloud VPCs, Layer 4/7 load balancing, VXLAN overlays, MTU engineering, and Zero Trust.",
    canonical: `${BASE_URL}/learning/networks/enterprise-cloud`,
  },
  "/learning/networks/threat-modeling": {
    title: "Module 17: Network Security Fundamentals & Threat Modeling | PrepSpaces",
    description: "Master the CIA triad, explicit trust boundaries, attack surface reduction, STRIDE threat modeling, TLS 1.3 AEAD cryptography, and qualitative risk assessment.",
    canonical: `${BASE_URL}/learning/networks/threat-modeling`,
  },
  "/learning/networks/packet-analysis": {
    title: "Module 18: Packet Analysis & Network Reconnaissance | PrepSpaces",
    description: "Master Wireshark 3-pane dissection, display filters, tcpdump command-line capture, BPF filters, Nmap port states, and evidence integrity hashing.",
    canonical: `${BASE_URL}/learning/networks/packet-analysis`,
  },
  "/learning/networks/attacks-defenses": {
    title: "Module 19: Common Network Attacks & Defensive Countermeasures | PrepSpaces",
    description: "Master network attack vectors and mitigations: ARP cache poisoning vs Dynamic ARP Inspection (DAI), DNS cache poisoning vs DNSSEC, IP spoofing vs uRPF, TCP SYN floods vs SYN cookies, and VLAN hopping defenses.",
    canonical: `${BASE_URL}/learning/networks/attacks-defenses`,
  },
  "/learning/networks/ids-ips-soc": {
    title: "Module 20: IDS/IPS, SOC Monitoring and Incident Response | PrepSpaces",
    description: "Master network intrusion detection and prevention: Passive IDS vs Inline IPS, Suricata and Snort 3 rule authoring, Zeek telemetry logs, multi-source IoC correlation, SIEM triage, and NIST SP 800-61 incident response.",
    canonical: `${BASE_URL}/learning/networks/ids-ips-soc`,
  },
  "/learning/networks/network-automation": {
    title: "Module 21: Network Programming and Automation | PrepSpaces",
    description: "Master Python network programming and automation: TCP/UDP socket lifecycles, dual-stack DNS resolution with socket.getaddrinfo, HTTP client probing, ThreadPoolExecutor concurrency, RESTCONF/NETCONF idempotency, and JSONL diagnostics.",
    canonical: `${BASE_URL}/learning/networks/network-automation`,
  },
  "/learning/networks/advanced-routing": {
    title: "Module 22: Advanced Routing, Performance and Troubleshooting | PrepSpaces",
    description: "Master BGP routing policy, OSPF link-state convergence, Bufferbloat queueing dynamics, Path MTU Discovery (PMTUD) black holes, asymmetric routing across stateful firewalls, and enterprise root-cause analysis (RCA).",
    canonical: `${BASE_URL}/learning/networks/advanced-routing`,
  },
  "/learning/networks/security-architecture": {
    title: "Module 23: Modern Network Security Architecture | PrepSpaces",
    description: "Master Zero Trust (NIST SP 800-207), microsegmentation, secure DNS (DoH/DoT/DNSSEC), TLS 1.3 certificate lifecycle, WireGuard vs IPsec cryptokey routing, Kubernetes NetworkPolicies, and Network Detection & Response (NDR).",
    canonical: `${BASE_URL}/learning/networks/security-architecture`,
  },
  "/learning/networks/final-capstone": {
    title: "Module 24: Final Capstone — Network Engineering and Security Lab | PrepSpaces",
    description: "Build and audit an enterprise-grade segmented network lab featuring 802.1Q VLAN trunking, inter-VLAN routing, stateful firewall rules, HSRP/VRRP gateway redundancy, packet captures, iperf3 benchmarks, and complete engineering reports.",
    canonical: `${BASE_URL}/learning/networks/final-capstone`,
  },
  "/learn/computer-networks": {
    title: "Computer Networks & Internet Engineering Course | PrepSpaces",
    description: "University-level computer networks course based on MIT, Stanford, Berkeley, CMU, and Princeton curricula. Packet switching, sockets, routing, and Wireshark labs.",
    canonical: `${BASE_URL}/learn/computer-networks`,
  },
  "/learn/system-design": {
    title: "System Design Course for Beginners | PrepSpaces",
    description: "Master large-scale distributed systems, architectural thinking, capacity estimation, microservices, and system design interview questions.",
    canonical: `${BASE_URL}/learning/system-design`,
  },
  "/learn/cloud-computing": {
    title: "Cloud Computing Course and Interview Preparation | PrepSpaces",
    description: "Master enterprise public cloud architecture, AWS, Azure, GCP, VPC networking, compute, storage, and cloud engineering interview questions.",
    canonical: `${BASE_URL}/learning/cloud`,
  },
  "/learn/devops": {
    title: "DevOps Course and Interview Preparation | PrepSpaces",
    description: "Master modern production infrastructure, Linux systems, Docker, Kubernetes, CI/CD pipelines, and SRE interview preparation.",
    canonical: `${BASE_URL}/learning/devops/linux`,
  },

  // System Design Masterclass
  "/learning/system-design": {
    title: "System Design Course & Architecture Interview Preparation | PrepSpaces",
    description: "Complete guide to designing scalable distributed systems, high availability, microservices, and system design interview questions.",
    canonical: `${BASE_URL}/learning/system-design`,
  },
  "/learning/system-design/intro": {
    title: "Architectural Thinking & System Design Foundations — PrepSpaces",
    description: "Learn foundational architectural design principles, non-functional requirements, and trade-off matrices for distributed systems.",
    canonical: `${BASE_URL}/learning/system-design`,
  },
  "/learning/system-design/requirements": {
    title: "Requirements & Capacity Estimation Guide — PrepSpaces",
    description: "Learn how to estimate throughput (QPS/RPS), storage volumes, bandwidth, and memory caches during system design interviews.",
    canonical: `${BASE_URL}/learning/system-design/requirements`,
  },
  "/learning/system-design/networking": {
    title: "Networking, APIs & Communication Protocols — PrepSpaces",
    description: "Deep dive into REST, gRPC, WebSockets, HTTP/2, HTTP/3, and TCP/UDP communication patterns in modern architectures.",
    canonical: `${BASE_URL}/learning/system-design/networking`,
  },
  "/learning/system-design/architecture": {
    title: "Monoliths vs Microservices Architecture — PrepSpaces",
    description: "Compare monolithic architectures, modular monoliths, and microservices decomposition with real-world trade-off criteria.",
    canonical: `${BASE_URL}/learning/system-design/architecture`,
  },
  "/learning/system-design/databases": {
    title: "Relational Databases, NoSQL & Indexing Internals — PrepSpaces",
    description: "Master B-Trees, LSM-Trees, SQL indexing, NoSQL document/key-value stores, and database query optimization.",
    canonical: `${BASE_URL}/learning/system-design/databases`,
  },
  "/learning/system-design/caching": {
    title: "Distributed Caching, Redis & CDN Strategies — PrepSpaces",
    description: "Master cache-aside, write-through, write-behind, LRU/LFU eviction, and distributed caching invalidation strategies.",
    canonical: `${BASE_URL}/learning/system-design/caching`,
  },
  "/learning/system-design/replication": {
    title: "Database Replication, Partitioning & Sharding — PrepSpaces",
    description: "Master horizontal sharding, consistent hashing, single-leader vs multi-leader replication, and failover topologies.",
    canonical: `${BASE_URL}/learning/system-design/replication`,
  },
  "/learning/system-design/storage": {
    title: "Object Storage, File Systems, Search Engines & Data Pipelines — PrepSpaces",
    description: "Master cloud object storage, distributed file systems, inverted index search engines, batch and streaming data pipelines, and modern lakehouse architecture.",
    canonical: `${BASE_URL}/learning/system-design/storage`,
  },
  "/learning/system-design/distributed-systems": {
    title: "Distributed Systems, Clocks & Network Partitions — PrepSpaces",
    description: "Understand physical vs logical clocks (Lamport, Vector), network latency, timeouts, and CAP theorem nuances.",
    canonical: `${BASE_URL}/learning/system-design/distributed-systems`,
  },
  "/learning/system-design/consistency": {
    title: "Consistency Models, Linearizability & Quorum Systems — PrepSpaces",
    description: "Deep dive into strict consistency, sequential consistency, causal consistency, eventual consistency, and quorum math (R+W > N).",
    canonical: `${BASE_URL}/learning/system-design/consistency`,
  },
  "/learning/system-design/consensus": {
    title: "Distributed Consensus & Raft Protocol — PrepSpaces",
    description: "Interactive breakdown of distributed consensus, Paxos vs Raft, leader election, log replication, and split-brain defenses.",
    canonical: `${BASE_URL}/learning/system-design/consensus`,
  },
  "/learning/system-design/messaging": {
    title: "Message Queues, Kafka & Event-Driven Architecture — PrepSpaces",
    description: "Understand message brokers, RabbitMQ vs Apache Kafka, consumer groups, partitions, event sourcing, and delivery semantics.",
    canonical: `${BASE_URL}/learning/system-design/messaging`,
  },
  "/learning/system-design/transactions": {
    title: "Distributed Transactions, 2PC & Saga Orchestration — PrepSpaces",
    description: "Learn how to manage transactions across distributed microservices using Two-Phase Commit (2PC) and Saga patterns.",
    canonical: `${BASE_URL}/learning/system-design/transactions`,
  },
  "/learning/system-design/traffic": {
    title: "Load Balancing, Rate Limiting & Traffic Management — PrepSpaces",
    description: "Master L4/L7 load balancing algorithms, Token Bucket, Leaky Bucket rate limiting, circuit breakers, and backpressure.",
    canonical: `${BASE_URL}/learning/system-design/traffic`,
  },
  "/learning/system-design/scalability": {
    title: "Scalability & Performance Modeling — PrepSpaces",
    description: "Analyze system bottlenecks, vertical vs horizontal scaling, Amdahl's law, Universal Scalability Law, and performance tuning.",
    canonical: `${BASE_URL}/learning/system-design/scalability`,
  },
  "/learning/system-design/multi-region": {
    title: "Multi-Region Deployments & Disaster Recovery — PrepSpaces",
    description: "Design active-passive and active-active multi-region architectures, calculating RTO (Recovery Time Objective) and RPO.",
    canonical: `${BASE_URL}/learning/system-design/multi-region`,
  },
  "/learning/system-design/reliability": {
    title: "Reliability Engineering & Observability — PrepSpaces",
    description: "Master metrics, distributed tracing, structured logging, SLA/SLO/SLI calculation, and high-availability design.",
    canonical: `${BASE_URL}/learning/system-design/reliability`,
  },
  "/learning/system-design/security": {
    title: "System Design Security & Multi-Tenancy — PrepSpaces",
    description: "Architect zero-trust networks, OAuth2/OIDC token verification, RBAC/ABAC authorization, and data isolation at scale.",
    canonical: `${BASE_URL}/learning/system-design/security`,
  },
  "/learning/system-design/realtime": {
    title: "Real-Time Systems, WebSockets & Presence Servers — PrepSpaces",
    description: "Design live presence platforms, collaborative editing architectures, and scalable WebSocket connection managers.",
    canonical: `${BASE_URL}/learning/system-design/realtime`,
  },
  "/learning/system-design/search": {
    title: "Search Engines, Inverted Index & Vector Feeds — PrepSpaces",
    description: "Understand inverted index engines (Elasticsearch), full-text retrieval, relevance ranking, and activity feed generation.",
    canonical: `${BASE_URL}/learning/system-design/search`,
  },
  "/learning/system-design/ai-systems": {
    title: "AI Systems Design & Inference Serving at Scale — PrepSpaces",
    description: "Architect production machine learning systems, model serving pipelines, GPU scheduling, vector databases, and RAG architectures.",
    canonical: `${BASE_URL}/learning/system-design/ai-systems`,
  },
  "/learning/system-design/case-studies": {
    title: "System Design Case Studies (URL Shortener, Chat, Feed) — PrepSpaces",
    description: "Full end-to-end architectural case studies: TinyURL shortener, real-time WhatsApp-style chat, and Twitter feed algorithms.",
    canonical: `${BASE_URL}/learning/system-design/case-studies`,
  },
  "/learning/system-design/advanced-case-studies": {
    title: "Advanced System Design Case Studies (Uber, Netflix, Stripe) — PrepSpaces",
    description: "High-scale engineering deep dives: Ride-hailing dispatch, global video streaming CDN, and financial payment platforms.",
    canonical: `${BASE_URL}/learning/system-design/advanced-case-studies`,
  },
  "/learning/system-design/capstone": {
    title: "System Design Architecture Capstone Project — PrepSpaces",
    description: "Synthesize all distributed system principles into a complete, enterprise-grade architecture specification and design doc.",
    canonical: `${BASE_URL}/learning/system-design/capstone`,
  },

  // Cloud Computing Track
  "/learning/cloud": {
    title: "Cloud Computing Course & Interview Preparation | PrepSpaces",
    description: "Master public cloud architecture, AWS, Azure, GCP, availability zones, data center topologies, and cloud interview questions.",
    canonical: `${BASE_URL}/learning/cloud`,
  },
  "/learning/cloud/networking": {
    title: "Cloud Networking: VPCs, Subnets & Gateways — PrepSpaces",
    description: "Design enterprise VPC topologies, CIDR blocks, transit gateways, NAT gateways, and secure cloud perimeter networking.",
    canonical: `${BASE_URL}/learning/cloud/networking`,
  },
  "/learning/cloud/compute": {
    title: "Cloud Compute: Virtual Machines to Serverless — PrepSpaces",
    description: "Compare EC2 instances, spot instances, autoscaling groups, containers (ECS), and serverless execution models.",
    canonical: `${BASE_URL}/learning/cloud/compute`,
  },
  "/learning/cloud/storage": {
    title: "Cloud Storage: Object, Block & File Systems — PrepSpaces",
    description: "Deep dive into AWS S3, EBS, EFS, storage lifecycle policies, encryption at rest, and cloud data tiering.",
    canonical: `${BASE_URL}/learning/cloud/storage`,
  },
  "/learning/cloud/databases": {
    title: "Managed Cloud Databases: RDS, DynamoDB & Aurora — PrepSpaces",
    description: "Architect managed cloud database clusters with read replicas, multi-AZ failover, and global distributed tables.",
    canonical: `${BASE_URL}/learning/cloud/databases`,
  },
  "/learning/cloud/architecture": {
    title: "Well-Architected Cloud Framework — PrepSpaces",
    description: "Implement the 6 pillars of AWS/Azure Well-Architected Framework: operational excellence, security, reliability, performance, cost, sustainability.",
    canonical: `${BASE_URL}/learning/cloud/architecture`,
  },
  "/learning/cloud/aws": {
    title: "Deep AWS Engineering & Architecture Mastery — PrepSpaces",
    description: "In-depth guide to core Amazon Web Services: IAM policies, CloudFormation, CloudWatch, and multi-account AWS Organizations.",
    canonical: `${BASE_URL}/learning/cloud/aws`,
  },
  "/learning/cloud/azure": {
    title: "Microsoft Azure Architecture & Enterprise Cloud — PrepSpaces",
    description: "Master Azure Resource Manager (ARM), Azure AD (Entra ID), Virtual Networks, and Azure enterprise landing zones.",
    canonical: `${BASE_URL}/learning/cloud/azure`,
  },
  "/learning/cloud/gcp": {
    title: "Google Cloud Platform (GCP) Architecture — PrepSpaces",
    description: "Understand Google Cloud VPCs, BigQuery architecture, Google Kubernetes Engine (GKE), and global network backbone.",
    canonical: `${BASE_URL}/learning/cloud/gcp`,
  },
  "/learning/cloud/multicloud": {
    title: "Multi-Cloud Strategy & Hybrid Architectures — PrepSpaces",
    description: "Design portable, vendor-neutral architectures across AWS, Azure, and Google Cloud with unified governance.",
    canonical: `${BASE_URL}/learning/cloud/multicloud`,
  },
  "/learning/cloud/security": {
    title: "Cloud Security, IAM & Zero-Trust Governance — PrepSpaces",
    description: "Enforce least privilege IAM, secret rotation, key management (KMS), and automated cloud security posture management (CSPM).",
    canonical: `${BASE_URL}/learning/cloud/security`,
  },
  "/learning/cloud/economics": {
    title: "Cloud Economics & FinOps Cost Optimization — PrepSpaces",
    description: "Master FinOps lifecycle, reserved instances, savings plans, rightsizing workloads, and multi-tenant cost allocation.",
    canonical: `${BASE_URL}/learning/cloud/economics`,
  },
  "/learning/cloud/advanced": {
    title: "Advanced Cloud Systems & Edge Computing — PrepSpaces",
    description: "Explore edge computing runtimes, Cloudflare Workers, AWS Lambda@Edge, and geo-distributed compute topologies.",
    canonical: `${BASE_URL}/learning/cloud/advanced`,
  },

  // DevOps & SRE Track
  "/learning/devops": {
    title: "DevOps Course & SRE Interview Preparation | PrepSpaces",
    description: "Master modern production infrastructure, Linux systems, GitOps, Docker, Kubernetes, CI/CD, and DevOps interview questions.",
    canonical: `${BASE_URL}/learning/devops`,
  },
  "/learning/devops/linux": {
    title: "Linux Administration & System Internals for DevOps — PrepSpaces",
    description: "Master Linux shell scripting, file permissions, processes, systemd services, memory management, and network troubleshooting.",
    canonical: `${BASE_URL}/learning/devops/linux`,
  },
  "/learning/devops/git": {
    title: "Git Internals & Professional Branching Workflows — PrepSpaces",
    description: "Deep dive into Git plumbing commands, DAG commits, trunk-based development, rebasing, and merge strategies.",
    canonical: `${BASE_URL}/learning/devops/git`,
  },
  "/learning/devops/docker": {
    title: "Docker & Containerization Mastery — PrepSpaces",
    description: "Build production Dockerfiles, multi-stage builds, container isolation, Linux namespaces/cgroups, and image security.",
    canonical: `${BASE_URL}/learning/devops/docker`,
  },
  "/learning/devops/k8s": {
    title: "Kubernetes Architecture & Cluster Orchestration — PrepSpaces",
    description: "Master Pods, Deployments, StatefulSets, Services, Ingress, Helm charts, and Kubernetes control plane internals.",
    canonical: `${BASE_URL}/learning/devops/k8s`,
  },
  "/learning/devops/iac": {
    title: "Infrastructure as Code with Terraform — PrepSpaces",
    description: "Master Terraform HCL, state management, module reusability, remote backends, and GitOps infrastructure provisioning.",
    canonical: `${BASE_URL}/learning/devops/iac`,
  },
  "/learning/devops/cicd": {
    title: "CI/CD Pipelines & Continuous Delivery — PrepSpaces",
    description: "Build robust GitHub Actions and GitLab CI pipelines with automated linting, test suites, and zero-downtime releases.",
    canonical: `${BASE_URL}/learning/devops/cicd`,
  },
  "/learning/devops/deployment": {
    title: "Deployment Strategies: Blue/Green & Canary — PrepSpaces",
    description: "Implement zero-downtime deployment strategies, canary releases, blue/green switching, and automated health checks.",
    canonical: `${BASE_URL}/learning/devops/deployment`,
  },
  "/learning/devops/sre": {
    title: "Site Reliability Engineering: SLOs & Error Budgets — PrepSpaces",
    description: "Implement Google SRE practices, define Service Level Objectives (SLOs), calculate error budgets, and incident command.",
    canonical: `${BASE_URL}/learning/devops/sre`,
  },
  "/learning/devops/reliability": {
    title: "Production Resilience & Chaos Engineering — PrepSpaces",
    description: "Design fault-tolerant systems using chaos engineering principles, graceful degradation, and post-mortem analysis.",
    canonical: `${BASE_URL}/learning/devops/reliability`,
  },
  "/learning/devops/devsecops": {
    title: "DevSecOps & Software Supply Chain Security — PrepSpaces",
    description: "Secure software supply chains with container vulnerability scanning (Trivy), SAST/DAST, and secret detection.",
    canonical: `${BASE_URL}/learning/devops/devsecops`,
  },
  "/learning/devops/platform": {
    title: "Platform Engineering & Internal Developer Portals — PrepSpaces",
    description: "Build developer platforms, self-service infrastructure blueprints, and paved-road developer experiences.",
    canonical: `${BASE_URL}/learning/devops/platform`,
  },
  "/learning/devops/capstone": {
    title: "DevOps & SRE Production Capstone Project — PrepSpaces",
    description: "Deploy an end-to-end cloud-native microservices cluster with complete CI/CD, Terraform IaC, and monitoring stack.",
    canonical: `${BASE_URL}/learning/devops/capstone`,
  },
  // Cybersecurity Masterclass (24 Modules)
  "/learning/cybersecurity": {
    title: "Cybersecurity Masterclass — Ethical Hacking & Systems Defense | PrepSpaces",
    description: "Master university-informed cybersecurity engineering: CIA triad, threat modeling, ethical hacking, OWASP Top 10, NIST CSF 2.0, MITRE ATT&CK, and practical defense.",
    canonical: `${BASE_URL}/learning/cybersecurity`,
  },
  "/learning/cybersecurity/intro": {
    title: "Module 1: Introduction to Cybersecurity & Ethical Hacking | PrepSpaces",
    description: "Understand the adversarial mindset, threat actors, attack surfaces, vulnerability classifications, and legal boundaries of ethical hacking.",
    canonical: `${BASE_URL}/learning/cybersecurity`,
  },
  "/learning/cybersecurity/networking": {
    title: "Module 2: Computer Networking for Cybersecurity Engineers | PrepSpaces",
    description: "Deep-dive into network protocol security, TCP/IP attacks, ARP spoofing, DNS cache poisoning, TLS inspection, and firewall architecture.",
    canonical: `${BASE_URL}/learning/cybersecurity/networking`,
  },
  "/learning/cybersecurity/systems": {
    title: "Module 3: Operating System Internals & Systems Hardening | PrepSpaces",
    description: "Kernel privilege rings, system calls, memory safety, ASLR, DEP, process isolation, and Linux/Windows host hardening.",
    canonical: `${BASE_URL}/learning/cybersecurity/systems`,
  },
  "/learning/cybersecurity/threat-modeling": {
    title: "Module 4: Threat Modeling, Risk Assessment & Security Architecture | PrepSpaces",
    description: "STRIDE methodology, DREAD scoring, attack trees, trust boundaries, and risk mitigation strategies for modern software systems.",
    canonical: `${BASE_URL}/learning/cybersecurity/threat-modeling`,
  },
  "/learning/cybersecurity/methodology": {
    title: "Module 5: Ethical Hacking Methodology, Scoping & Rules of Engagement | PrepSpaces",
    description: "PTES, NIST SP 800-115, OSSTMM standards, legal authorizations, scopes of work, and professional rules of engagement.",
    canonical: `${BASE_URL}/learning/cybersecurity/methodology`,
  },
  "/learning/cybersecurity/osint": {
    title: "Module 6: Open-Source Intelligence (OSINT) & Passive Reconnaissance | PrepSpaces",
    description: "Recon-ng, Shodan, certificate transparency logs, DNS enumeration, WHOIS, and threat intelligence gathering techniques.",
    canonical: `${BASE_URL}/learning/cybersecurity/osint`,
  },
  "/learning/cybersecurity/recon": {
    title: "Module 7: Active Reconnaissance, Port Scanning & Enumeration | PrepSpaces",
    description: "Nmap scanning techniques, service enumeration, banner grabbing, NSE scripts, and network perimeter mapping.",
    canonical: `${BASE_URL}/learning/cybersecurity/recon`,
  },
  "/learning/cybersecurity/vulnerability-assessment": {
    title: "Module 8: Vulnerability Assessment, CVEs & CVSS Scoring | PrepSpaces",
    description: "Vulnerability management lifecycles, automated scanning, CVE database analysis, CVSS v3.1/v4.0 scoring, and prioritization.",
    canonical: `${BASE_URL}/learning/cybersecurity/vulnerability-assessment`,
  },
  "/learning/cybersecurity/network-security": {
    title: "Module 9: Network Security Architecture, Firewalls & IDS/IPS | PrepSpaces",
    description: "Stateful inspection, packet filtering, DMZs, Snort/Suricata IDS/IPS, network segmentation, and zero-trust perimeter defense.",
    canonical: `${BASE_URL}/learning/cybersecurity/network-security`,
  },
  "/learning/cybersecurity/os-security": {
    title: "Module 10: Operating System Security, Hardening & Integrity | PrepSpaces",
    description: "Linux & Windows benchmark hardening (CIS), AppArmor, SELinux, auditd, PAM authentication, and file integrity monitoring.",
    canonical: `${BASE_URL}/learning/cybersecurity/os-security`,
  },
  "/learning/cybersecurity/iam": {
    title: "Module 11: Identity, Authentication & Access Control (IAM) | PrepSpaces",
    description: "OAuth 2.0, OpenID Connect, SAML 2.0, Multi-Factor Authentication (MFA), RBAC, ABAC, and privilege management.",
    canonical: `${BASE_URL}/learning/cybersecurity/iam`,
  },
  "/learning/cybersecurity/cryptography": {
    title: "Module 12: Applied Cryptography, PKI & TLS Architecture | PrepSpaces",
    description: "Symmetric vs asymmetric encryption (AES, RSA, ECC), hashing, digital signatures, X.509 certificates, PKI, and TLS 1.3 handshakes.",
    canonical: `${BASE_URL}/learning/cybersecurity/cryptography`,
  },
  "/learning/cybersecurity/web-security": {
    title: "Module 13: Web Application Architecture, Sessions & Browser Security | PrepSpaces",
    description: "HTTP security headers, CSP, CORS, SameSite cookies, session tokens, DOM security models, and client-side defense.",
    canonical: `${BASE_URL}/learning/cybersecurity/web-security`,
  },
  "/learning/cybersecurity/owasp-top-10": {
    title: "Module 14: OWASP Top 10, Injection Vulnerabilities & Secure Input | PrepSpaces",
    description: "SQL injection, command injection, XSS, SSRF, IDOR, input validation, and parameterized query defenses.",
    canonical: `${BASE_URL}/learning/cybersecurity/owasp-top-10`,
  },
  "/learning/cybersecurity/auth-api-security": {
    title: "Module 15: Authentication Flaws, Access Control & API Security | PrepSpaces",
    description: "BOLA, BFLA, JWT vulnerabilities, mass assignment, rate limiting, and API security best practices (OWASP API Top 10).",
    canonical: `${BASE_URL}/learning/cybersecurity/auth-api-security`,
  },
  "/learning/cybersecurity/secure-code-review": {
    title: "Module 16: Secure Code Review, SAST/DAST & Remediation Validation | PrepSpaces",
    description: "Manual code audits, static and dynamic application security testing (SAST/DAST), software supply chain analysis, and automated CI/CD gating.",
    canonical: `${BASE_URL}/learning/cybersecurity/secure-code-review`,
  },
  "/learning/cybersecurity/wireless-security": {
    title: "Module 17: Wireless Security & Wi-Fi Defense | PrepSpaces",
    description: "WPA2/WPA3 protocols, 802.11 frames, 4-way handshakes, evil twin detection, rogue AP mitigation, and enterprise WLAN defense.",
    canonical: `${BASE_URL}/learning/cybersecurity/wireless-security`,
  },
  "/learning/cybersecurity/cloud-security": {
    title: "Module 18: Cloud Security, Containers, IAM Policies & K8s | PrepSpaces",
    description: "Shared responsibility model, AWS/Azure/GCP IAM least privilege, container vulnerability scanning, Kubernetes RBAC, and cloud posture management.",
    canonical: `${BASE_URL}/learning/cybersecurity/cloud-security`,
  },
  "/learning/cybersecurity/malware-analysis": {
    title: "Module 19: Malware Analysis Fundamentals & Threat Intelligence | PrepSpaces",
    description: "Static and dynamic malware analysis, sandboxing, reverse engineering basics, ransomware defense, and indicators of compromise (IOCs).",
    canonical: `${BASE_URL}/learning/cybersecurity/malware-analysis`,
  },
  "/learning/cybersecurity/soc-siem": {
    title: "Module 20: Security Monitoring, SIEM, Incident Response & Forensics | PrepSpaces",
    description: "SOC workflows, log collection, SIEM rule engineering, NIST SP 800-61 incident response, disk/memory artifact preservation, and chain of custody.",
    canonical: `${BASE_URL}/learning/cybersecurity/soc-siem`,
  },
  "/learning/cybersecurity/pentest-planning": {
    title: "Module 21: Penetration Testing Planning, RoE & Evidence Collection | PrepSpaces",
    description: "Scoping charters, rules of engagement, risk minimization, evidentiary integrity, chain of custody, and safe assessment execution.",
    canonical: `${BASE_URL}/learning/cybersecurity/pentest-planning`,
  },
  "/learning/cybersecurity/red-blue-purple-teams": {
    title: "Module 22: Red Team, Blue Team Operations & Purple Team Exercises | PrepSpaces",
    description: "Adversary emulation, MITRE ATT&CK mapping, detection engineering, telemetry gap analysis, and collaborative purple teaming.",
    canonical: `${BASE_URL}/learning/cybersecurity/red-blue-purple-teams`,
  },
  "/learning/cybersecurity/pentest-reports": {
    title: "Module 23: Penetration Testing Reports, CVSS v4 & Retesting | PrepSpaces",
    description: "Executive and technical reporting, CVSS v4.0 calculator integration, prioritized remediation lifecycles, and verified retesting.",
    canonical: `${BASE_URL}/learning/cybersecurity/pentest-reports`,
  },
  "/learning/cybersecurity/final-capstone": {
    title: "Module 24: Final Capstone — Security Assessment & Defense | PrepSpaces",
    description: "End-to-end cybersecurity project: Assess, Document, Secure, Retest, and Defend an enterprise lab environment.",
    canonical: `${BASE_URL}/learning/cybersecurity/final-capstone`,
  },
  "/learn/cybersecurity": {
    title: "Cybersecurity Masterclass — Ethical Hacking & Systems Defense | PrepSpaces",
    description: "Master university-informed cybersecurity engineering: CIA triad, threat modeling, ethical hacking, OWASP Top 10, NIST CSF 2.0, MITRE ATT&CK, and practical defense.",
    canonical: `${BASE_URL}/learning/cybersecurity`,
  },

};

/**
 * Helper to update or create a `<meta>` tag by name or property
 */
function updateMetaTag(attributeName, attributeValue, content) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/**
 * Helper to update or create `<link rel="canonical">`
 */
function updateCanonicalUrl(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

/**
 * Helper to inject or update BreadcrumbList JSON-LD on nested pages
 */
/**
 * Helper to inject or update Schema.org Course JSON-LD dynamically
 */
function updateCourseSchema(pathname, meta) {
  let script = document.getElementById("jsonld-course");
  const isCoursePage =
    pathname.startsWith("/learning/") ||
    pathname.startsWith("/courses/") ||
    pathname.startsWith("/learn/");

  if (!isCoursePage || pathname === "/learning" || pathname === "/learn") {
    if (script) script.remove();
    return;
  }

  const cleanTitle = meta.title.split("—")[0].split("–")[0].split("|")[0].trim();
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": cleanTitle,
    "description": meta.description,
    "url": meta.canonical,
    "educationalLevel": "University / Professional Systems Engineering",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "provider": {
      "@type": "Organization",
      "name": "PrepSpaces",
      "url": "https://prepspaces.com",
      "sameAs": ["https://www.instagram.com/prepspaces/"]
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT2H",
    },
  };

  if (pathname.includes("data-engineering")) {
    courseData.teaches = [
      "Data engineering lifecycle and architecture principles",
      "OLTP vs OLAP transactional and analytical system design",
      "Batch processing vs continuous event stream processing (Kafka, Spark)",
      "ETL vs ELT pipeline design and transformation patterns",
      "Data warehouses, data lakes, and modern lakehouses (Delta Lake, Apache Iceberg)",
      "Data quality dimensions: accuracy, completeness, consistency, validity, uniqueness, timeliness",
      "Hands-on data pipeline implementation in Python and Pandas"
    ];
  }

  if (pathname.includes("blockchain")) {
    courseData.teaches = [
      "Bitcoin architecture and UTXO transaction model",
      "Ethereum Virtual Machine (EVM) architecture and opcode execution",
      "Solidity programming, inheritance, and architectural patterns",
      "Smart contract security auditing, reentrancy defense, and formal verification",
      "DeFi protocols, automated market makers (AMM), and lending pools",
      "Layer 2 scaling, optimistic rollups, and zero-knowledge proofs",
      "Enterprise blockchain with Hyperledger Fabric and Go chaincode",
      "High-performance Solana development with Rust and Anchor"
    ];
  }

  if (!script) {
    script = document.createElement("script");
    script.id = "jsonld-course";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(courseData);
}

function updateBreadcrumbs(pathname, title) {
  let script = document.getElementById("jsonld-breadcrumbs");
  
  if (pathname === "/" || pathname === "") {
    if (script) script.remove();
    return;
  }

  const parts = pathname.split("/").filter(Boolean);
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`,
    },
  ];

  let currentPath = "";
  parts.forEach((part, index) => {
    currentPath += `/${part}`;
    const cleanName =
      index === parts.length - 1
        ? title.split("—")[0].split("|")[0].trim()
        : part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");

    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": cleanName,
      "item": `${BASE_URL}${currentPath}`,
    });
  });

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };

  if (!script) {
    script = document.createElement("script");
    script.id = "jsonld-breadcrumbs";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(breadcrumbData);
}

/**
 * SeoManager Component
 * Observes React Router pathname changes and updates document.title, meta descriptions,
 * canonical link tags, Open Graph, Twitter metadata, and Breadcrumbs in real time.
 */
export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    const meta = routeMeta[pathname] || {
      title: "PrepSpaces — Technical Interview Preparation & Architecture Mastery",
      description: "Interactive technical learning platform for software engineers. System design, cloud computing, and DevOps.",
      canonical: `${BASE_URL}${pathname}`,
    };

    // 1. Update Title
    document.title = meta.title;

    // 2. Update Standard Meta
    updateMetaTag("name", "description", meta.description);
    if (meta.keywords) {
      updateMetaTag("name", "keywords", meta.keywords);
    }
    updateMetaTag("name", "robots", meta.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Update Canonical Link
    updateCanonicalUrl(meta.canonical);

    // 4. Update Open Graph Meta
    updateMetaTag("property", "og:title", meta.title);
    updateMetaTag("property", "og:description", meta.description);
    updateMetaTag("property", "og:url", meta.canonical);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", "PrepSpaces");
    updateMetaTag("property", "og:image", `${BASE_URL}/logo-mark.png`);

    // 5. Update Twitter Meta
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", meta.title);
    updateMetaTag("name", "twitter:description", meta.description);
    updateMetaTag("name", "twitter:image", `${BASE_URL}/logo-mark.png`);

    // 6. Update Breadcrumbs & Course Structured Data
    updateBreadcrumbs(pathname, meta.title);
    updateCourseSchema(pathname, meta);

    // 7. Track SPA page views in Google Analytics (gtag.js)
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-N10P6557MZ", {
        page_path: pathname,
        page_title: meta.title,
        page_location: window.location.href,
      });
    }
  }, [location.pathname]);

  return null;
}
