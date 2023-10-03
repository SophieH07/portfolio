import Header from "./layout/Header";
import TechSkills from "./component/TechSkill";
import Project from "./component/Project";
import Home from "./component/Home";
import Education from "./component/Education";
import WorkExperience from "./component/WorkExperience";
import Contact from "./component/Contact";
import Language from "./component/Language";
import Footer from "./layout/Footer";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <div onClick={closeMenu}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home />
      <TechSkills />
      <Education />
      <WorkExperience />
      <Language />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
