import React from "react";
import BackendCurriculumRenderer from "./BackendCurriculumRenderer";
import moduleData from "../data/backend-curriculum/module-04.json";

export default function BackendDatabasePersistenceSections() {
  return <BackendCurriculumRenderer data={moduleData} />;
}
