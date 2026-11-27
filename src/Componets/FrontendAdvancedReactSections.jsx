import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-09.json";

export default function FrontendAdvancedReactSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
