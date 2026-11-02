import { Hono } from "hono";
import {
  getCoursesCatalog,
  getCourseMetadata,
  getCourseModules,
  getModuleContent,
  getModuleQuiz,
  isValidIdentifier,
} from "../services/courseContentService.js";

export const courseRouter = new Hono();

/**
 * 1. List all courses
 * GET /api/courses
 */
courseRouter.get("/", async (c) => {
  try {
    const catalog = await getCoursesCatalog(c.env, c.req.url);
    if (!catalog) {
      return c.json({ error: "Courses catalog not found", status: 404 }, 404);
    }
    return c.json({
      courses: catalog,
      total: catalog.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching courses catalog:", error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 2. Get a specific course
 * GET /api/courses/:courseId
 */
courseRouter.get("/:courseId", async (c) => {
  const courseId = c.req.param("courseId");

  if (!isValidIdentifier(courseId)) {
    return c.json({ error: "Invalid course identifier", courseId, status: 400 }, 400);
  }

  try {
    const course = await getCourseMetadata(courseId, c.env, c.req.url);
    if (!course) {
      return c.json({ error: "Course not found", courseId, status: 404 }, 404);
    }
    return c.json(course);
  } catch (error) {
    console.error(`Error fetching course '${courseId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 3. Get a specific course's modules
 * GET /api/courses/:courseId/modules
 */
courseRouter.get("/:courseId/modules", async (c) => {
  const courseId = c.req.param("courseId");

  if (!isValidIdentifier(courseId)) {
    return c.json({ error: "Invalid course identifier", courseId, status: 400 }, 400);
  }

  try {
    const modules = await getCourseModules(courseId, c.env, c.req.url);
    if (!modules) {
      return c.json({ error: "Course or modules not found", courseId, status: 404 }, 404);
    }
    return c.json({
      courseId,
      modules,
      total: modules.length,
    });
  } catch (error) {
    console.error(`Error fetching modules for course '${courseId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 4. Get a specific module
 * GET /api/courses/:courseId/modules/:moduleId
 */
courseRouter.get("/:courseId/modules/:moduleId", async (c) => {
  const courseId = c.req.param("courseId");
  const moduleId = c.req.param("moduleId");

  if (!isValidIdentifier(courseId) || !isValidIdentifier(moduleId)) {
    return c.json({ error: "Invalid course or module identifier", courseId, moduleId, status: 400 }, 400);
  }

  try {
    const modulePayload = await getModuleContent(courseId, moduleId, c.env, c.req.url);
    if (!modulePayload) {
      return c.json({ error: "Module not found", courseId, moduleId, status: 404 }, 404);
    }
    return c.json(modulePayload);
  } catch (error) {
    console.error(`Error fetching module '${moduleId}' in course '${courseId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});

/**
 * 5. Get quiz and assessment data for a module
 * GET /api/courses/:courseId/modules/:moduleId/quiz
 */
courseRouter.get("/:courseId/modules/:moduleId/quiz", async (c) => {
  const courseId = c.req.param("courseId");
  const moduleId = c.req.param("moduleId");

  if (!isValidIdentifier(courseId) || !isValidIdentifier(moduleId)) {
    return c.json({ error: "Invalid course or module identifier", courseId, moduleId, status: 400 }, 400);
  }

  try {
    const quizPayload = await getModuleQuiz(courseId, moduleId, c.env, c.req.url);
    if (!quizPayload) {
      return c.json({ error: "Module quiz not found", courseId, moduleId, status: 404 }, 404);
    }
    return c.json(quizPayload);
  } catch (error) {
    console.error(`Error fetching quiz for '${moduleId}' in course '${courseId}':`, error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
});
