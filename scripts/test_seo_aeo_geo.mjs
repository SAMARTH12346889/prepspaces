import fs from "fs";
import path from "path";
import assert from "assert";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(projectRoot, "dist");

function walkHtml(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walkHtml(full));
    else if (entry.name.endsWith(".html")) results.push(full);
  }
  return results;
}

let passed = 0;
let failed = 0;
function check(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`);
    failed++;
  }
}

console.log("=== SEO / AEO / GEO & SCHEMA VALIDATION SUITE ===\n");

const htmlFiles = walkHtml(distDir);
const titleMap = new Map();
const descMap = new Map();
const canonicalMap = new Map();
let totalJsonLdBlocks = 0;
const jsonLdErrors = [];
const h1Missing = [];

for (const file of htmlFiles) {
  const rel = path.relative(distDir, file).replace(/\\/g, "/");
  const html = fs.readFileSync(file, "utf8");

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/>/);
  const canMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"\s*\/>/);
  const robMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"\s*\/>/);

  if (!titleMatch) throw new Error(`Missing <title> in ${rel}`);
  if (!descMatch) throw new Error(`Missing description in ${rel}`);
  if (!canMatch) throw new Error(`Missing canonical in ${rel}`);
  if (!robMatch) throw new Error(`Missing robots in ${rel}`);

  titleMap.set(titleMatch[1], (titleMap.get(titleMatch[1]) || []).concat(rel));
  descMap.set(descMatch[1], (descMap.get(descMatch[1]) || []).concat(rel));
  canonicalMap.set(canMatch[1], (canonicalMap.get(canMatch[1]) || []).concat(rel));

  const scripts = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  for (const s of scripts) {
    totalJsonLdBlocks++;
    try {
      JSON.parse(s[1]);
    } catch (e) {
      jsonLdErrors.push({ rel, err: e.message });
    }
  }

  if (rel !== "index.html") {
    const h1Count = (html.match(/<h1[\s>]/g) || []).length;
    if (h1Count !== 1) h1Missing.push({ rel, h1Count });
  }
}

check("Prerendered HTML bundle contains 350 pages (264 core/course + 86 Concept Library)", () => {
  assert.strictEqual(htmlFiles.length, 350);
});

check("Every HTML file has valid JSON-LD syntax", () => {
  assert.strictEqual(jsonLdErrors.length, 0, JSON.stringify(jsonLdErrors));
  assert.ok(totalJsonLdBlocks > 600, `Expected > 600 JSON-LD scripts, got ${totalJsonLdBlocks}`);
});

check("Zero duplicate <title>, <meta description>, or canonical URLs across dist", () => {
  const dupTitles = [...titleMap.entries()].filter(([, v]) => v.length > 1);
  const dupDescs = [...descMap.entries()].filter(([, v]) => v.length > 1);
  const dupCans = [...canonicalMap.entries()].filter(([, v]) => v.length > 1);
  assert.strictEqual(dupTitles.length, 0, JSON.stringify(dupTitles));
  assert.strictEqual(dupDescs.length, 0, JSON.stringify(dupDescs));
  assert.strictEqual(dupCans.length, 0, JSON.stringify(dupCans));
});

check("Every non-root prerendered page has exactly 1 semantic <h1>", () => {
  assert.strictEqual(h1Missing.length, 0, JSON.stringify(h1Missing));
});

check("/ai-interview contains SoftwareApplication, FAQPage (8 Qs), WebPage, BreadcrumbList", () => {
  const aiHtml = fs.readFileSync(path.join(distDir, "ai-interview.html"), "utf8");
  const schemas = [...aiHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1])
  );
  const types = schemas.map((s) => s["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("SoftwareApplication"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(!types.includes("Course"), "Must not emit Course schema on /ai-interview");
  const faq = schemas.find((s) => s["@type"] === "FAQPage");
  assert.strictEqual(faq.mainEntity.length, 8);
  assert.ok(!aiHtml.includes("Coming soon to PrepSpaces"));
});

check("/about contains AboutPage and authoritative external citations", () => {
  const aboutHtml = fs.readFileSync(path.join(distDir, "about.html"), "utf8");
  const schemas = [...aboutHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1])
  );
  assert.ok(schemas.some((s) => s["@type"] === "AboutPage"));
  assert.ok(aboutHtml.includes("https://csrc.nist.gov"));
  assert.ok(aboutHtml.includes("https://owasp.org"));
});

check("/guides hub and all 6 guide articles emit CollectionPage / Article + og:type=article", () => {
  const hubHtml = fs.readFileSync(path.join(distDir, "guides.html"), "utf8");
  const hubSchemas = [...hubHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1])
  );
  const coll = hubSchemas.find((s) => s["@type"] === "CollectionPage");
  assert.ok(coll);
  assert.strictEqual(coll.mainEntity.itemListElement.length, 6);

  for (const item of coll.mainEntity.itemListElement) {
    const slugPath = item.url.replace("https://prepspaces.com/", "") + ".html";
    const artHtml = fs.readFileSync(path.join(distDir, slugPath), "utf8");
    assert.ok(artHtml.includes('<meta property="og:type" content="article" />'), `Missing article og:type in ${slugPath}`);
    const artSchemas = [...artHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
      JSON.parse(m[1])
    );
    assert.ok(artSchemas.some((s) => s["@type"] === "Article"), `Missing Article schema in ${slugPath}`);
    assert.ok(!artSchemas.some((s) => s["@type"] === "Course"), `Unexpected Course schema in ${slugPath}`);
  }
});

check("Utility routes (/login, /register, /dashboard, /interview) are noindex and have zero Course schema", () => {
  for (const u of ["login.html", "register.html", "dashboard.html", "interview.html"]) {
    const h = fs.readFileSync(path.join(distDir, u), "utf8");
    assert.ok(h.includes('content="noindex, follow"'), `${u} should be noindex, follow`);
    assert.ok(!h.includes('"@type":"Course"'), `${u} must not emit Course schema`);
  }
  const intHtml = fs.readFileSync(path.join(distDir, "interview.html"), "utf8");
  assert.ok(!intHtml.includes("Coming soon"), "/interview prerender must not claim Coming soon");
});

check("Concept Library hub, 13 category hubs, and 72 concept lessons emit valid crawlable HTML & Article schemas", () => {
  const hubHtml = fs.readFileSync(path.join(distDir, "concepts.html"), "utf8");
  const hubSchemas = [...hubHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1])
  );
  const coll = hubSchemas.find((s) => s["@type"] === "CollectionPage");
  assert.ok(coll);
  assert.strictEqual(coll.mainEntity.itemListElement.length, 13);

  let checkedConcepts = 0;
  for (const catItem of coll.mainEntity.itemListElement) {
    const catFile = catItem.url.replace("https://prepspaces.com/", "") + ".html";
    const catHtml = fs.readFileSync(path.join(distDir, catFile), "utf8");
    const catSchemas = [...catHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
      JSON.parse(m[1])
    );
    const catColl = catSchemas.find((s) => s["@type"] === "CollectionPage");
    assert.ok(catColl, `Missing CollectionPage schema on ${catFile}`);
    assert.ok(catColl.mainEntity.itemListElement.length >= 5, `Expected >= 5 concepts on ${catFile}`);

    for (const cItem of catColl.mainEntity.itemListElement) {
      const cFile = cItem.url.replace("https://prepspaces.com/", "") + ".html";
      const cHtml = fs.readFileSync(path.join(distDir, cFile), "utf8");
      assert.ok(cHtml.includes('<meta property="og:type" content="article" />'), `Missing article og:type on ${cFile}`);
      assert.ok(cHtml.includes("Common Mistakes"), `Missing Common Mistakes section on ${cFile}`);
      assert.ok(cHtml.includes("Interview Questions"), `Missing Interview Questions section on ${cFile}`);
      const cSchemas = [...cHtml.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
        JSON.parse(m[1])
      );
      assert.ok(cSchemas.some((s) => s["@type"] === "Article"), `Missing Article schema on ${cFile}`);
      assert.ok(cSchemas.some((s) => s["@type"] === "BreadcrumbList"), `Missing BreadcrumbList on ${cFile}`);
      assert.ok(!cSchemas.some((s) => s["@type"] === "Course"), `Unexpected Course schema on ${cFile}`);
      checkedConcepts++;
    }
  }
  assert.strictEqual(checkedConcepts, 72);
});

check("sitemap.xml URLs match existing dist files, contain zero noindex/dead/dupes, and include 346 URLs", () => {
  const sm = fs.readFileSync(path.join(distDir, "sitemap.xml"), "utf8");
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.strictEqual(locs.length, 346);
  assert.strictEqual(new Set(locs).size, locs.length);
  assert.ok(locs.includes("https://prepspaces.com/ai-interview"));
  assert.ok(locs.includes("https://prepspaces.com/about"));
  assert.ok(locs.includes("https://prepspaces.com/guides"));
  assert.ok(locs.includes("https://prepspaces.com/concepts"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/java/jvm"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/ai/rag"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/networks/tcp-vs-udp"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/cybersecurity/sql-injection"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/frontend/react-reconciliation-hooks"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/backend/rest-api-design"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/data-engineering/apache-kafka"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/machine-learning/linear-regression"));
  assert.ok(locs.includes("https://prepspaces.com/concepts/blockchain/ethereum-evm-gas"));
  assert.ok(!locs.some((u) => u.includes("/learning/java") || u.includes("/courses/java")), "Dead /java course URLs leaked into sitemap");
  assert.ok(!locs.some((u) => u.endsWith("/login") || u.endsWith("/dashboard") || u.endsWith("/interview")), "Utility noindex routes leaked into sitemap");

  for (const loc of locs) {
    const relPath = loc.replace("https://prepspaces.com", "");
    const targetFile = relPath === "/" ? "index.html" : `${relPath.replace(/^\/+/, "")}.html`;
    assert.ok(fs.existsSync(path.join(distDir, targetFile)), `Missing dist HTML for sitemap URL ${loc} -> ${targetFile}`);
  }
});

check("robots.txt, llms.txt, llms-full.txt, GA4, and BingSiteAuth.xml are valid in dist/", () => {
  const robots = fs.readFileSync(path.join(distDir, "robots.txt"), "utf8");
  assert.ok(robots.includes("Sitemap: https://prepspaces.com/sitemap.xml"));
  assert.ok(robots.includes("User-agent: GPTBot"));
  assert.ok(robots.includes("User-agent: PerplexityBot"));
  const llms = fs.readFileSync(path.join(distDir, "llms.txt"), "utf8");
  assert.ok(llms.includes("https://prepspaces.com/ai-interview"));
  assert.ok(llms.includes("https://prepspaces.com/about"));
  const home = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
  assert.ok(home.includes("G-N10P6557MZ"));
  assert.ok(home.includes("9822CE9C694F06E431B9A5DE85D57C67"));
  assert.ok(fs.existsSync(path.join(distDir, "BingSiteAuth.xml")));
});

console.log(`\n==============================================`);
console.log(`TOTAL: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log(`==============================================`);
if (failed > 0) process.exit(1);
