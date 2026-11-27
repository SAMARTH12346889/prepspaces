import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-03.json";

export default function BackendSpringBootSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
