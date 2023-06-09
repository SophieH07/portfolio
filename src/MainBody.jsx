import React from "react";
import { Education } from "./LifePath/Education";
import { WorkExperience } from "./LifePath/WorkExperience";
import { Language } from "./LifePath/Language";
import { Project } from "./Project/Project";

export const MainBody = () => {
  return (
    <div>
      <div id="background">
        <p>
          I grew up in a little village. Originally when I was in high school I
          wanted to be either a writer or an architect. Not a common
          combination, right? Since the beginning I had a wide range of
          interest. At the end, I didn't become either of them but the knowledge
          I gained from my experiences and interests just brought benefits to
          me.
        </p>
      </div>
      <Education />
      <WorkExperience />
      <Language />
      <Project />
    </div>
  );
};
