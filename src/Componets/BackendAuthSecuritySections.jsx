import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-05.json";

export default function BackendAuthSecuritySections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
