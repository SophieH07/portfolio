import github from "../pics/github.png";
import linkedin from "../pics/linkedin.png";

const Home = () => {
  const skillSet = [
    {
      id: 1,
      skill: "React",
    },
    {
      id: 2,
      skill: "PL/SQL",
    },
    {
      id: 3,
      skill: "Javascript",
    },
    {
      id: 4,
      skill: "JQuery",
    },
    {
      id: 5,
      skill: "CSS",
    },
    {
      id: 6,
      skill: "HTML",
    },
    {
      id: 7,
      skill: "Git",
    },
    {
      id: 8,
      skill: "Svelte",
    },
    {
      id: 9,
      skill: "Next.js",
    },
    {
      id: 10,
      skill: "PostgreSQL",
    },
    {
      id: 11,
      skill: "Tailwind CSS",
    },
    {
      id: 12,
      skill: "Auth0",
    },
    {
      id: 13,
      skill: "Docker",
    },
    {
      id: 14,
      skill: "Python",
    },
  ];

  return (
    <section
      id="home"
      className="sm:grid sm:grid-flow-col lg:flex justify-center items-center px-10"
    >
      <div className="pr-5 pb-5">
        <div className="text-xl lg:pt-18 pb-10 lg:text-6xl md:text-5xl font-bold">
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
      <div className="flex justify-center items-center">
        <div className="cursor-default grid grid-flow-row gap-0 uppercase font-medium grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-center max-w-screen-lg bg-black bg-opacity-10">
          {skillSet.map(({ id, skill }) => (
            <div
              key={id}
              className="p-1 sm:p-2 lg:p-6 md:p-4 xl:p-5 hover:bg-slate-200 hover:bg-opacity-20 hover:rounded"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
