import generativeAI from "../documents/generativeai.jpeg";
import googleUXdesign from "../documents/googleuxdesign.png";

const About = () => {
  const skillSet = [
    {
      id: 1,
      skill: "React",
    },
    {
      id: 2,
      skill: "Next.js",
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
      skill: "Typescript",
    },
    {
      id: 9,
      skill: "PL/SQL",
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
      skill: "SCSS",
    },
    {
      id: 13,
      skill: "Docker",
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
        "Nyelvtudományi Kutatóközpont / Hungarian Research Centre for Linguistics",
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
      <div className="md:flex text-center items-center justify-center gap-10 w-[90vw] md:w-[60vw] mt-10">
        <h3>Skills</h3>
        <div className="flex flex-wrap cursor-default gap-3 md:gap-6 uppercase font-normal p-2">
          {skillSet.map(({ id, skill }) => (
            <div key={id} class="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-300 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="skill relative px-3 py-4 bg-white  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <p key={id}>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* WORK EXPERIENCE */}
      <div className="flex flex-col md:flex-row w-[90vw] md:w-[60vw] justify-between mt-12">
        <div className="md:w-1/2">
          <div>
            <h3>Work Experience</h3>
          </div>
          <div className="rb-container">
            <ul className="rb">
              {workExperience.map((job, idx) => (
                <li key={idx} className="rb-item" ng-repeat="itembx">
                  <div className="">
                    <p className="uppercase font-medium text-xl whitespace-pre-line">
                      {job.company}
                    </p>
                    <p>{job.role}</p>
                    <p className="text-sm ">{job.location}</p>
                    <p className="text-sm ">{job.period}</p>
                    {job.tech && <p className="text-sm ">{job.tech}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* EDUCATION */}
      <div className="w-[90vw] md:w-[50vw] flex flex-col md:flex-row justify-end">
        <div>
          <h3 className="text-right">Education</h3>
          <div className="rb-container-reverse">
            <ul className="rb">
              {education.map((edu, idx) => (
                <li
                  key={idx}
                  className="mb-12 flex items-start flex-row-reverse relative text-right"
                >
                  <div>
                    <p className="uppercase font-medium text-xl">
                      {edu.school}
                    </p>
                    <p>{edu.degree}</p>
                    <p className="text-sm ">{edu.location}</p>
                    <p className="text-sm ">{edu.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* LANGUAGES AND CERTIFICATES */}
      <div className="rb-container w-[90vw] md:w-[50vw]">
        <h3>Languages</h3>
        <ul className="rb">
          <li>
            <p className="uppercase font-medium text-xl">Hungarian</p>
            <p>Mother Tongue</p>
          </li>
          <li>
            <p className="uppercase font-medium text-xl">English</p>
            <p>C1 Advanced</p>
          </li>
        </ul>
      </div>

      <div className="rb-container-reverse w-[90vw] md:w-[50vw]">
        <h3 className="text-right">Certificates</h3>
        <ul className="rb text-right">
          <li className="flex flex-col items-end">
            <p className="uppercase font-medium text-xl pb-3">Generative AI</p>
            <p>
              Óbudai Egyetem/University of Óbuda + Ai Akadémia/Neuron Solutions
            </p>
            <img
              className="max-w-[80vw] md:max-w-md"
              src={generativeAI}
              alt="Certificate of Generative AI course"
            />
          </li>
          <li className="flex flex-col items-end">
            <p className="uppercase font-medium text-xl pb-3">
              Google UX Design Certificate
            </p>
            <p>Google</p>
            <img
              className="max-w-[80vw] md:max-w-md"
              src={googleUXdesign}
              alt="Certificate of Google UX Design"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
