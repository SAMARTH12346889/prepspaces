import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-11.json";

export default function FrontendNextjsArchitectureSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
