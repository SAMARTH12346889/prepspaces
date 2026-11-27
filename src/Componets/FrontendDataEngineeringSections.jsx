import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-10.json";

export default function FrontendDataEngineeringSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
