import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-06.json";

export default function BackendValidationReliabilitySections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
