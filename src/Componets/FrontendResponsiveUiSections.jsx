import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-04.json";

export default function FrontendResponsiveUiSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
