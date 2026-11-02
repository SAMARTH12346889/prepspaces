/**
 * PrepSpaces Comprehensive Platform QA & Test Suite
 * Validates:
 * 1. API Endpoints, Security, Path Traversal & CORS
 * 2. Course Content Integrity across all 121 modules
 * 3. Frontend Route Mapping and React Component Integrity
 * 4. Voice Intelligence System Architecture (150 assertions)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function check(desc, condition) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${desc}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${desc}`);
  }
}

async function runPlatformTests() {
  console.log('====================================================');
  console.log('       PREPSPACES PLATFORM QA & TEST SUITE         ');
  console.log('====================================================\n');

  // ─────────────────────────────────────────────────────────────────
  // TEST SUITE 1: API SECURITY & ENDPOINTS
  // ─────────────────────────────────────────────────────────────────
  console.log('TEST SUITE 1: Backend API Endpoints & Security');
  const apiBase = 'https://api.prepspaces.com';

  try {
    const healthRes = await fetch(`${apiBase}/health`);
    const health = await healthRes.json();
    check('Health endpoint returns 200 OK', healthRes.status === 200);
    check('Health reports status: healthy', health.status === 'healthy');
    check('Health reports environment: production', health.environment === 'production');
    check('Health reports non-negative uptimeMs', typeof health.uptimeMs === 'number' && health.uptimeMs >= 0);

    const catalogRes = await fetch(`${apiBase}/api/courses`);
    const catalog = await catalogRes.json();
    check('Course catalog returns 200 OK', catalogRes.status === 200);
    check('Catalog contains exactly 6 master tracks', Array.isArray(catalog.courses) && catalog.courses.length === 6);

    const osModuleRes = await fetch(`${apiBase}/api/courses/operating-systems/modules/intro`);
    const osMod = await osModuleRes.json();
    check('OS Intro module endpoint returns 200 OK', osModuleRes.status === 200);
    check('OS Intro contains valid quiz questions', Array.isArray(osMod.quiz) && osMod.quiz.length === 8);
    check('OS Intro contains theory sections', Array.isArray(osMod.theorySections) && osMod.theorySections.length > 0);

    // Path traversal security check
    const traversalRes = await fetch(`${apiBase}/api/courses/..%2f..%2fetc/modules`);
    check('Path traversal attempt (../) rejected with HTTP 400', traversalRes.status === 400);

    // Injection security check
    const injectionRes = await fetch(`${apiBase}/api/courses/'%20OR%201=1--/modules`);
    check('SQLi character injection rejected with HTTP 400', injectionRes.status === 400);

    // CORS security check
    const corsEvil = await fetch(`${apiBase}/health`, {
      headers: { Origin: 'https://malicious-origin.com' }
    });
    const evilOrigin = corsEvil.headers.get('access-control-allow-origin');
    check('CORS correctly rejects unauthorized origin', !evilOrigin || evilOrigin === 'null');

    const corsProd = await fetch(`${apiBase}/health`, {
      headers: { Origin: 'https://prepspaces.com' }
    });
    const prodOrigin = corsProd.headers.get('access-control-allow-origin');
    check('CORS correctly allows production origin https://prepspaces.com', prodOrigin === 'https://prepspaces.com');
  } catch (err) {
    check(`API test execution completed without network crash: ${err.message}`, false);
  }

  // ─────────────────────────────────────────────────────────────────
  // TEST SUITE 2: COURSE CONTENT INTEGRITY (ALL 121 MODULES)
  // ─────────────────────────────────────────────────────────────────
  console.log('\nTEST SUITE 2: Course Content Integrity (All 121 Modules)');
  const contentDir = path.join(projectRoot, 'backend/content');
  const expectedCourses = ['operating-systems', 'computer-networks', 'system-design', 'devops', 'cloud', 'cybersecurity'];
  let moduleCount = 0;
  let validModuleCount = 0;
  let totalQuestions = 0;

  for (const c of expectedCourses) {
    const modDir = path.join(contentDir, c, 'modules');
    const files = fs.readdirSync(modDir).filter(f => f.endsWith('.json'));
    moduleCount += files.length;

    for (const f of files) {
      const data = JSON.parse(fs.readFileSync(path.join(modDir, f), 'utf8'));
      const q = Array.isArray(data.quiz) ? data.quiz : (data.quiz?.questions || data.quizQuestions || []);
      const scenarios = Array.isArray(data.scenarios) ? data.scenarios : [];
      totalQuestions += q.length + scenarios.length;
      if (data.id && (data.name || data.title) && (q.length > 0 || scenarios.length > 0)) {
        validModuleCount++;
      }
    }
  }

  check('Exactly 121 course modules exist in backend content', moduleCount === 121);
  check('All 121 modules have valid schema and quiz questions', validModuleCount === 121);
  check('Total quiz questions across all modules >= 900', totalQuestions >= 900);

  // ─────────────────────────────────────────────────────────────────
  // TEST SUITE 3: FRONTEND ROUTE REGISTRATION & ARCHITECTURE
  // ─────────────────────────────────────────────────────────────────
  console.log('\nTEST SUITE 3: Frontend Route Architecture & Registration');
  const appJsx = fs.readFileSync(path.join(projectRoot, 'src/App.jsx'), 'utf8');
  const registeredRoutes = new Set([...appJsx.matchAll(/path=['"]([^'"]+)['"]/g)].map(m => m[1]));

  check('App.jsx registers root / route', registeredRoutes.has('/'));
  check('App.jsx registers /learning catalog route', registeredRoutes.has('/learning'));
  check('App.jsx registers /learning/operating-systems route', registeredRoutes.has('/learning/operating-systems'));
  check('App.jsx registers /learning/operating-systems/intro route', registeredRoutes.has('/learning/operating-systems/intro'));
  check('App.jsx registers /learning/computer-networks route', registeredRoutes.has('/learning/computer-networks'));
  check('App.jsx registers /learning/cybersecurity route', registeredRoutes.has('/learning/cybersecurity'));
  check('App.jsx registers /learning/system-design route', registeredRoutes.has('/learning/system-design'));
  check('App.jsx registers /learning/cloud route', registeredRoutes.has('/learning/cloud'));

  // ─────────────────────────────────────────────────────────────────
  // TEST SUITE 4: VOICE SYSTEM INTELLIGENCE ARCHITECTURE
  // ─────────────────────────────────────────────────────────────────
  console.log('\nTEST SUITE 4: Voice System Intelligence Architecture');
  const voiceTestResult = spawnSync('node', ['src/voice/test_voice_system.js'], {
    cwd: projectRoot,
    encoding: 'utf8'
  });
  check('Voice system test suite passes all 150 assertions', voiceTestResult.status === 0 && voiceTestResult.stdout.includes('150 PASSED, 0 FAILED'));

  // ─────────────────────────────────────────────────────────────────
  // SUMMARY
  // ─────────────────────────────────────────────────────────────────
  console.log('\n====================================================');
  console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
  console.log('====================================================');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runPlatformTests().catch(err => {
  console.error('Test runner fatal error:', err);
  process.exit(1);
});
