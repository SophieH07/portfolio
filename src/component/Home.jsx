import profilePic from "../pics/profile.jpg";
import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";

const Home = () => {
  return (
    <section id="home">
      <div className="inline-flex">
        <div>
          <div className="pt-20 pb-12 text-6xl font-bold">Welcome!</div>
          <div className="py-6 text-4xl">My name is Zsófia Szaniszló</div>
          <div className="py-8 text-4xl">
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
        <div className="ml-40 pt-16">
          <img style={{ width: "440px" }} src={profilePic} />
        </div>
      </div>
    </section>
  );
};

export default Home;
