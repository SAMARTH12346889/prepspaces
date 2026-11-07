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

  const cleanTitle = meta.title.split("—")[0].split("|")[0].trim();
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

  const courseJsonLd = JSON.stringify({
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
  });

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
  let semanticContent = "";

  if (isAiCourse) {
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
