import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-14.json";

export default function FrontendProductionCapstoneSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
