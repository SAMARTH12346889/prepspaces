import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, "..");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  ✗ [FAIL] ${message}`);
    failed++;
  }
}

console.log("\n====================================================");
console.log(" PREPSPACES MARK COMPLETE & GLOBAL LOGOUT AUDIT");
console.log("====================================================\n");

// 1. Verify "Mark Complete" Removal
console.log("SUITE 1: 'Mark Complete' Button Elimination");
const moduleNavPath = path.join(baseDir, "src/Componets/ModuleNav.jsx");
const moduleNavContent = fs.readFileSync(moduleNavPath, "utf8");

assert(!moduleNavContent.includes("Mark Complete"), "ModuleNav.jsx does not contain 'Mark Complete'");
assert(!moduleNavContent.includes("toggleComplete"), "ModuleNav.jsx does not contain toggleComplete handler");
assert(!moduleNavContent.includes("isCurrentCompleted"), "ModuleNav.jsx does not contain isCurrentCompleted state");

// Scan all components to ensure no "Mark Complete" button was left behind in any module
const componentsDir = path.join(baseDir, "src/Componets");
const componentFiles = fs.readdirSync(componentsDir);
let hasStrayMarkComplete = false;
componentFiles.forEach((file) => {
  if (file.endsWith(".jsx")) {
    const code = fs.readFileSync(path.join(componentsDir, file), "utf8");
    if (code.includes('Mark Complete') || code.includes('>Mark Complete<')) {
      hasStrayMarkComplete = true;
      console.error(`Found stray 'Mark Complete' in ${file}`);
    }
  }
});
assert(!hasStrayMarkComplete, "Zero stray 'Mark Complete' buttons found across all course component files");

// 2. Verify ModuleNav.jsx Header Navigation & Logout
console.log("\nSUITE 2: ModuleNav Header Navigation & Logout");
assert(moduleNavContent.includes("useAuth"), "ModuleNav.jsx imports and uses useAuth");
assert(moduleNavContent.includes("LogOut"), "ModuleNav.jsx imports LogOut icon");
assert(moduleNavContent.includes("logout()") || moduleNavContent.includes("onClick={logout}"), "ModuleNav.jsx has clickable Logout button calling logout");
assert(moduleNavContent.includes('to="/dashboard"'), "ModuleNav.jsx has Dashboard link for authenticated students");
assert(moduleNavContent.includes('to="/login"'), "ModuleNav.jsx has Sign In link for unauthenticated visitors");

// 3. Verify Learning.jsx (Courses section) Controls
console.log("\nSUITE 3: Course Catalog (/learning) Navigation & Logout");
const learningPath = path.join(baseDir, "src/Pages/Learning.jsx");
const learningContent = fs.readFileSync(learningPath, "utf8");
assert(learningContent.includes("useAuth"), "Learning.jsx imports and uses useAuth");
assert(/import\s*\{[^}]*User[^}]*\}\s*from\s*["']lucide-react["']/.test(learningContent), "Learning.jsx imports User from lucide-react");
assert(/import\s*\{[^}]*LogOut[^}]*\}\s*from\s*["']lucide-react["']/.test(learningContent), "Learning.jsx imports LogOut from lucide-react");
assert(learningContent.includes("logout()") || learningContent.includes("onClick={logout}"), "Learning.jsx has clickable Logout button calling logout");
assert(learningContent.includes('to="/dashboard"'), "Learning.jsx has Dashboard link for authenticated students");

// 4. Verify Interview Practice Navigation & Logout
console.log("\nSUITE 4: Interview Practice Navigation & Logout");
const interviewComingSoonPath = path.join(baseDir, "src/Pages/InterviewComingSoon.jsx");
const interviewComingSoonContent = fs.readFileSync(interviewComingSoonPath, "utf8");
assert(interviewComingSoonContent.includes("useAuth"), "InterviewComingSoon.jsx imports and uses useAuth");
assert(interviewComingSoonContent.includes("logout()") || interviewComingSoonContent.includes("onClick={logout}"), "InterviewComingSoon.jsx has Logout button calling logout");

const interviewRoomPath = path.join(baseDir, "src/Pages/InterviewRoom.jsx");
const interviewRoomContent = fs.readFileSync(interviewRoomPath, "utf8");
assert(interviewRoomContent.includes("useAuth"), "InterviewRoom.jsx imports and uses useAuth");
assert(interviewRoomContent.includes("logout()") || interviewRoomContent.includes("onClick={logout}"), "InterviewRoom.jsx has Logout button calling logout");

// 4b. Verify Landingpage.jsx Sidebar & Header Dashboard Guard
console.log("\nSUITE 4b: Landingpage.jsx Auth-Guarded Dashboard Controls");
const landingPath = path.join(baseDir, "src/Pages/Landingpage.jsx");
const landingContent = fs.readFileSync(landingPath, "utf8");
assert(landingContent.includes("isAuthenticated && ("), "Landingpage.jsx guards sidebar Dashboard link behind isAuthenticated");
assert(!landingContent.includes('<Link to="/dashboard" onClick={() => setSidebarOpen(false)}'), "Landingpage.jsx does NOT render unconditional sidebar Dashboard link");

// 5. Verify AuthContext.jsx Resilient Logout
console.log("\nSUITE 5: AuthContext Secure Logout Architecture");
const authContextPath = path.join(baseDir, "src/context/AuthContext.jsx");
const authContextContent = fs.readFileSync(authContextPath, "utf8");
assert(authContextContent.includes("clearStoredSession,"), "AuthContext.jsx imports clearStoredSession");
assert(authContextContent.includes("clearStoredSession()"), "AuthContext.jsx executes clearStoredSession() immediately on logout");
assert(authContextContent.includes("localStorage.removeItem(\"prepspaces_auth_token\")"), "AuthContext.jsx removes auth token from localStorage");
assert(authContextContent.includes("localStorage.removeItem(\"prepspaces_auth_user\")"), "AuthContext.jsx removes user session from localStorage");
assert(authContextContent.includes("sessionStorage.clear()"), "AuthContext.jsx clears sessionStorage");
assert(authContextContent.includes("disableAutoSelect"), "AuthContext.jsx calls window.google.accounts.id.disableAutoSelect()");
assert(authContextContent.includes("prepspaces_auth_changed"), "AuthContext.jsx dispatches auth changed event across tabs");
assert(authContextContent.includes("window.location.replace(\"/\")") || authContextContent.includes("window.location.href = \"/\""), "AuthContext.jsx redirects to public landing page (/)");

// 6. Verify Dashboard.jsx Logout Controls & Clean Sidebar
console.log("\nSUITE 6: Dashboard.jsx Logout Controls & Clean Sidebar");
const dashboardPath = path.join(baseDir, "src/Pages/Dashboard.jsx");
const dashboardContent = fs.readFileSync(dashboardPath, "utf8");
const logoutOccurrences = (dashboardContent.match(/logout\(\)/g) || []).length;
assert(logoutOccurrences >= 3, `Dashboard.jsx has ${logoutOccurrences} logout button triggers (sidebar, header, settings)`);
assert(!dashboardContent.includes("Landing Page"), "Dashboard.jsx does NOT contain 'Landing Page' navigation link");

console.log("\n====================================================");
console.log(`TOTAL AUDIT TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log("====================================================\n");

if (failed > 0) process.exit(1);
