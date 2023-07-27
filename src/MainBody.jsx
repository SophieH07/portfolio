import React from "react";
import { Project } from "./Project/Project";
import { About } from "./About/About";

export const MainBody = () => {
  return (
    <div>
      <About />
      <Project />
    </div>
  );
};
