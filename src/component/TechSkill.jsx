const TechSkills = () => {
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
      skill: "Svelte",
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
      skill: "Java",
    },
    {
      id: 15,
      skill: "PostgreSQL",
    },
  ];

  return (
    <section id="skills">
      <div className="text-4xl font-bold uppercase">Tech Skills</div>
      <div className="flex justify-center items-center">
        <div className="cursor-default grid grid-flow-row gap-2 uppercase font-medium sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 text-center max-w-screen-lg">
          {skillSet.map(({ id, skill }) => (
            <div
              key={id}
              className="p-6 hover:bg-slate-200 hover:bg-opacity-20 hover:rounded"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
