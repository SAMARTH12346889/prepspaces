import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-07.json";

export default function FrontendTypeScriptSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
