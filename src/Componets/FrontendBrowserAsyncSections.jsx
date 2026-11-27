import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-06.json";

export default function FrontendBrowserAsyncSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
