import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-10.json";

export default function BackendProductionObservabilitySections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
