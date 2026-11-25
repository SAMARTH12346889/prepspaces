import fs from "fs";
import { getGroqApiKeys, fetchGroqWithFallback } from "../backend/src/services/groqClient.js";
import { getGroqApiKeys as getFrontendGroqApiKeys } from "../src/services/groqClient.js";

// Load local .dev.vars (simulates Cloudflare Worker Secrets binding env)
function loadDevVarsEnv() {
  const env = {};
  if (fs.existsSync("projectx/backend/.dev.vars")) {
    const lines = fs.readFileSync("projectx/backend/.dev.vars", "utf8").split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq !== -1) {
        env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
      }
    }
  }
  return env;
}

console.log("=== TEST SUITE: 5-KEY GROQ ROTATION & SECURITY POLICY ===\n");

const workerEnv = loadDevVarsEnv();

// 1. Verify Backend Key Loading from Worker Secrets / Env
console.log("1. Checking Backend Key Loading from Worker Secrets Env...");
const backendKeys = getGroqApiKeys(workerEnv);
console.log(`  Loaded ${backendKeys.length} backend keys:`);
backendKeys.forEach((k, idx) => {
  console.log(`    Key #${idx + 1}: ${k.slice(0, 7)}...${k.slice(-4)}`);
});
if (backendKeys.length < 5) {
  throw new Error(`Expected 5 backend keys from env, got ${backendKeys.length}`);
}
console.log("  ✓ Backend loaded all 5 keys from secrets env.\n");

// 2. Verify Frontend Has ZERO Exposed Keys
console.log("2. Verifying Frontend Security Guard (0 keys exposed)...");
const frontendKeys = getFrontendGroqApiKeys();
if (frontendKeys.length !== 0) {
  throw new Error(`Security violation: expected 0 frontend keys, got ${frontendKeys.length}`);
}
console.log("  ✓ Frontend has 0 API keys exposed.\n");

// 3. Test Real API Request against Groq API using backend secrets env
console.log("3. Testing fetchGroqWithFallback against Groq API...");
const res = await fetchGroqWithFallback(
  "https://api.groq.com/openai/v1/models",
  { method: "GET" },
  workerEnv,
  "TestModelList"
);
console.log(`  fetchGroqWithFallback returned status: ${res.status}`);
if (!res.ok) {
  throw new Error(`Groq returned non-200 status: ${res.status}`);
}
const data = await res.json();
console.log(`  ✓ Successfully fetched ${data.data?.length || 0} models via Groq API.\n`);

// 4. Test Simulated Fallback (Key 1 invalid -> Key 2 succeeds)
console.log("4. Testing Simulated Key Fallback (invalid primary -> valid secondary)...");
const simulatedEnv = {
  GROQ_API_KEY_1: "invalid_test_token_1",
  GROQ_API_KEY_2: backendKeys[1],
  GROQ_API_KEY_3: backendKeys[2],
  GROQ_API_KEY_4: backendKeys[3],
  GROQ_API_KEY_5: backendKeys[4],
};
const fallbackRes = await fetchGroqWithFallback(
  "https://api.groq.com/openai/v1/models",
  { method: "GET" },
  simulatedEnv,
  "SimulatedFallbackTest"
);
if (!fallbackRes.ok) {
  throw new Error(`Fallback failed with status ${fallbackRes.status}`);
}
console.log("  ✓ Fallback automatically recovered from invalid Key #1!\n");

// 5. Verify .gitignore protections
console.log("5. Verifying .gitignore protections...");
const projectGitignore = fs.readFileSync("projectx/.gitignore", "utf8");
const backendGitignore = fs.readFileSync("projectx/backend/.gitignore", "utf8");
if (!projectGitignore.includes(".env") || !backendGitignore.includes(".dev.vars")) {
  throw new Error(".env or .dev.vars not properly ignored in .gitignore!");
}
console.log("  ✓ Both .gitignore files properly exclude secrets.\n");

console.log(">>> ALL 5-KEY GROQ ROTATION & SECURITY TESTS PASSED! <<<");
