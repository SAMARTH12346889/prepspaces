import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-11.json";

export default function BackendCapstoneSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
