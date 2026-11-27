import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-09.json";

export default function BackendApiSecuritySections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
