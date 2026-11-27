import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-01.json";

export default function FrontendWebArchitectureSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
