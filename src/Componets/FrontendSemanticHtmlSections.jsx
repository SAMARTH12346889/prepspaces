import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-02.json";

export default function FrontendSemanticHtmlSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
