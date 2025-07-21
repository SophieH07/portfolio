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
  // Timeline data for jobs and education
  const workExperience = [
    {
      company: "Prefixbox",
      role: "Technical Account Manager",
      location: "Budapest, Hungary || hybrid",
      period: "2025 - currently",
      tech: "",
    },
    {
      company: "Dialogue Creatives",
      role: "Frontend Developer",
      location: "Budapest, Hungary || hybrid",
      period: "2024 - 2025",
      tech: "",
    },
    {
      company:
        "Nyelvtudományi Kutatóközpont\nHungarian Research Centre for Linguistics",
      role: "Software Developer",
      location: "Budapest, Hungary || remote",
      period: "2023 - 2025",
      tech: "PostgreSQL, Docker, Tailwind CSS, Next.js, Svelte",
    },
    {
      company: "Agco Kft.",
      role: "Software Developer",
      location: "Budapest, Hungary || hybrid",
      period: "2021 - 2023",
      tech: "PL/SQL, JavaScript, HTML, CSS",
    },
  ];

  const education = [
    {
      school: "IU University of Applied Sciences",
      degree: "Bachelor's degree in Computer Science",
      location: "Located in Germany, taking classes online",
      period: "2023 - ongoing",
    },
    {
      school: "Codecool",
      degree: "Junior Full-Stack Software Developer",
      location: "Budapest, Hungary",
      period: "2019 - 2020",
    },
  ];

  return (
    <div className="section" id="about">
      <h2 className="text-4xl font-bold uppercase sm:pb-9">About</h2>
      <h3>Skills</h3>
      <div className="flex flex-wrap cursor-default gap-4 uppercase font-normal bg-[#93e1d8] p-2">
        {skillSet.map(({ id, skill }) => (
          <p key={id}>{skill}</p>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col md:flex-row justify-between mt-12">
        {/* Work Experience Timeline */}
        <div className="w-full md:w-1/2 pr-4">
          <h3 className="mb-6 font-bold text-2xl">Work Experience</h3>
          <div className="relative ml-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded"></div>
            {workExperience.map((job, idx) => (
              <div key={idx} className="mb-12 flex items-start relative">
                {/* Timeline dot */}
                <div className="absolute -left-3.5 top-2 w-4 h-4 bg-[#93e1d8] border-2 border-white rounded-full z-10"></div>
                <div className="pl-6">
                  <p className="uppercase font-medium text-xl py-1 whitespace-pre-line">
                    {job.company}
                  </p>
                  <p>{job.role}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="text-sm text-gray-400">{job.period}</p>
                  {job.tech && (
                    <p className="text-sm text-gray-600">{job.tech}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education Timeline */}
        <div className="w-full md:w-1/2 pl-4 mt-12 md:mt-0">
          <h3 className="mb-6 font-bold text-2xl">Education</h3>
          <div className="relative ml-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded"></div>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-12 flex items-start relative">
                {/* Timeline dot */}
                <div className="absolute -left-3.5 top-2 w-4 h-4 bg-[#93e1d8] border-2 border-white rounded-full z-10"></div>
                <div className="pl-6">
                  <p className="uppercase font-medium text-xl py-1">
                    {edu.school}
                  </p>
                  <p>{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages and Certificates */}
      <div className="flex flex-col md:flex-row justify-between mt-12">
        <div className="w-full md:w-1/2 pr-4">
          <h3>Languages</h3>
          <div>
            <p className="uppercase font-medium text-xl py-3">Hungarian</p>
            <p>Mother Tongue</p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">English</p>
            <p>C1 Advanced</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-4 mt-12 md:mt-0">
          <h3>Certificates</h3>
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
    </div>
  );
};

export default About;
