import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-07.json";

export default function BackendCachingAsyncSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
