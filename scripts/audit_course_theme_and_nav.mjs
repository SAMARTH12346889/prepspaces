import fs from 'fs';
import path from 'path';

const COMP_DIR = path.resolve('projectx/src/Componets');

console.log("====================================================");
console.log("   AUDIT: PREPSPACES THEME & NAV INTEGRITY CHECK    ");
console.log("====================================================");

let failed = false;

// 1. Check shared components: ModuleNav.jsx and Logo.jsx have NO theme branches
const moduleNavCode = fs.readFileSync(path.join(COMP_DIR, 'ModuleNav.jsx'), 'utf8');
const logoCode = fs.readFileSync(path.join(COMP_DIR, 'Logo.jsx'), 'utf8');

if (moduleNavCode.includes('isDark') || moduleNavCode.includes('propDark')) {
  console.error("❌ FAIL: ModuleNav.jsx contains theme branching (isDark / propDark).");
  failed = true;
} else {
  console.log("✅ PASS: ModuleNav.jsx has NO course-specific theme branching.");
}

if (logoCode.includes('dark = false') || logoCode.includes('dark ?')) {
  console.error("❌ FAIL: Logo.jsx contains theme branching.");
  failed = true;
} else {
  console.log("✅ PASS: Logo.jsx has NO theme branching.");
}

// 2. Check all 24 Java modules for:
// - Exactly ONE ModuleNav
// - Root page has cream/white background (#f6f4ee or #fcfbf9), NOT bg-slate-950
// - Container has top padding matching OS course (sm:py-10)
const JAVA_MODULE_FILES = [
  'JavaIntro.jsx',
  'JavaControlFlow.jsx',
  'JavaArraysStrings.jsx',
  'JavaOOP.jsx',
  'JavaAdvanced.jsx',
  'JavaRecursion.jsx',
  'JavaComplexity.jsx',
  'JavaSearchingSorting.jsx',
  'JavaLinkedLists.jsx',
  'JavaStacksQueues.jsx',
  'JavaHashing.jsx',
  'JavaTrees.jsx',
  'JavaHeaps.jsx',
  'JavaSpecializedDS.jsx',
  'JavaTwoPointersSlidingWindow.jsx',
  'JavaGreedyAlgorithms.jsx',
  'JavaGraphTheory.jsx',
  'JavaShortestPathsMST.jsx',
  'JavaDynamicProgramming.jsx',
  'JavaAdvancedDP.jsx',
  'JavaProblemSolvingPatterns.jsx',
  'JavaCollectionsJVM.jsx',
  'JavaInterviewMastery.jsx',
  'JavaCapstone.jsx'
];

console.log("\nAuditing all 24 Java Modules:");
JAVA_MODULE_FILES.forEach((file, idx) => {
  const filePath = path.join(COMP_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ FAIL: File not found: ${file}`);
    failed = true;
    return;
  }
  const code = fs.readFileSync(filePath, 'utf8');

  // Check ModuleNav count
  const navMatches = code.match(/<ModuleNav/g) || [];
  if (navMatches.length !== 1) {
    console.error(`❌ FAIL: ${file} has ${navMatches.length} <ModuleNav> occurrences (expected exactly 1).`);
    failed = true;
  }

  // Check no bg-slate-950 root
  const rootDivMatch = code.match(/<div className="min-h-screen[^"]*"/);
  if (!rootDivMatch) {
    console.error(`❌ FAIL: ${file} missing min-h-screen root div.`);
    failed = true;
  } else {
    const rootClasses = rootDivMatch[0];
    if (rootClasses.includes('bg-slate-950')) {
      console.error(`❌ FAIL: ${file} root is dark (bg-slate-950).`);
      failed = true;
    }
    const hasCream = rootClasses.includes('#f6f4ee') || rootClasses.includes('#fcfbf9');
    if (!hasCream) {
      console.error(`❌ FAIL: ${file} root does not have cream background (#f6f4ee or #fcfbf9).`);
      failed = true;
    }
    if (!rootClasses.includes('sm:py-10')) {
      console.error(`❌ FAIL: ${file} root missing sm:py-10 padding.`);
      failed = true;
    }
  }
});

if (!failed) {
  console.log(`✅ PASS: All 24 Java modules have exactly 1 <ModuleNav>, cream background, and matching top padding.`);
}

// 3. Check section files: exactly 0 ModuleNav
const SECTION_FILES = fs.readdirSync(COMP_DIR).filter(f => f.startsWith('Java') && f.endsWith('Sections.jsx'));
let sectionNavCount = 0;
SECTION_FILES.forEach(f => {
  const code = fs.readFileSync(path.join(COMP_DIR, f), 'utf8');
  const matches = code.match(/<ModuleNav/g) || [];
  if (matches.length > 0) {
    console.error(`❌ FAIL: Section file ${f} has ${matches.length} <ModuleNav> occurrences.`);
    failed = true;
    sectionNavCount += matches.length;
  }
});
if (sectionNavCount === 0) {
  console.log(`✅ PASS: All 24 section files have 0 <ModuleNav> occurrences.`);
}

console.log("====================================================");
if (failed) {
  console.error("❌ AUDIT FAILED WITH ISSUES");
  process.exit(1);
} else {
  console.log("🎉 AUDIT PASSED: ALL CRITERIA SATISFIED");
  process.exit(0);
}
