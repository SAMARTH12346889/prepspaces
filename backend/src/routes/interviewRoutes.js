import { Hono } from "hono";
import { getSession as getAuthSession } from "../services/storageService.js";
import {
  createSession,
  getSession,
  startSession,
  submitAnswer,
  endSession,
  recordViolation,
} from "../services/interviewService.js";
import { getCoordinatorClient } from "../services/rateLimitAndKeyManager.js";

export const interviewRouter = new Hono();

/**
 * Resolves user from Authorization Bearer token or guest fallback
 */
async function resolveInterviewUser(c) {
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (token) {
    const authSession = await getAuthSession(token, c.env);
    if (authSession?.userId) {
      return {
        userId: authSession.userId,
        user: { name: authSession.name, email: authSession.email },
        isGuest: false,
      };
    }
  }

  const guestId = c.req.header("x-guest-session-id") || `guest_${crypto.randomUUID()}`;
  return {
    userId: guestId,
    user: null,
    isGuest: true,
  };
}

/**
 * System-Wide Metrics & Rate Limit Status Endpoint
 * GET /api/interviews/system-status
 * GET /api/interviews/admin/metrics
 */
const handleSystemStatus = async (c) => {
  try {
    const coordinator = getCoordinatorClient(c.env);
    const metrics = await coordinator.getSystemMetrics();
    return c.json({
      success: true,
      distributedCoordinator: coordinator.isDistributed,
      ...metrics,
    });
  } catch (error) {
    console.error("[InterviewRoutes] System status error:", error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
};

interviewRouter.get("/system-status", handleSystemStatus);
interviewRouter.get("/admin/metrics", handleSystemStatus);

/**
 * 1. Create a new Interview Session
 * POST /api/interviews
 */
interviewRouter.post("/", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const { courseId = "ai-engineering", moduleId = "all", role, candidateId } = body;
    const userContext = await resolveInterviewUser(c);

    const session = await createSession({
      userId: candidateId || userContext.userId,
      user: userContext.user,
      courseId,
      moduleId,
      role: role || "AI Engineering Mock Interview",
      env: c.env,
    });

    return c.json(
      {
        success: true,
        session,
        currentQuestion: session.questions[0] || null,
      },
      201
    );
  } catch (error) {
    console.error("[InterviewRoutes] Create session error:", error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 2. Get an existing Interview Session
 * GET /api/interviews/:id
 */
interviewRouter.get("/:id", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const session = await getSession(sessionId, c.env);
    if (!session) {
      return c.json({ error: "Not Found", message: "Interview session not found" }, 404);
    }

    const currentIdx = session.currentQuestionIndex || 0;
    const currentQ = session.questions[currentIdx] || null;

    return c.json({
      success: true,
      session,
      currentQuestion: currentQ,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Get session '${sessionId}' error:`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 3. Start the interview session (Centralized slot allocation & FIFO waiting queue)
 * POST /api/interviews/:id/start
 */
interviewRouter.post("/:id/start", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const session = await getSession(sessionId, c.env);
    if (!session) {
      return c.json({ error: "Not Found", message: "Interview session not found" }, 404);
    }

    // Request an interview slot through Distributed Coordinator (Durable Object in Cloudflare)
    const coordinator = getCoordinatorClient(c.env);
    const slotResult = await coordinator.requestInterviewSlot({
      sessionId,
      candidateId: session.userId,
      user: session.user,
      courseId: session.courseId,
      moduleId: session.moduleId,
    });

    if (slotResult.status === "QUEUE_FULL") {
      return c.json(
        {
          success: false,
          status: "QUEUE_FULL",
          message: slotResult.message,
          activeCount: slotResult.activeCount,
          queueCount: slotResult.queueCount,
        },
        429
      );
    }

    if (slotResult.status === "QUEUED") {
      return c.json({
        success: true,
        status: "QUEUED",
        queuePosition: slotResult.queuePosition,
        queueTotal: slotResult.queueTotal,
        estimatedWaitSeconds: slotResult.estimatedWaitSeconds,
        message: slotResult.message,
      });
    }

    // slotResult.status === "ADMITTED"
    const started = await startSession(sessionId, c.env, {
      slotId: slotResult.slotId,
      assignedKeyIndex: slotResult.assignedKeyIndex,
    });
    return c.json({
      success: true,
      status: "ADMITTED",
      slotId: slotResult.slotId,
      assignedKeyIndex: slotResult.assignedKeyIndex,
      role: slotResult.role,
      session: started,
      currentQuestion: started.questions[started.currentQuestionIndex || 0],
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Start session '${sessionId}' error:`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * Check Queue Status & Auto-Admit Polling Endpoint
 * GET /api/interviews/:id/queue-status
 */
interviewRouter.get("/:id/queue-status", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const coordinator = getCoordinatorClient(c.env);
    const queueStatus = await coordinator.getQueueStatus(sessionId);

    if (queueStatus.status === "ADMITTED") {
      const session = await getSession(sessionId, c.env);
      if (session) {
        let activeSession = session;
        if (session.status !== "ACTIVE" || !session.slotId) {
          activeSession = await startSession(sessionId, c.env, {
            slotId: queueStatus.slotId,
            assignedKeyIndex: queueStatus.assignedKeyIndex,
          });
        }
        return c.json({
          success: true,
          status: "ADMITTED",
          slotId: queueStatus.slotId,
          assignedKeyIndex: queueStatus.assignedKeyIndex,
          session: activeSession,
          currentQuestion: activeSession.questions[activeSession.currentQuestionIndex || 0],
        });
      }
    }

    return c.json({
      success: true,
      ...queueStatus,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Queue status error for '${sessionId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * Active Candidate / Queue Heartbeat Endpoint (prevents abandonment reaping)
 * POST /api/interviews/:id/heartbeat
 */
interviewRouter.post("/:id/heartbeat", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const coordinator = getCoordinatorClient(c.env);
    const hb = await coordinator.heartbeat({ sessionId });
    return c.json({
      success: true,
      ...hb,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Heartbeat error '${sessionId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * Leave Queue / Cancel Waiting
 * POST /api/interviews/:id/leave-queue
 */
interviewRouter.post("/:id/leave-queue", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const coordinator = getCoordinatorClient(c.env);
    const result = await coordinator.releaseInterviewSlot({ sessionId });
    return c.json({
      success: true,
      message: "Session removed from waiting queue.",
      result,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Leave queue error '${sessionId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 4. Submit an answer to the current question
 * POST /api/interviews/:id/answers
 */
interviewRouter.post("/:id/answers", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const body = await c.req.json().catch(() => ({}));
    const {
      questionId,
      transcript,
      inputMode = "voice",
      durationMs,
      slotId,
      assignedKeyIndex,
      allowBackupFallback = false,
    } = body;

    const twoPhaseFallback = c.req.header("x-prepspaces-twophase-fallback") === "1" || Boolean(body.twoPhaseFallback);

    const coordinator = getCoordinatorClient(c.env);
    await coordinator.heartbeat({ sessionId });

    const result = await submitAnswer({
      sessionId,
      questionId,
      transcript: transcript || "",
      inputMode,
      durationMs: Number(durationMs) || 45000,
      slotId,
      assignedKeyIndex,
      twoPhaseFallback,
      allowBackupFallback: Boolean(allowBackupFallback),
      env: c.env,
    });

    if (!result) {
      return c.json({ error: "Not Found", message: "Interview session not found" }, 404);
    }

    if (result.fallbackPending) {
      return c.json(
        {
          success: true,
          fallbackPending: true,
          notificationRequired: true,
          notificationMessage: result.notificationMessage,
          sessionProgressSaved: true,
        },
        202
      );
    }

    return c.json({
      success: true,
      session: result.session,
      nextQuestion: result.nextQuestion,
      evaluation: result.evaluation,
      notificationMessage: result.evaluation?.notificationMessage || null,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Submit answer '${sessionId}' error:`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * Standalone direct answer evaluation using Groq (llama-3.3-70b-versatile)
 * POST /api/interviews/evaluate
 */
interviewRouter.post("/evaluate", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const { question, transcript, inputMode = "voice" } = body;
    const { evaluateAnswer } = await import("../services/aiEvaluationService.js");

    const evaluation = await evaluateAnswer({
      question: question || {},
      transcript: transcript || "",
      inputMode,
      env: c.env,
    });

    return c.json({
      success: true,
      evaluation,
    });
  } catch (error) {
    console.error("[InterviewRoutes] Evaluate standalone answer error:", error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 5. End interview session (User ended or 3-minute timer expired)
 * POST /api/interviews/:id/end
 */
interviewRouter.post("/:id/end", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const body = await c.req.json().catch(() => ({}));
    const { reason = "USER_ENDED", answers = [] } = body;

    const result = await endSession({
      sessionId,
      reason,
      clientAnswers: answers,
      env: c.env,
    });

    if (!result) {
      return c.json({ error: "Not Found", message: "Interview session not found" }, 404);
    }

    // Release active slot and auto-admit next eligible candidate from waiting queue
    let slotReleaseInfo = null;
    try {
      const coordinator = getCoordinatorClient(c.env);
      slotReleaseInfo = await coordinator.releaseInterviewSlot({ sessionId });
    } catch (releaseErr) {
      console.warn(`[InterviewRoutes] Failed to release slot for '${sessionId}':`, releaseErr);
    }

    return c.json({
      success: true,
      session: result.session,
      report: result.report,
      slotRelease: slotReleaseInfo,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] End session '${sessionId}' error:`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 6. Record proctoring violation event (fullscreen exit, ESC key, or blur)
 * POST /api/interviews/:id/violation
 */
interviewRouter.post("/:id/violation", async (c) => {
  const sessionId = c.req.param("id");
  try {
    const body = await c.req.json().catch(() => ({}));
    const { type = "unknown" } = body;

    const result = await recordViolation({
      sessionId,
      violationType: type,
      env: c.env,
    });

    return c.json({
      success: true,
      message: "Violation logged",
      violationsCount: result?.violationsCount || 1,
    });
  } catch (error) {
    console.error(`[InterviewRoutes] Record violation '${sessionId}' error:`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});
