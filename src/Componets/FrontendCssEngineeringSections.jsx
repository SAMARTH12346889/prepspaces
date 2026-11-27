import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-03.json";

export default function FrontendCssEngineeringSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
