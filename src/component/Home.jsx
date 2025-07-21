import { Link } from "react-router-dom";
import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";
import laptop from "../pics/watersplashlaptopotherside.jpg";
import { useState, useEffect } from "react";

const roles = [
  "Frontend Developer",
  "UX Designer",
  "Technical Account Manager",
];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (typed.length < roles[roleIdx].length) {
        timeout = setTimeout(() => {
          setTyped(roles[roleIdx].slice(0, typed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1200);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => {
          setTyped(typed.slice(0, -1));
        }, 40);
      } else {
        setIsTyping(true);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, isTyping, roleIdx]);

  return (
    <div className="section pt-20 md:pt-52" id="home">
      <div className="grid justify-center items-center">
        <div className="md:flex md:items-center md:gap-8">
          <div className="flex-1 min-w-0">
            <div className="md:pb-4 lg:text-8xl text-6xl uppercase font-bold">
              <p>Zsófia</p>
              <p>Szaniszló</p>
            </div>
            <div className="md:py-4 lg:text-3xl text-2xl py-3">
              I'm a{" "}
              <span className="text-primary border-r-2 border-primary pr-1">
                {typed}
              </span>
            </div>
            <div className="inline-flex gap-5 mt-4">
              <div className="cursor-pointer p-2 bg-secondary rounded-lg bg-secondary-hover">
                <a
                  href="https://github.com/SophieH07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} />
                </a>
              </div>
              <div className="cursor-pointer p-2 bg-secondary rounded-lg bg-secondary-hover">
                <a
                  href="https://www.linkedin.com/in/zsofiaszaniszlo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} />
                </a>
              </div>
            </div>
            <br />
            <div className="inline-flex text-xl pt-3">
              <p className="pr-1">Learn more about </p>
              <Link to="/about" className="text-primary text-secondary-hover">
                about me
              </Link>
            </div>
            <div className="mt-3">
              <a
                href="/documents/resume.pdf"
                download
                className="inline-block text-white text-lg mt-4 px-4 py-2 bg-secondary rounded bg-secondary-hover"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="laptop-container">
            <img
              src={laptop}
              alt="Picture of a laptop"
              className="floating-laptop"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
