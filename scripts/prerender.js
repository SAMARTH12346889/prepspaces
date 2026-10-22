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
const routeRegex = /"([^"]+)":\s*\{\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*canonical:\s*`\$\{BASE_URL\}([^`]*)`(?:\s*,\s*robots:\s*"([^"]+)")?/g;

let match;
while ((match = routeRegex.exec(block)) !== null) {
  routeMeta[match[1]] = {
    title: match[2],
    description: match[3],
    canonical: `${BASE_URL}${match[4]}`,
    robots: match[5] || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  };
}

console.log(`Loaded ${Object.keys(routeMeta).length} route definitions for prerendering.`);

let generatedCount = 0;

for (const [route, meta] of Object.entries(routeMeta)) {
  // Skip root '/' since dist/index.html is already the root
  if (route === "/" || route === "") continue;

  const cleanRoute = route.replace(/^\/+/, "");
  const targetDir = path.resolve(distDir, cleanRoute);
  fs.mkdirSync(targetDir, { recursive: true });

  const targetFile = path.resolve(targetDir, "index.html");

  const cleanTitle = meta.title.split("—")[0].split("|")[0].trim();
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
    "provider": {
      "@type": "Organization",
      "name": "PrepSpaces",
      "sameAs": "https://prepspaces.com",
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

  // 7. Inject Structured Data JSON-LD
  const schemaTags = `
    <!-- Structured Data (Prerendered) -->
    <script type="application/ld+json" id="jsonld-breadcrumbs">${breadcrumbsJsonLd}</script>
    <script type="application/ld+json" id="jsonld-course">${courseJsonLd}</script>
  </head>`;
  html = html.replace('</head>', schemaTags);

  // 8. Inject Semantic Content inside <div id="root"></div> for zero-JS crawlers
  const semanticContent = `<div id="root">
      <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 80rem; margin: 0 auto; padding: 2rem 1.5rem; color: #1c1917; background-color: #f6f4ee;">
        <nav aria-label="Breadcrumbs" style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #78716c;">
          <a href="/" style="color: #ea580c; text-decoration: none; font-weight: 600;">Home</a> &rarr; 
          <a href="/learning" style="color: #ea580c; text-decoration: none; font-weight: 600;">Curriculum</a> &rarr; 
          <span style="color: #1c1917; font-weight: 600;">${cleanTitle}</span>
        </nav>
        <header style="margin-bottom: 2rem;">
          <span style="display: inline-block; padding: 0.35rem 0.85rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #c2410c; background-color: #ffedd5; border: 1px solid #fed7aa; border-radius: 9999px; margin-bottom: 1rem;">Interactive Learning Module</span>
          <h1 style="font-size: 2.25rem; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #18181b;">${cleanTitle}</h1>
          <p style="font-size: 1.125rem; line-height: 1.6; color: #44403c; max-width: 56rem;">${meta.description}</p>
        </header>
        <main>
          <section style="background: white; border: 1px solid #e7e3da; border-radius: 1.5rem; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: #18181b;">Curriculum Foundations & Technical Scope</h2>
            <p style="line-height: 1.6; color: #57534e; margin-bottom: 1.25rem;">This module provides university-informed, production-grade systems engineering instruction covering theoretical foundations, architecture trade-offs, interactive inspection labs, and verified implementation patterns.</p>
            <ul style="line-height: 1.8; color: #44403c; padding-left: 1.5rem; margin-bottom: 1.5rem;">
              <li>In-depth conceptual architecture and system trade-offs</li>
              <li>Hands-on interactive lab exercises and diagnostic simulations</li>
              <li>Production-grade design patterns and failure mode mitigation</li>
              <li>Assessment rubrics, review questions, and verification tests</li>
            </ul>
          </section>
          <nav style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/learning" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: white; background-color: #f97316; border-radius: 0.75rem; text-decoration: none;">Explore Full Curriculum</a>
            <a href="/" style="display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #44403c; background-color: white; border: 1px solid #e7e3da; border-radius: 0.75rem; text-decoration: none;">PrepSpaces Home</a>
          </nav>
        </main>
      </div>
    </div>`;

  html = html.replace('<div id="root"></div>', semanticContent);

  fs.writeFileSync(targetFile, html, "utf8");
  generatedCount++;
}

console.log(`Successfully prerendered ${generatedCount} static pages with unique metadata and semantic HTML into dist/.`);
