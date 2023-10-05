import profilePic from "../pics/profile.jpg";
import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";

const Home = () => {
  return (
    <section id="home">
      <div className="inline-flex">
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
        <div className="lg:ml-40 md:ml-10 pt-10 max-w-[40%] ml-4">
          <img src={profilePic} />
        </div>
      </div>
    </section>
  );
};

export default Home;
