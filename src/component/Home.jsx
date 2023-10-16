import profilePic from "../pics/profile.jpg";
import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";

const Home = () => {
  return (
    <div
      id="home"
      className="inline-flex lg:mx-12 xl:mx-12 md:mx-4 sm:mx-4 mx-1 animate-fade-up"
    >
      <div>
        <div className="pt-16 lg:pt-20 pb-12 lg:text-6xl md:text-4xl font-bold">
          Welcome!
        </div>
        <div className="lg:py-6 lg:text-4xl md:text-2xl">
          My name is Zsófia Szaniszló
        </div>
        <div className="lg:py-8 lg:text-4xl md:text-2xl">
          I'm a Software Developer from Hungary
        </div>
        <div className="inline-flex">
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
      </div>
      <div className="animate-fade-left lg:ml-40 lg:mt-3 sm:pt-5 sm:max-w-[15em] md:ml-20 pt-10 max-w-[40%] ml-4 lg:max-w-[30%] xl:max-w-[32%]">
        <img src={profilePic} />
      </div>
    </div>
  );
};

export default Home;
