import React from "react";

export const UNLOCK_UPDATED_EVENT = "prepspaces_unlock_updated";

/**
 * CourseAccessGuard:
 * Unrestricted pass-through for all course modules.
 */
export default function CourseAccessGuard({ children }) {
  return children;
}
