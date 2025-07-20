import { Link } from "react-router-dom";
import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";
import laptop from "../pics/watersplashlaptopotherside.jpg";

const Home = () => {
  return (
    <div id="home">
      <div className="grid grid-flow-col grid-cols-2 justify-center items-center">
        <div>
          <div>
            <div className="text-xl lg:pt-14 pb-8 lg:text-6xl md:text-5xl font-bold">
              Welcome!
            </div>
            <div className="lg:py-4 lg:text-3xl md:text-xl text-lg">
              My name is Zsófia Szaniszló
            </div>
            <div className="lg:py-4 lg:text-3xl md:text-xl text-lg">
              I'm a Software Developer from Hungary
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-sm">
            <img src={laptop} alt="Picture of a laptop" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-2">
        <div className="inline-flex p-3 bg-[#e34251] border rounded-lg">
          <div className="cursor-pointer pr-3">
            <a href="https://github.com/SophieH07" target="_blank">
              <img src={github} />{" "}
            </a>
          </div>
          <div className="cursor-pointer">
            <a
              href="https://www.linkedin.com/in/zsofiaszaniszlo/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
          </div>
        </div>
        <div>
          <button className="bg-[#e34251] p-4 text-4xl text-white border rounded-lg">
            <Link to="/about">About me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
