import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/frontend-curriculum/module-08.json";

export default function FrontendReactFundamentalsSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
