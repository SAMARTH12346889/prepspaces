import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(projectRoot, "dist");

const BASE_URL = "https://prepspaces.com";

// Verify dist/index.html exists
const templatePath = path.resolve(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("Error: dist/index.html not found. Run 'vite build' first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");

// Extract routeMeta from SeoManager.jsx
const seoPath = path.resolve(projectRoot, "src/Componets/SeoManager.jsx");
const seoContent = fs.readFileSync(seoPath, "utf8");

const routeMeta = {};
const routeBlockMatch = seoContent.match(/const routeMeta = \{([\s\S]*?)\n\};/);

if (!routeBlockMatch) {
  console.error("Error: Could not locate routeMeta block in SeoManager.jsx");
  process.exit(1);
}

const block = routeBlockMatch[1];
const routeEntryRegex = /"([^"]+)":\s*\{([\s\S]*?)\n\s*\},/g;
let match;
while ((match = routeEntryRegex.exec(block)) !== null) {
  const route = match[1];
  const body = match[2];
  const titleMatch = body.match(/title:\s*"([^"]+)"/);
  const descMatch = body.match(/description:\s*"([^"]+)"/);
  const kwMatch = body.match(/keywords:\s*"([^"]+)"/);
  const canMatch = body.match(/canonical:\s*`\$\{BASE_URL\}([^\`]*)`/);
  const robMatch = body.match(/robots:\s*"([^"]+)"/);

  if (titleMatch && descMatch) {
    routeMeta[route] = {
      title: titleMatch[1],
      description: descMatch[1],
      keywords: kwMatch ? kwMatch[1] : null,
      canonical: canMatch ? `${BASE_URL}${canMatch[1]}` : `${BASE_URL}${route}`,
      robots: robMatch ? robMatch[1] : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
  }
}

console.log(`Loaded ${Object.keys(routeMeta).length} route definitions for prerendering.`);

// Track names helper for breadcrumb labeling
function getTrackNameFromPath(subPath) {
  if (subPath.startsWith("/learning/system-design")) return "System Design";
  if (subPath.startsWith("/learning/cloud")) return "Cloud Computing";
  if (subPath.startsWith("/learning/devops")) return "DevOps & SRE";
  if (subPath.startsWith("/learning/os")) return "Operating Systems";
  if (subPath.startsWith("/learning/networks")) return "Computer Networks";
  if (subPath.startsWith("/learning/cybersecurity")) return "Cybersecurity";
  if (subPath.startsWith("/courses/generative-ai") || subPath.startsWith("/learning/ai/generative-ai")) return "Generative AI";
  if (subPath.startsWith("/courses/artificial-intelligence")) return "Artificial Intelligence";
  if (subPath.startsWith("/learning/data-engineering") || subPath.startsWith("/courses/data-engineering")) return "Data Engineering";
  if (subPath.startsWith("/learning/blockchain") || subPath.startsWith("/courses/blockchain")) return "Blockchain Technology";
  if (subPath.startsWith("/learning/ai")) return "Artificial Intelligence";
  return "Engineering Curriculum";
}

// Clean up any legacy subfolder index.html files so Cloudflare Pages doesn't trigger 308 trailing-slash redirects
function removeSubfolderIndexHtml(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subIndex = path.join(fullPath, "index.html");
      if (fs.existsSync(subIndex)) {
        fs.unlinkSync(subIndex);
      }
      removeSubfolderIndexHtml(fullPath);
    }
  }
}

removeSubfolderIndexHtml(distDir);

let generatedCount = 0;

for (const [route, meta] of Object.entries(routeMeta)) {
  // Skip root '/' since dist/index.html is already the root
  if (route === "/" || route === "") continue;

  // Skip non-canonical aliases to avoid duplicate content & "Alternate page with proper canonical tag" issues
  if (meta.canonical && meta.canonical !== `${BASE_URL}${route}`) {
    continue;
  }

  const cleanRoute = route.replace(/^\/+/, "");
  // Output flat .html files so Cloudflare Pages serves them directly with 200 OK without trailing-slash 308 redirects
  const targetFile = path.resolve(distDir, `${cleanRoute}.html`);
  const targetDir = path.dirname(targetFile);
  fs.mkdirSync(targetDir, { recursive: true });

  const cleanTitle = meta.title.split("—")[0].split("–")[0].split("|")[0].trim();
  const trackName = getTrackNameFromPath(route);
  const pathParts = route.split("/").filter(Boolean);

  // Generate breadcrumb list JSON-LD
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`,
    },
  ];

  let currentSubPath = "";
  pathParts.forEach((part, index) => {
    currentSubPath += `/${part}`;
    const name = index === pathParts.length - 1
      ? cleanTitle
      : part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");

    breadcrumbItems.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `${BASE_URL}${currentSubPath}`,
    });
  });

  const breadcrumbsJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems,
  });

  const isBlockchain = route.includes("blockchain");
  const isDataEngineering = route.includes("data-engineering");
  const courseJsonLdObj = {
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
      "sameAs": [
        "https://www.instagram.com/prepspaces/"
      ]
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT2H",
    },
  };

  if (isBlockchain) {
    courseJsonLdObj.courseCode = "BC-ENG-101";
    courseJsonLdObj.teaches = [
      "Bitcoin architecture and UTXO transaction model",
      "Ethereum Virtual Machine (EVM) opcode execution and gas dynamics",
      "Solidity programming, inheritance, and design patterns",
      "Smart contract auditing, reentrancy attacks, and formal verification",
      "DeFi protocols, automated market makers (AMM), and lending pools",
      "Layer 2 scaling, optimistic rollups, and zero-knowledge proofs",
      "Decentralized oracle infrastructure with Chainlink price feeds",
      "Enterprise blockchain with Hyperledger Fabric and Go chaincode",
      "High-performance Solana development with Rust and Anchor"
    ];
  }

  if (isDataEngineering) {
    courseJsonLdObj.courseCode = "DE-ENG-101";
    courseJsonLdObj.teaches = [
      "Data engineering lifecycle and architecture principles",
      "OLTP vs OLAP transactional and analytical system design",
      "Batch processing vs continuous event stream processing (Kafka, Spark)",
      "ETL vs ELT pipeline design and transformation patterns",
      "Data warehouses, data lakes, and modern lakehouses (Delta Lake, Apache Iceberg)",
      "Data quality dimensions: accuracy, completeness, consistency, validity, uniqueness, timeliness",
      "Hands-on data pipeline implementation in Python and Pandas"
    ];
  }

  const courseJsonLd = JSON.stringify(courseJsonLdObj);

  const techArticleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": cleanTitle,
    "description": meta.description,
    "url": meta.canonical,
    "inLanguage": "en",
    "proficiencyLevel": "Intermediate to Advanced",
    "publisher": {
      "@type": "Organization",
      "name": "PrepSpaces",
      "url": "https://prepspaces.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prepspaces.com/logo-mark.png",
      },
      "sameAs": [
        "https://www.instagram.com/prepspaces/"
      ]
    },
  });

  let html = template;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/,
    `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />`
  );

  // 2b. Inject or update Meta Keywords
  if (meta.keywords) {
    const kwTag = `<meta name="keywords" content="${meta.keywords.replace(/"/g, '&quot;')}" />`;
    if (html.includes('<meta name="keywords"')) {
      html = html.replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/>/, kwTag);
    } else {
      html = html.replace('</head>', `    ${kwTag}\n  </head>`);
    }
  }

  // 3. Replace or inject Canonical Link
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"\s+href=".*?"\s*\/>/, `<link rel="canonical" href="${meta.canonical}" />`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${meta.canonical}" />\n  </head>`);
  }

  // 4. Update Robots Meta Tag
  html = html.replace(
    /<meta name="robots" content=".*?" \/>/,
    `<meta name="robots" content="${meta.robots}" />`
  );

  // 5. Update Open Graph Meta Tags
  html = html.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:url" content="${meta.canonical}" />`);

  // 6. Update Twitter Meta Tags
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/, `<meta name="twitter:title" content="${meta.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="twitter:description" content="${meta.description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+name="twitter:url"\s+content="[\s\S]*?"\s*\/>/, `<meta name="twitter:url" content="${meta.canonical}" />`);

  // 6b. Remove WebSite structured data from subpages (Google requires WebSite schema ONLY on the homepage)
  html = html.replace(/<script\s+type="application\/ld\+json"\s+id="schema-website">[\s\S]*?<\/script>\s*/, '');

  // 7. Inject Structured Data JSON-LD
  const schemaTags = `
    <!-- Structured Data: Breadcrumbs, Course & TechArticle (AEO/GEO Grounding) -->
    <script type="application/ld+json" id="jsonld-breadcrumbs">${breadcrumbsJsonLd}</script>
    <script type="application/ld+json" id="jsonld-course">${courseJsonLd}</script>
    <script type="application/ld+json" id="jsonld-techarticle">${techArticleJsonLd}</script>
  </head>`;
  html = html.replace('</head>', schemaTags);

  // 8. Inject Semantic Content inside <div id="root"></div> for zero-JS crawlers & AI Answer Engines
  const isCurriculumHub = route === "/learning";
  const isInterview = route === "/interview";
  const isAiCourse = route === "/courses/artificial-intelligence" || route === "/learning/ai";
  const isGenAiCourse = route === "/courses/generative-ai" || route === "/learning/ai/generative-ai";
  const isDataEngineeringCourse = route === "/courses/data-engineering" || route === "/learning/data-engineering";
  const isBlockchainCourse = route === "/courses/blockchain" || route === "/learning/blockchain";
  let semanticContent = "";

  if (isDataEngineeringCourse) {
    semanticContent = `<div id="root">
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
          <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
            <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
            <a href="/learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Curriculum</a> &rarr; 
            <span style="color: #1c1917; font-weight: 600;">Data Engineering Master Course</span>
          </nav>
          <header style="margin-bottom: 2rem;">
            <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">Foundation Level &bull; Production Systems</span>
            <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">Data Engineering Master Course | Pipelines, Lakehouses &amp; SQL</h1>
            <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
          </header>
          <main>
            <article style="background: white; border: 1px solid #e7e3da; border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <h2 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.75rem; color: #18181b;">Course Overview &amp; Engineering Foundations</h2>
              <div style="background-color: #fbf9f4; border-left: 4px solid #f97316; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
                <p style="font-size: 0.95rem; line-height: 1.6; color: #292524; margin: 0;"><strong>Direct Course Definition:</strong> Comprehensive, industry-aligned engineering course covering the full data engineering lifecycle, data pipeline architecture, OLTP vs OLAP workloads, batch vs continuous stream processing, ETL vs ELT pipelines, enterprise data warehouses, data lakes, modern lakehouses (Delta Lake, Apache Iceberg, Apache Hudi), data quality dimensions, and local Python pipeline development.</p>
              </div>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Curriculum Modules</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><strong><a href="/learning/data-engineering/intro" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 1: Introduction to Data Engineering and Data Systems</a></strong> &mdash; Foundations of data infrastructure, lifecycle, OLTP vs OLAP, batch vs stream, ETL vs ELT, warehouses, lakes, lakehouses, data quality dimensions, and practical Python pipeline.</li>
              </ul>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Core Engineering Competencies</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><strong>Pipeline Architecture:</strong> Ingestion, cleaning, transformation, storage, serving, orchestration, monitoring, and governance.</li>
                <li><strong>Workload Segregation:</strong> OLTP operational databases vs OLAP analytical warehouses and dimensional modeling.</li>
                <li><strong>Processing Paradigms:</strong> Scheduled batch processing vs event-driven continuous stream processing with Kafka and Flink.</li>
                <li><strong>Lakehouse Infrastructure:</strong> Open columnar formats (Parquet), table formats (Iceberg, Delta Lake), and cloud warehouses (Snowflake, BigQuery).</li>
                <li><strong>Data Reliability:</strong> Idempotent operations, automated quality checks, dead-letter queues, backfills, and SLAs/SLOs.</li>
              </ul>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Related Systems Engineering Masterclasses</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><a href="/learning/system-design" style="color: #ea580c; text-decoration: none; font-weight: 600;">System Design Masterclass (24 Modules)</a> &mdash; Distributed consensus, database replication, caching, and message queues.</li>
                <li><a href="/learning/cloud" style="color: #ea580c; text-decoration: none; font-weight: 600;">Cloud Computing Architecture (13 Modules)</a> &mdash; AWS S3, Google Cloud Storage, Redshift, and cloud networking.</li>
                <li><a href="/learning/devops/linux" style="color: #ea580c; text-decoration: none; font-weight: 600;">DevOps &amp; SRE Track (12 Modules)</a> &mdash; Production infrastructure, Docker, Kubernetes, and CI/CD automation.</li>
                <li><a href="/courses/artificial-intelligence" style="color: #ea580c; text-decoration: none; font-weight: 600;">AI Engineering Masterclass (24 Modules)</a> &mdash; Data pipelines for AI, NumPy vectorization, and model serving.</li>
              </ul>
            </article>

            <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/learning/data-engineering/intro" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Start Learning Module 1 &rarr;</a>
              <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">Curriculum Hub &rarr;</a>
              <a href="/" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">PrepSpaces Home</a>
            </nav>
          </main>
        </div>
      </div>`;
  } else if (isBlockchainCourse) {
    semanticContent = `<div id="root">
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
          <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
            <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
            <a href="/learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Curriculum</a> &rarr; 
            <span style="color: #1c1917; font-weight: 600;">Blockchain Development Course</span>
          </nav>
          <header style="margin-bottom: 2rem;">
            <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">University-Informed Masterclass &bull; 24 Modules</span>
            <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">Blockchain Development Course | Solidity, Web3 &amp; Smart Contracts</h1>
            <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
          </header>
          <main>
            <article style="background: white; border: 1px solid #e7e3da; border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <h2 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.75rem; color: #18181b;">Course Overview &amp; Educational Objectives</h2>
              <div style="background-color: #fbf9f4; border-left: 4px solid #f97316; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
                <p style="font-size: 0.95rem; line-height: 1.6; color: #292524; margin: 0;"><strong>Direct Course Definition:</strong> Comprehensive, university-level engineering course covering blockchain cryptographic primitives, distributed consensus mechanisms, Bitcoin &amp; Ethereum internals, Solidity smart contract architecture, full-stack DApp integration, DeFi protocols, Layer 2 rollups, smart contract security auditing, enterprise Hyperledger Fabric, and high-performance Solana development with Rust.</p>
              </div>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Complete 24-Module Blockchain Engineering Curriculum</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><strong><a href="/learning/blockchain/intro" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 1: Introduction to Blockchain Technology</a></strong> &mdash; Centralized vs decentralized systems, distributed ledger technology, SHA-256 hashing, block structure, and tamper-evident Python blockchain.</li>
                <li><strong><a href="/learning/blockchain/cryptography" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 2: Cryptography Fundamentals for Blockchain</a></strong> &mdash; Modular arithmetic, secp256k1 elliptic curve scalar multiplication, ECDSA signatures, HD wallets (BIP-32), and Merkle tree proofs.</li>
                <li><strong><a href="/learning/blockchain/consensus" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 3: Distributed Systems &amp; Consensus Mechanisms</a></strong> &mdash; Byzantine Fault Tolerance, Nakamoto consensus, Proof of Work mining, Proof of Stake, PBFT, CAP theorem, and FLP impossibility.</li>
                <li><strong><a href="/learning/blockchain/bitcoin-utxo" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 4: Bitcoin Architecture &amp; Transactions</a></strong> &mdash; UTXO accounting model, Bitcoin Script execution engine, P2PKH, P2SH, SegWit, mempool, and Coinbase mechanics.</li>
                <li><strong><a href="/learning/blockchain/ethereum-evm" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 5: Ethereum &amp; EVM Architecture</a></strong> &mdash; Account model, Ethereum world state trie, Patricia Merkle trees, gas schedule, EIP-1559 fee market, and smart contracts.</li>
                <li><strong><a href="/learning/blockchain/evm-internals" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 6: EVM Deep Dive &amp; Opcode Execution</a></strong> &mdash; Stack machine, memory allocation, storage slot layout, SSTORE/SLOAD gas mechanics, call opcodes, and bytecode disassembly.</li>
                <li><strong><a href="/learning/blockchain/solidity" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 7: Solidity Programming Fundamentals</a></strong> &mdash; Syntax, value vs reference types, view/pure functions, modifiers, events, custom errors, and contract inheritance.</li>
                <li><strong><a href="/learning/blockchain/advanced-solidity" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 8: Advanced Solidity &amp; Gas Optimization</a></strong> &mdash; Storage slot packing, calldata optimization, assembly Yul, memory vs storage caching, ERC-7201 namespaced storage, and immutable patterns.</li>
                <li><strong><a href="/learning/blockchain/architecture" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 9: Smart Contract Development &amp; Architecture</a></strong> &mdash; Factory pattern, registry pattern, pull payments, escrow state machines, UUPS and Transparent upgradeable proxies.</li>
                <li><strong><a href="/learning/blockchain/testing" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 10: Smart Contract Testing &amp; Security</a></strong> &mdash; Unit testing with Foundry Forge and Hardhat, fuzzing, property-based testing, invariant handlers, and mocks.</li>
                <li><strong><a href="/learning/blockchain/wallets-keys" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 11: Wallets, Keys &amp; Transaction Signing</a></strong> &mdash; BIP-39 mnemonic phrases, BIP-44 derivation paths, EIP-712 structured data signing, SIWE, and hardware wallet integration.</li>
                <li><strong><a href="/learning/blockchain/tokens" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 12: Token Standards: ERC-20, ERC-721, ERC-1155</a></strong> &mdash; Token mechanics, allowance race conditions, safe transfers, metadata URI hosting, batch operations, and tokenomics.</li>
                <li><strong><a href="/learning/blockchain/web3-libraries" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 13: Web3 Front-End Integration</a></strong> &mdash; Ethers.js v6, Viem, Wagmi hooks, wallet connectors, contract read/write state handling, and event listening.</li>
                <li><strong><a href="/learning/blockchain/dapp-development" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 14: Full-Stack DApp Development</a></strong> &mdash; End-to-end decentralized application development, indexing with The Graph, responsive Web3 UI, and testnet deployment.</li>
                <li><strong><a href="/learning/blockchain/ipfs-storage" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 15: Decentralized Storage Architecture</a></strong> &mdash; IPFS content addressing, CIDv0/CIDv1, UnixFS, IPFS pinning services (Pinata), Filecoin, and Arweave permaweb.</li>
                <li><strong><a href="/learning/blockchain/defi-protocols" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 16: DeFi Architecture &amp; Protocols</a></strong> &mdash; Automated Market Makers (x*y=k), constant product formula, liquidity provision, impermanent loss, and flash loans.</li>
                <li><strong><a href="/learning/blockchain/dex-lending" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 17: DEXs &amp; Lending Protocols</a></strong> &mdash; Uniswap V3 concentrated liquidity, tick mathematics, multi-hop swap routing, Compound cTokens, Aave pools, and liquidation engines.</li>
                <li><strong><a href="/learning/blockchain/security-vulnerabilities" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 18: Blockchain Security &amp; Smart Contract Auditing</a></strong> &mdash; Threat modeling, reentrancy attacks, CEI pattern, oracle manipulation, Slither static analysis, and formal verification.</li>
                <li><strong><a href="/learning/blockchain/layer-2-scaling" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 19: Layer 2 &amp; Blockchain Scaling</a></strong> &mdash; Optimistic rollups (Arbitrum, Optimism), ZK-rollups (zkSync, Polygon zkEVM), interactive fraud proofs, validity proofs, and EIP-4844 blobs.</li>
                <li><strong><a href="/learning/blockchain/oracles-chainlink" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 20: Oracles &amp; Chainlink Architecture</a></strong> &mdash; Decentralized oracle networks, Data Feeds, latestRoundData validation, VRF verifiable randomness, and Cross-Chain Interoperability (CCIP).</li>
                <li><strong><a href="/learning/blockchain/daos-governance" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 21: DAOs &amp; Blockchain Governance</a></strong> &mdash; ERC20Votes checkpoints, OpenZeppelin Governor, TimelockController security, quadratic voting, and treasury execution.</li>
                <li><strong><a href="/learning/blockchain/hyperledger-fabric" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 22: Hyperledger Fabric &amp; Enterprise Blockchain</a></strong> &mdash; Permissioned DLT, Membership Service Providers (MSP), channels, Go chaincode, CouchDB queries, and Raft consensus.</li>
                <li><strong><a href="/learning/blockchain/solana-rust" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 23: Solana Development with Rust</a></strong> &mdash; Account model, Sealevel runtime, Proof of History, Program Derived Addresses (PDAs), CPI calls, and Anchor framework.</li>
                <li><strong><a href="/learning/blockchain/final-capstone" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 24: Final Blockchain Capstone Project</a></strong> &mdash; Full production Web3 DApp engineering: requirements, verified smart contracts, off-chain indexing, frontend UI, security audit, and oral defense.</li>
              </ul>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Core Technical Competencies &amp; Tooling</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #44403c; margin-bottom: 1.5rem;">Graduates master industry-standard Web3 engineering tooling including Solidity 0.8+, Foundry (Forge, Cast, Anvil), Hardhat, Rust, Anchor, Web3.js, Ethers.js v6, Viem, OpenZeppelin Contracts, Slither static analysis, IPFS, Hyperledger Fabric 3.x, and Chainlink decentralized oracle networks.</p>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Academic Standards &amp; Free Access</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #44403c; margin-bottom: 1.5rem;">Curriculum informed by top academic blockchain curricula (Stanford CS251, MIT, UC Berkeley, Princeton). All modules, code implementations, interactive simulators, and assessment suites are available 100% free with no paywall on PrepSpaces.</p>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Related Systems Engineering Masterclasses</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><a href="/learning/system-design" style="color: #ea580c; text-decoration: none; font-weight: 600;">System Design Masterclass (24 Modules)</a> &mdash; Distributed consensus, replication, microservices, and high-availability architecture.</li>
                <li><a href="/learning/cybersecurity" style="color: #ea580c; text-decoration: none; font-weight: 600;">Cybersecurity &amp; Ethical Hacking (24 Modules)</a> &mdash; Applied cryptography, network penetration testing, and secure code review.</li>
                <li><a href="/learning/cloud" style="color: #ea580c; text-decoration: none; font-weight: 600;">Cloud Computing Architecture (13 Modules)</a> &mdash; AWS, Azure, GCP infrastructure, VPC networks, and serverless compute.</li>
                <li><a href="/courses/artificial-intelligence" style="color: #ea580c; text-decoration: none; font-weight: 600;">Artificial Intelligence Course (24 Modules)</a> &mdash; AI engineering, deep learning, LLMs, and agentic workflows.</li>
              </ul>
            </article>

            <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/learning/blockchain/intro" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Start Learning Blockchain &rarr;</a>
              <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">All Curriculum Tracks &rarr;</a>
              <a href="/" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">PrepSpaces Home</a>
            </nav>
          </main>
        </div>
      </div>`;
  } else if (isAiCourse) {
    semanticContent = `<div id="root">
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
          <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
            <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
            <a href="/learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Curriculum</a> &rarr; 
            <span style="color: #1c1917; font-weight: 600;">Artificial Intelligence Course</span>
          </nav>
          <header style="margin-bottom: 2rem;">
            <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">University-Informed Masterclass • 24 Modules</span>
            <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">Artificial Intelligence Course — Learn AI Fundamentals</h1>
            <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
          </header>
          <main>
            <article style="background: white; border: 1px solid #e7e3da; border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <h2 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.75rem; color: #18181b;">Course Overview & Educational Objectives</h2>
              <div style="background-color: #fbf9f4; border-left: 4px solid #f97316; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
                <p style="font-size: 0.95rem; line-height: 1.6; color: #292524; margin: 0;"><strong>Direct Course Definition:</strong> Comprehensive, self-paced masterclass covering artificial intelligence foundations, linear algebra and calculus for machine learning, supervised and unsupervised learning, deep neural networks, natural language processing, and scalable AI system design.</p>
              </div>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Key AI Curriculum Tracks</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><strong><a href="/learning/ai" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 1: AI Foundations & Python for AI</a></strong> — Python internals, SIMD vectorization with NumPy, Pandas dataframes, and agent architectures.</li>
                <li><strong><a href="/learning/ai/math" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 2: Mathematics for AI & Machine Learning</a></strong> — Linear algebra, vector spaces, gradient descent, probability, and optimization.</li>
                <li><strong><a href="/learning/ai/machine-learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 3: Machine Learning Fundamentals</a></strong> — Regression, classification, clustering, decision trees, cross-validation, and metrics.</li>
                <li><strong><a href="/learning/ai/deep-learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 4: Deep Learning & Neural Networks</a></strong> — PyTorch tensors, autograd backpropagation, multi-layer perceptrons, and activation dynamics.</li>
                <li><strong><a href="/learning/ai/nlp" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 5: Natural Language Processing</a></strong> — Tokenization, spaCy pipelines, TF-IDF, Word2Vec embeddings, and sequence models.</li>
              </ul>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Verified Educational Standards</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #44403c; margin-bottom: 1.5rem;">This course is designed according to university-standard computer science pedagogy (MIT, Stanford, CMU, and Berkeley curricula). All lesson modules, interactive simulators, coding tasks, and assessments are open and accessible for free on PrepSpaces without requiring paid paywalls.</p>
            </article>

            <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/learning/ai" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Start Learning AI &rarr;</a>
              <a href="/courses/generative-ai" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">Explore Generative AI Course &rarr;</a>
              <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">All Courses</a>
            </nav>
          </main>
        </div>
      </div>`;
  } else if (isGenAiCourse) {
    semanticContent = `<div id="root">
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
          <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
            <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
            <a href="/learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Curriculum</a> &rarr; 
            <span style="color: #1c1917; font-weight: 600;">Generative AI Course</span>
          </nav>
          <header style="margin-bottom: 2rem;">
            <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">Production Generative AI • LLMs & Agents</span>
            <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">Generative AI Course — Learn GenAI & LLMs</h1>
            <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
          </header>
          <main>
            <article style="background: white; border: 1px solid #e7e3da; border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <h2 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.75rem; color: #18181b;">Mastering Generative AI & Large Language Models</h2>
              <div style="background-color: #fbf9f4; border-left: 4px solid #f97316; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
                <p style="font-size: 0.95rem; line-height: 1.6; color: #292524; margin: 0;"><strong>Direct Course Definition:</strong> Advanced engineering masterclass covering modern transformer architectures, large language models (GPT, Llama, Qwen), LoRA and QLoRA fine-tuning, prompt engineering, embeddings and vector databases (pgvector/Pinecone), RAG architectures, autonomous AI agents, and production AI serving.</p>
              </div>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Generative AI Core Modules</h3>
              <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><strong><a href="/learning/ai/transformers" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 6: Transformer Architecture from Scratch</a></strong> — Multi-head self-attention, positional encodings, and encoder-decoder mechanisms in PyTorch.</li>
                <li><strong><a href="/learning/ai/llms" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 7: Large Language Models (LLMs)</a></strong> — GPT, Llama, Qwen architectures, KV caching, tokenization, and quantization.</li>
                <li><strong><a href="/learning/ai/fine-tuning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 8: LLM Training & Fine-Tuning</a></strong> — Supervised fine-tuning (SFT), LoRA rank decomposition, and QLoRA 4-bit NF4 training.</li>
                <li><strong><a href="/learning/ai/prompt-engineering" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 9: Prompt Engineering & Structured Outputs</a></strong> — Chain-of-Thought, JSON Schema generation, and prompt defense.</li>
                <li><strong><a href="/learning/ai/vector-databases" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 10: Vector Databases & Embeddings</a></strong> — Dense vector retrieval, HNSW indexing, and semantic search.</li>
                <li><strong><a href="/learning/ai/rag-architecture" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 11: Retrieval-Augmented Generation (RAG)</a></strong> — Chunking strategies, hybrid search, reranking, and hallucination reduction.</li>
                <li><strong><a href="/learning/ai/ai-agents" style="color: #ea580c; text-decoration: none; font-weight: 600;">Module 13: AI Agents & Tool Calling</a></strong> — ReAct reasoning loops, function calling APIs, and autonomous task execution.</li>
              </ul>

              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Interactive Practice & Production Systems</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #44403c; margin-bottom: 1.5rem;">Includes hands-on browser simulators, terminal labs, code builders, and production deployment scenarios with vLLM, Ollama, and Triton inference servers.</p>
            </article>

            <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/learning/ai/transformers" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Start Generative AI &rarr;</a>
              <a href="/courses/artificial-intelligence" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">Artificial Intelligence Course &rarr;</a>
              <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">All Courses</a>
            </nav>
          </main>
        </div>
      </div>`;
  } else if (isCurriculumHub) {
    semanticContent = `<div id="root">
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
          <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
            <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
            <span style="color: #1c1917; font-weight: 600;">Technical Curriculum</span>
          </nav>
          <header style="margin-bottom: 2rem;">
            <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">Open University-Informed Engineering</span>
            <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">Systems Engineering Curriculum & Masterclasses</h1>
            <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
          </header>
          <main>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/courses/data-engineering" style="color: #ea580c; text-decoration: none;">Data Engineering Master Course</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">Data pipelines, OLTP vs OLAP, batch & stream processing, ETL/ELT, data warehouses, data lakes, modern lakehouses (Iceberg/Delta Lake), and data quality.</p>
                <a href="/courses/data-engineering" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore Curriculum &rarr;</a>
              </div>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/courses/blockchain" style="color: #ea580c; text-decoration: none;">Blockchain Development & Web3 Engineering</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">24 Modules: Cryptography, Bitcoin, Ethereum EVM, Solidity, smart contract security, DeFi protocols, Layer 2 rollups, Chainlink oracles, Hyperledger Fabric, and Solana Rust.</p>
                <a href="/courses/blockchain" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 24 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/ai" style="color: #ea580c; text-decoration: none;">AI Engineering & Generative AI</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">24 Modules: Artificial intelligence foundations, Python for AI, NumPy vectorization, Pandas, deep learning, LLMs, RAG, and production agents.</p>
                <a href="/learning/ai" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 24 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/system-design" style="color: #ea580c; text-decoration: none;">System Design Masterclass</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">24 Modules: Large-scale distributed systems, high availability, database replication, microservices, consensus, traffic control, and architectural trade-offs.</p>
                <a href="/learning/system-design" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 24 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/cloud" style="color: #ea580c; text-decoration: none;">Cloud Computing Architecture</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">13 Modules: Enterprise public cloud architecture across AWS, Azure, and Google Cloud, covering VPC networking, serverless compute, storage, and databases.</p>
                <a href="/learning/cloud" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 13 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/devops/linux" style="color: #ea580c; text-decoration: none;">DevOps & SRE Track</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">12 Modules: Production infrastructure, Linux administration, Docker containers, Kubernetes cluster management, Terraform IaC, and CI/CD pipelines.</p>
                <a href="/learning/devops/linux" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 12 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/os" style="color: #ea580c; text-decoration: none;">Operating Systems Master Course</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">24 Modules: University-informed systems engineering (MIT, Stanford, CMU). Kernel architecture, CPU scheduling, virtual memory, concurrency, and file systems.</p>
                <a href="/learning/os" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 24 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/networks" style="color: #ea580c; text-decoration: none;">Computer Networks & Internet</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">24 Modules: University-level networking (MIT, Stanford, Berkeley). Physical transmission, Ethernet, IPv4/IPv6, BGP routing, TCP/UDP sockets, and DNS.</p>
                <a href="/learning/networks" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 24 Modules &rarr;</a>
              </div>
              <div style="background: white; border: 1px solid #e7e3da; border-radius: 1.25rem; padding: 1.5rem;">
                <h2 style="font-size: 1.15rem; font-weight: 700; color: #18181b; margin-bottom: 0.5rem;"><a href="/learning/cybersecurity" style="color: #ea580c; text-decoration: none;">Cybersecurity Masterclass</a></h2>
                <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">24 Modules: Offensive and defensive cybersecurity engineering. Threat modeling (STRIDE), scoping, vulnerability assessment, OWASP Top 10, SIEM, and defense.</p>
                <a href="/learning/cybersecurity" style="font-size: 0.875rem; font-weight: 700; color: #ea580c; text-decoration: none;">Explore 24 Modules &rarr;</a>
              </div>
            </div>
            <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">PrepSpaces Home</a>
              <a href="https://www.instagram.com/prepspaces/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #c2410c; background-color: #fff7ed; border: 1px solid #fed7aa; border-radius: 0.75rem; text-decoration: none;">Follow @prepspaces on Instagram</a>
            </nav>
          </main>
        </div>
      </div>`;
  } else if (isInterview) {
    semanticContent = `<div id="root">
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 48rem; margin: 4rem auto; padding: 2rem 1.5rem; text-align: center; color: #1c1917;">
          <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">AI Technical Interview Practice</h1>
          <p style="font-size: 1rem; color: #57534e; margin-bottom: 2rem;">Interactive mock interview simulations with real-time speech and design feedback. Coming soon to PrepSpaces.</p>
          <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Explore Technical Curriculum &rarr;</a>
        </div>
      </div>`;
  } else {
    semanticContent = `<div id="root">
      <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
        <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
          <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
          <a href="/learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Curriculum</a> &rarr; 
          <span style="color: #ea580c; font-weight: 600;">${trackName}</span> &rarr;
          <span style="color: #1c1917; font-weight: 600;">${cleanTitle}</span>
        </nav>

        <header style="margin-bottom: 2rem;">
          <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">${trackName} • Interactive Module</span>
          <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">${cleanTitle}</h1>
          <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
        </header>

        <main>
          <!-- Answer Engine Optimization (AEO) Direct Concept Block -->
          <article style="background: white; border: 1px solid #e7e3da; border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #18181b;">Concept Overview & Direct Technical Answer</h2>
            <div style="background-color: #fbf9f4; border-left: 4px solid #f97316; padding: 1rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
              <p style="font-size: 0.95rem; line-height: 1.6; color: #292524; margin: 0;"><strong>Direct Definition:</strong> ${meta.description}</p>
            </div>

            <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Core Engineering Competencies</h3>
            <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
              <li><strong>Theoretical Foundations:</strong> University-informed computer science and systems principles.</li>
              <li><strong>Architectural Trade-Offs:</strong> High availability, latency vs throughput, consistency, and failure modes.</li>
              <li><strong>Hands-On Verification:</strong> Interactive inspection labs, terminal simulation, and state diagnostics.</li>
              <li><strong>Production Design Patterns:</strong> Industry standards based on large-scale infrastructure deployments.</li>
            </ul>

            <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: #18181b;">Source & Citation Reference</h3>
            <p style="font-size: 0.875rem; color: #78716c; line-height: 1.5;">
              Published by <strong>PrepSpaces</strong> (Technical Learning Platform). Canonical URL: <a href="${meta.canonical}" style="color: #ea580c; text-decoration: underline;">${meta.canonical}</a>. Free, open curriculum for software engineers, systems practitioners, and interview candidates.
            </p>
          </article>

          <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Explore Curriculum Hub</a>
            <a href="/" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">PrepSpaces Home</a>
            <a href="https://www.instagram.com/prepspaces/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #c2410c; background-color: #fff7ed; border: 1px solid #fed7aa; border-radius: 0.75rem; text-decoration: none;">Follow @prepspaces on Instagram</a>
          </nav>
        </main>
      </div>
    </div>`;
  }

  html = html.replace('<div id="root"></div>', semanticContent);

  fs.writeFileSync(targetFile, html, "utf8");
  generatedCount++;
}

// Clean up any subfolder index.html files again after writing flat files
removeSubfolderIndexHtml(distDir);

// 9. Sync llms.txt and llms-full.txt to dist/
const publicDir = path.resolve(projectRoot, "public");
['llms.txt', 'llms-full.txt'].forEach(file => {
  const src = path.resolve(publicDir, file);
  const dest = path.resolve(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Synced ${file} to dist/`);
  }
});

console.log(`Successfully prerendered ${generatedCount} static pages with unique metadata, AEO blocks, and semantic HTML into dist/.`);
