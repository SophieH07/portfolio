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
    <div className="section pt-20 md:pt-40" id="home">
      <div className="grid justify-center items-center">
        <div className="md:flex md:items-center md:gap-8">
          <div className="flex-1 min-w-0">
            <div className="md:pb-4 lg:text-8xl text-6xl uppercase font-bold">
              <p>Zsófia</p>
              <p>Szaniszló</p>
            </div>
            <div className="md:py-4 lg:text-3xl md:text-xl text-lg">
              I'm a{" "}
              <span
                style={{
                  borderRight: "2px solid #93e1d8",
                  paddingRight: "2px",
                  color: "#93e1d8",
                }}
              >
                {typed}
              </span>
            </div>
            <div className="inline-flex gap-5 ">
              <div className="cursor-pointer p-2 bg-[#e34251] border rounded-lg">
                <a href="https://github.com/SophieH07" target="_blank">
                  <img src={github} />{" "}
                </a>
              </div>
              <div className="cursor-pointer p-2 bg-[#e34251] border rounded-lg">
                <a
                  href="https://www.linkedin.com/in/zsofiaszaniszlo/"
                  target="_blank"
                >
                  <img src={linkedin} />
                </a>
              </div>
            </div>
            <br />
            <div className="inline-flex text-xl">
              <p className="pr-1">Learn more about </p>
              <Link
                to="/about"
                className="hover:text-[#e34251]  text-[#f0707d]"
              >
                about me
              </Link>
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
