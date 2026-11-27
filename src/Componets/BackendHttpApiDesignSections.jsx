import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-02.json";

export default function BackendHttpApiDesignSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
