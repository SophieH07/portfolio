import Header from "./layout/Header";
import Project from "./component/Project";
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/Work";
import Contact from "./component/Contact";
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
      <About />
      <Work />
      <Project />
      <Contact />
    </div>
  );
};
export default App;
