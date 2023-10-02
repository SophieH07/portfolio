import Header from "./layout/Header";
import TechSkills from "./component/TechSkill";
import Project from "./component/Project";
import Home from "./component/Home";
import Education from "./component/Education";
import WorkExperience from "./component/WorkExperience";
import Contact from "./component/Contact";
import Footer from "./layout/Footer";
import Language from "./component/Language";

function App() {
  return (
    <div>
      <Header />
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
}

export default App;
