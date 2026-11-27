import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-05.json";

export default function FrontendModernJsSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
