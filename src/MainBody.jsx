import React from "react";
import { Education } from "./LifePath/Education";
import { WorkExperience } from "./LifePath/WorkExperience";
import { Language } from "./LifePath/Language";
import { Project } from "./Project/Project";
import TechSkill from "./LifePath/TechSkill";

export const MainBody = () => {
  return (
    <div>
      <Education />
      <WorkExperience />
      <Language />
      <TechSkill />
      <Project />
    </div>
  );
};
