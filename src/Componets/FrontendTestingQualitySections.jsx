import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-12.json";

export default function FrontendTestingQualitySections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
