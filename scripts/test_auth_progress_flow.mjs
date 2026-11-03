/**
 * PrepSpaces Authentication, Progress Sync, and UI Consistency Test Suite
 */
import { spawn } from 'child_process';
import http from 'http';

const API_BASE = 'https://api.prepspaces.com';
let total = 0;
let passed = 0;
let failed = 0;

function assert(description, condition) {
  total++;
  if (condition) {
    passed++;
    console.log(`  ✓ [PASS] ${description}`);
  } else {
    failed++;
    console.error(`  ✗ [FAIL] ${description}`);
  }
}

async function run() {
  console.log('====================================================');
  console.log(' PREPSPACES AUTH & DATA INTEGRITY VERIFICATION SUITE');
  console.log('====================================================\n');

  // 1. TEST REGISTRATION WITH REAL CRYPTO BACKEND
  console.log('PHASE 1: Authentication & Session Integrity');
  const uniqueEmail = `test_student_${Date.now()}@prepspaces.com`;
  const testPassword = 'SecureStudentPassword!2026';
  const testName = 'Alex Test Scholar';

  const regRes = await fetch(`${API_BASE}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://prepspaces.com' },
    body: JSON.stringify({ name: testName, email: uniqueEmail, password: testPassword }),
  });

  const regData = await regRes.json();
  assert('Registration returns HTTP 200/201', regRes.ok);
  assert('Session token generated with pps_ prefix', regData.token && regData.token.startsWith('pps_'));
  assert('User profile has correct sanitized fields (no password leak)', regData.user && !regData.user.password && !regData.user.salt);
  assert('User has real authProvider "email"', regData.user?.authProvider === 'email');
  assert('User has unique usr_ ID', regData.user?.id && regData.user.id.startsWith('usr_'));

  const token = regData.token;
  const userId = regData.user.id;

  // 2. TEST GET /api/auth/me WITH VALID TOKEN
  const meRes = await fetch(`${API_BASE}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}`, Origin: 'https://prepspaces.com' },
  });
  const meData = await meRes.json();
  assert('GET /api/auth/me returns 200 with valid bearer token', meRes.ok);
  assert('GET /api/auth/me returns matching user ID and email', meData.user?.id === userId && meData.user?.email === uniqueEmail);

  // 3. TEST PROGRESS RECORDING (COMPLETED = TRUE)
  console.log('\nPHASE 2: Course Progress & Completion Toggle Integrity');
  const progAddRes = await fetch(`${API_BASE}/api/progress/operating-systems`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Origin: 'https://prepspaces.com',
    },
    body: JSON.stringify({ moduleId: 'intro', completed: true }),
  });
  const progAddData = await progAddRes.json();
  assert('Marking module complete (completed=true) returns 200', progAddRes.ok);
  assert('Completed module IDs contains "intro"', progAddData.progress?.completedModuleIds?.includes('intro'));

  // Fetch all student progress to verify KV persistence
  const allProgRes = await fetch(`${API_BASE}/api/progress`, {
    headers: { Authorization: `Bearer ${token}`, Origin: 'https://prepspaces.com' },
  });
  const allProgData = await allProgRes.json();
  assert('GET /api/progress returns enrolled courses', allProgRes.ok && Array.isArray(allProgData.courses));
  
  const osCard = allProgData.courses.find((c) => c.courseId === 'operating-systems');
  assert('Operating Systems reflects 1 completed module in summary', osCard && osCard.completedModules === 1);

  // Fetch course specific progress
  const osProgRes = await fetch(`${API_BASE}/api/progress/operating-systems`, {
    headers: { Authorization: `Bearer ${token}`, Origin: 'https://prepspaces.com' },
  });
  const osProgData = await osProgRes.json();
  assert('GET /api/progress/operating-systems contains "intro"', osProgData.progress?.completedModuleIds?.includes('intro'));

  // 4. TEST PROGRESS TOGGLE OFF (COMPLETED = FALSE)
  const progRemoveRes = await fetch(`${API_BASE}/api/progress/operating-systems`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Origin: 'https://prepspaces.com',
    },
    body: JSON.stringify({ moduleId: 'intro', completed: false }),
  });
  const progRemoveData = await progRemoveRes.json();
  assert('Toggling module completion off (completed=false) returns 200', progRemoveRes.ok);
  assert('Module ID "intro" is successfully deleted from completedModuleIds', !progRemoveData.progress?.completedModuleIds?.includes('intro'));

  // Verify KV persistence after removal
  const osProgAfterRes = await fetch(`${API_BASE}/api/progress/operating-systems`, {
    headers: { Authorization: `Bearer ${token}`, Origin: 'https://prepspaces.com' },
  });
  const osProgAfterData = await osProgAfterRes.json();
  assert('KV persistence confirms completion was removed', !osProgAfterData.progress?.completedModuleIds?.includes('intro'));

  // 5. TEST LOGOUT & SESSION INVALIDATION
  console.log('\nPHASE 3: Secure Logout & Session Invalidation');
  const logoutRes = await fetch(`${API_BASE}/api/auth/logout`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, Origin: 'https://prepspaces.com' },
  });
  assert('POST /api/auth/logout returns 200 OK', logoutRes.ok);

  // Verify token is now invalid
  const meAfterLogout = await fetch(`${API_BASE}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}`, Origin: 'https://prepspaces.com' },
  });
  assert('After logout, token is rejected with HTTP 401 Unauthorized', meAfterLogout.status === 401);

  console.log(`\n====================================================`);
  console.log(`RESULTS: ${passed} PASSED | ${failed} FAILED | TOTAL: ${total}`);
  console.log(`====================================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Fatal error running verification suite:', err);
  process.exit(1);
});
