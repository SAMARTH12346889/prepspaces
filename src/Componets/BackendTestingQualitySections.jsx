import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-08.json";

export default function BackendTestingQualitySections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
