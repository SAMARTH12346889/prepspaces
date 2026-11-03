import { Hono } from "hono";
import {
  getUserByEmail,
  getUserById,
  saveUser,
  saveSession,
  getSession,
  deleteSession,
  normalizeEmail,
} from "../services/storageService.js";

export const authRouter = new Hono();

const GOOGLE_CLIENT_ID_FALLBACK =
  "929583128715-vha62ek3tmooka7n67dhff3r77na4e0l.apps.googleusercontent.com";

/**
 * Web Crypto SHA-256 password hashing with unique salt
 */
async function hashPassword(password, salt = crypto.randomUUID()) {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${password}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return { hash: hashHex, salt };
}

async function verifyPassword(password, salt, expectedHash) {
  const { hash } = await hashPassword(password, salt);
  return hash === expectedHash;
}

/**
 * Generates an opaque, cryptographically secure bearer token
 */
function generateToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const randomHex = Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
  return `pps_${randomHex}`;
}

/**
 * 1. Google Authentication Endpoint
 * POST /api/auth/google
 * Body: { credential } or { idToken }
 */
authRouter.post("/google", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const credential = body.credential || body.idToken;

    if (!credential || typeof credential !== "string") {
      return c.json(
        { error: "Bad Request", message: "Google ID token credential is required." },
        400
      );
    }

    const expectedClientId = c.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID_FALLBACK;

    // Verify token with Google's public tokeninfo service
    const googleRes = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`
    );

    if (!googleRes.ok) {
      const errDetail = await googleRes.text().catch(() => "");
      console.error("[Google Auth] Token verification failed:", googleRes.status, errDetail);
      return c.json(
        { error: "Unauthorized", message: "Invalid or expired Google credential." },
        401
      );
    }

    const payload = await googleRes.json();

    // Verify audience
    if (payload.aud !== expectedClientId) {
      console.error("[Google Auth] Audience mismatch:", payload.aud, "expected:", expectedClientId);
      return c.json(
        { error: "Unauthorized", message: "Google ID token audience mismatch." },
        401
      );
    }

    const email = normalizeEmail(payload.email);
    if (!email) {
      return c.json(
        { error: "Bad Request", message: "Email not provided by Google account." },
        400
      );
    }

    const googleId = payload.sub;
    const name = payload.name || payload.given_name || email.split("@")[0] || "Student";
    const picture = payload.picture || "";

    // Check if user already exists
    let user = await getUserByEmail(email, c.env);

    if (user) {
      // Update Google metadata without overwriting password or other providers
      user.googleId = googleId;
      if (picture && !user.picture) user.picture = picture;
      if (!user.name || user.name === "Student") user.name = name;
      user.lastLoginAt = new Date().toISOString();
      await saveUser(user, c.env);
    } else {
      // Create new user account
      user = {
        id: `usr_${crypto.randomUUID()}`,
        email,
        name,
        picture,
        authProvider: "google",
        googleId,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      };
      await saveUser(user, c.env);
    }

    // Create session token
    const token = generateToken();
    await saveSession(
      token,
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        createdAt: new Date().toISOString(),
      },
      c.env
    );

    // Sanitized user object (no internal secrets)
    const sanitizedUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      authProvider: user.authProvider,
      createdAt: user.createdAt,
    };

    return c.json({
      success: true,
      token,
      user: sanitizedUser,
    });
  } catch (error) {
    console.error("[Auth Google] Exception:", error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to authenticate with Google." },
      500
    );
  }
});

/**
 * 2. Email / Password Registration Endpoint
 * POST /api/auth/register
 * Body: { name, email, password }
 */
authRouter.post("/register", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const { name, email, password } = body;

    const normEmail = normalizeEmail(email);

    if (!normEmail || !normEmail.includes("@")) {
      return c.json(
        { error: "Bad Request", message: "A valid email address is required." },
        400
      );
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return c.json(
        { error: "Bad Request", message: "Password must be at least 6 characters long." },
        400
      );
    }

    // Check if account already exists
    const existing = await getUserByEmail(normEmail, c.env);
    if (existing) {
      return c.json(
        {
          error: "Conflict",
          message: "An account with this email already exists. Please sign in or use Google.",
        },
        409
      );
    }

    const { hash, salt } = await hashPassword(password);

    const user = {
      id: `usr_${crypto.randomUUID()}`,
      email: normEmail,
      name: (name && String(name).trim()) || normEmail.split("@")[0] || "Student",
      picture: "",
      authProvider: "email",
      passwordHash: hash,
      passwordSalt: salt,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    };

    await saveUser(user, c.env);

    const token = generateToken();
    await saveSession(
      token,
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        createdAt: new Date().toISOString(),
      },
      c.env
    );

    const sanitizedUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      authProvider: user.authProvider,
      createdAt: user.createdAt,
    };

    return c.json({
      success: true,
      token,
      user: sanitizedUser,
    });
  } catch (error) {
    console.error("[Auth Register] Exception:", error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to register account." },
      500
    );
  }
});

/**
 * 3. Email / Password Login Endpoint
 * POST /api/auth/login
 * Body: { email, password }
 */
authRouter.post("/login", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const { email, password } = body;

    const normEmail = normalizeEmail(email);

    if (!normEmail || !password) {
      return c.json(
        { error: "Bad Request", message: "Email and password are required." },
        400
      );
    }

    const user = await getUserByEmail(normEmail, c.env);
    if (!user) {
      return c.json(
        { error: "Unauthorized", message: "Invalid email or password." },
        401
      );
    }

    // Handle user that only has Google login (no password set)
    if (!user.passwordHash || !user.passwordSalt) {
      return c.json(
        {
          error: "Unauthorized",
          message: "This account was created with Google. Please use 'Continue with Google'.",
        },
        401
      );
    }

    const valid = await verifyPassword(password, user.passwordSalt, user.passwordHash);
    if (!valid) {
      return c.json(
        { error: "Unauthorized", message: "Invalid email or password." },
        401
      );
    }

    user.lastLoginAt = new Date().toISOString();
    await saveUser(user, c.env);

    const token = generateToken();
    await saveSession(
      token,
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        createdAt: new Date().toISOString(),
      },
      c.env
    );

    const sanitizedUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      authProvider: user.authProvider,
      createdAt: user.createdAt,
    };

    return c.json({
      success: true,
      token,
      user: sanitizedUser,
    });
  } catch (error) {
    console.error("[Auth Login] Exception:", error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to authenticate." },
      500
    );
  }
});

/**
 * 4. Get Current User Profile
 * GET /api/auth/me
 */
authRouter.get("/me", async (c) => {
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (!token) {
    return c.json({ error: "Unauthorized", message: "Authentication token required." }, 401);
  }

  const session = await getSession(token, c.env);
  if (!session?.userId) {
    return c.json({ error: "Unauthorized", message: "Session expired or invalid." }, 401);
  }

  const user = await getUserById(session.userId, c.env);
  if (!user) {
    return c.json({ error: "Not Found", message: "User not found." }, 404);
  }

  return c.json({
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      authProvider: user.authProvider,
      createdAt: user.createdAt,
    },
  });
});

/**
 * 5. Logout Endpoint
 * POST /api/auth/logout
 */
authRouter.post("/logout", async (c) => {
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (token) {
    await deleteSession(token, c.env);
  }

  return c.json({ success: true, message: "Logged out successfully." });
});
