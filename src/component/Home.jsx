import { Link } from "react-router-dom";
import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";
import laptop from "../pics/watersplashlaptopotherside.jpg";

const Home = () => {
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
              I'm a Software Developer from Hungary
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
