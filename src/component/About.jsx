const About = () => {
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
    <section id="about">
      <h2 className="text-4xl font-bold uppercase sm:pb-9">About</h2>
      <h3>Skills</h3>
      <div className="flex flex-wrap cursor-default gap-2 uppercase font-normal text-center bg-[#93e1d8]">
        {skillSet.map(({ id, skill }) => (
          <div key={id} className="p-3">
            {skill}
          </div>
        ))}
      </div>

      <div>
        <div>
          <h3>Work Experience</h3>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="uppercase font-medium text-xl py-3">Prefixbox</p>
            <p>Technical Account Manager</p>
            <p>Budapest, Hungary || hybrid</p>
            <p>2025 - currently</p>
            <p></p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">
              Dialogue Creatives
            </p>
            <p>Frontend Developer</p>
            <p>Budapest, Hungary || hybrid</p>
            <p>2024 - 2025</p>
            <p></p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">
              Nyelvtudományi Kutatóközpont
              <br />
              Hungarian Research Centre for Linguistics
            </p>
            <p>Software Developer</p>
            <p>Budapest, Hungary || remote</p>
            <p>2023 - 2025</p>
            <p>PostgreSQL, Docker, Tailwind CSS, Next.js, Svelte</p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">Agco Kft.</p>
            <p>Software Developer</p>
            <p>Budapest, Hungary || hybrid</p>
            <p>2021 - 2023</p>
            <p>PL/SQL, JavaScript, HTML, CSS</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <div>
            <h3>Education</h3>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">
              IU University of Applied Sciences
            </p>
            <p>Bachelor's degree in Computer Science</p>
            <p>Located in Germany, taking classes online</p>
            <p>2023 - ongoing</p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">Codecool</p>
            <p>Junior Full-Stack Software Developer</p>
            <p>Budapest, Hungary</p>
            <p>2019 - 2020</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Languages</h3>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">Hungarian</p>
            <p>Mother Tongue</p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">English</p>
            <p>C1 Advanced</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Certificates</h3>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">Generative AI</p>
            <p>Mother Tongue</p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">
              Google UX Design Certificate
            </p>
            <p>C1 Advanced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
