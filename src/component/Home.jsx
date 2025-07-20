import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";
import laptop from "../pics/watersplashlaptopotherside.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-flow-col grid-cols-2 justify-center items-center"
    >
      <div>
        <div>
          <div className="text-xl lg:pt-20 pb-10 lg:text-6xl md:text-5xl font-bold">
            Welcome!
          </div>
          <div className="lg:py-6 lg:text-4xl md:text-xl text-lg">
            My name is Zsófia Szaniszló
          </div>
          <div className="lg:py-8 lg:text-4xl md:text-xl text-lg">
            I'm a Software Developer from Hungary
          </div>
          <div className="inline-flex pt-2">
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
      </div>
      <div>
        <div className="cursor-default gap-0 uppercase font-medium text-center bg-black bg-opacity-10 max-w-sm">
          <img src={laptop} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
