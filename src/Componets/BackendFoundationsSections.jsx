import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-01.json";

export default function BackendFoundationsSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
