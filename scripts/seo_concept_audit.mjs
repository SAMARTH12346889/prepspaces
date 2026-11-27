import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONCEPT_CATEGORIES, ALL_CONCEPTS } from "../src/data/conceptsIndex.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function readJsonSafe(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function countLessonsInDir(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let total = 0;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      total += countLessonsInDir(full);
    } else if (entry.name.endsWith(".json")) {
      const data = readJsonSafe(full);
      if (Array.isArray(data?.lessons)) total += data.lessons.length;
      else if (Array.isArray(data)) total += data.length;
    }
  }
  return total;
}

const coursesData = readJsonSafe(path.join(rootDir, "backend/content/courses.json"));
const courses = Array.isArray(coursesData?.courses)
  ? coursesData.courses
  : Array.isArray(coursesData)
  ? coursesData
  : [];

const courseSummary = courses.map((course) => {
  const courseId = course.id || course.slug;
  const modulesFile = path.join(rootDir, "backend/content", courseId, "modules.json");
  const modulesData = readJsonSafe(modulesFile);
  const modulesList = Array.isArray(modulesData?.modules)
    ? modulesData.modules
    : Array.isArray(modulesData)
    ? modulesData
    : [];

  let lessonCount = modulesList.reduce((acc, m) => {
    if (Array.isArray(m.lessons)) return acc + m.lessons.length;
    if (typeof m.lessonsCount === "number") return acc + m.lessonsCount;
    if (typeof m.lessonCount === "number") return acc + m.lessonCount;
    return acc;
  }, 0);

  if (lessonCount === 0) {
    lessonCount = countLessonsInDir(path.join(rootDir, "backend/content", courseId));
  }

  // Also check src/data/*-curriculum for frontend/backend/etc.
  const srcCurriculumDirs = [
    path.join(rootDir, "src/data", `${courseId}-curriculum`),
    path.join(rootDir, "src/data", `${courseId.replace("-engineering", "")}-curriculum`),
  ];
  for (const dir of srcCurriculumDirs) {
    const srcCount = countLessonsInDir(dir);
    if (srcCount > lessonCount) lessonCount = srcCount;
  }

  return {
    id: courseId,
    title: course.title || course.name || courseId,
    moduleCount: modulesList.length,
    lessonCount,
  };
});

// Validate concepts
const routeSet = new Set();
const slugByCatSet = new Set();
const metaTitleSet = new Set();
const descriptionSet = new Set();
const errors = [];

for (const c of ALL_CONCEPTS) {
  if (!c.slug || !c.category || !c.title || !c.metaTitle || !c.description || !c.directAnswer) {
    errors.push(`Missing required SEO fields on concept: ${c.category}/${c.slug}`);
  }
  if (!Array.isArray(c.sections) || c.sections.length === 0) {
    errors.push(`Missing sections on concept: ${c.category}/${c.slug}`);
  }
  if (!c.relatedCourse?.route) {
    errors.push(`Missing relatedCourse.route on concept: ${c.category}/${c.slug}`);
  }
  if (!Array.isArray(c.relatedModules) || c.relatedModules.length === 0) {
    errors.push(`Missing relatedModules on concept: ${c.category}/${c.slug}`);
  }

  if (routeSet.has(c.route)) {
    errors.push(`Duplicate route: ${c.route}`);
  }
  routeSet.add(c.route);

  const key = `${c.category}:${c.slug}`;
  if (slugByCatSet.has(key)) {
    errors.push(`Duplicate category/slug: ${key}`);
  }
  slugByCatSet.add(key);

  if (metaTitleSet.has(c.metaTitle)) {
    errors.push(`Duplicate metaTitle: "${c.metaTitle}" (${c.route})`);
  }
  metaTitleSet.add(c.metaTitle);

  if (descriptionSet.has(c.description)) {
    errors.push(`Duplicate description on: ${c.route}`);
  }
  descriptionSet.add(c.description);
}

const categoryCounts = CONCEPT_CATEGORIES.map((cat) => ({
  id: cat.id,
  title: cat.title,
  companionCourse: cat.companionCourse?.route || null,
  conceptCount: ALL_CONCEPTS.filter((c) => c.category === cat.id).length,
}));

const totalModules = courseSummary.reduce((sum, c) => sum + c.moduleCount, 0);
const totalLessons = courseSummary.reduce((sum, c) => sum + c.lessonCount, 0);

const inventory = {
  generatedAt: new Date().toISOString(),
  totals: {
    courses: courseSummary.length,
    modules: totalModules,
    lessonsScanned: totalLessons,
    conceptCategories: CONCEPT_CATEGORIES.length,
    uniqueConcepts: ALL_CONCEPTS.length,
    totalConceptHubAndDetailUrls: CONCEPT_CATEGORIES.length + ALL_CONCEPTS.length + 1, // +1 for /concepts
  },
  courses: courseSummary,
  conceptCategories: categoryCounts,
  validationErrors: errors,
};

const outPath = path.join(rootDir, "docs/seo-concept-inventory.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(inventory, null, 2), "utf8");

console.log("=== PrepSpaces SEO Concept Audit ===");
console.log(`Courses in catalogue: ${inventory.totals.courses}`);
console.log(`Total modules: ${inventory.totals.modules}`);
console.log(`Total lessons scanned: ${inventory.totals.lessonsScanned}`);
console.log(`Concept categories: ${inventory.totals.conceptCategories}`);
console.log(`Unique concepts: ${inventory.totals.uniqueConcepts}`);
console.log(`Total /concepts URLs (index + hubs + details): ${inventory.totals.totalConceptHubAndDetailUrls}`);
console.log("\nCategory Breakdown:");
for (const cat of categoryCounts) {
  console.log(`  - ${cat.id} (${cat.title}): ${cat.conceptCount} concepts -> ${cat.companionCourse}`);
}
console.log("\nCourse Breakdown:");
for (const c of courseSummary) {
  console.log(`  - ${c.id}: ${c.moduleCount} modules, ${c.lessonCount} lessons`);
}

if (errors.length > 0) {
  console.error("\nValidation Errors:");
  for (const err of errors) console.error(`  [ERR] ${err}`);
  process.exit(1);
} else {
  console.log("\nValidation: 0 errors, 0 duplicates.");
}
