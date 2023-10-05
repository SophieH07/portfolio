import Tatatarot from "../project_pictures/tatatarot.png";
import PromptCollector from "../project_pictures/nytud_prompt_collector.png";
import { useState } from "react";

const Project = () => {
  const [imageHidden, setImageHidden] = useState(true);

  const projects = [
    {
      id: 1,
      picture: Tatatarot,
      title: "Tatatarot",
      description:
        "I created this simple tarot card picker and describer for fun. I learnt animation and practiced front-end with this project.",
      language: "React, JS, HTML, CSS",
      code: "https://github.com/SophieH07/tatatarot",
      website: "",
    },
    {
      id: 2,
      picture: PromptCollector,
      title: "Prompt collector",
      description:
        "I'm currently working for the Hungarian Research Centre for Linguistics to create a Hungarian ChatGPT. This page helps send in prompts and answers by the AI and to evalute them.",
      language: "NextJs, PostgreSQL, Docker",
      code: "https://github.com/SophieH07/prompt_collector_nytud",
      website: "https://prompt.nytud.hu/",
    },

    // {
    //   id: 3,
    //   picture: PromptCollector,
    //   title: "Prompt collector",
    //   description:
    //     "I'm currently working for the Hungarian Research Centre for Linguistics to create a Hungarian ChatGPT. This page helps send in prompts and answers by the AI and to evalute them. Created with Next.js, PostgreSQL, and Docker",
    //   language: "NextJs, PostgreSQL, Docker",
    //   code: "https://github.com/SophieH07/prompt_collector_nytud",
    //   website: "https://prompt.nytud.hu/",
    // },

    // {
    //   id: 4,
    //   picture: PromptCollector,
    //   title: "Prompt collector",
    //   description:
    //     "I'm currently working for the Hungarian Research Centre for Linguistics to create a Hungarian ChatGPT. This page helps send in prompts and answers by the AI and to evalute them. Created with Next.js, PostgreSQL, and Docker",
    //   language: "NextJs, PostgreSQL, Docker",
    //   code: "https://github.com/SophieH07/prompt_collector_nytud",
    //   website: "https://prompt.nytud.hu/",
    // },
    // {
    //   id: 5,
    //   picture: Tatatarot,
    //   title: "Tatatarot",
    //   description:
    //     "I created this simple tarot card picker and describer for fun. I learnt animation and practiced front-end with this project.",
    //   language: "React, JS, HTML, CSS",
    //   code: "https://github.com/SophieH07/tatatarot",
    //   website: "",
    // },
    // {
    //   id: 6,
    //   picture: Tatatarot,
    //   title: "Tatatarot",
    //   description:
    //     "I created this simple tarot card picker and describer for fun. I learnt animation and practiced front-end with this project.",
    //   language: "React, JS, HTML, CSS",
    //   code: "https://github.com/SophieH07/tatatarot",
    //   website: "",
    // },
  ];

  function toggleShowImage() {
    setImageHidden(!imageHidden);
  }

  function showImage(picture) {
    setImageHidden(!imageHidden);
    const modalImage = document.getElementById("modal-image");
    modalImage.src = picture;
  }

  return (
    <section id="project">
      {/*if more projects, add: mb-20 mt-4 */}
      <div className="text-4xl font-bold uppercase sm:pb-4">Projects</div>
      <div
        className={`fixed top-0 left-0 z-90 w-screen h-screen bg-black/70 flex justify-center items-center ${
          imageHidden ? "hidden" : ""
        }`}
        onClick={toggleShowImage}
      >
        <img
          id="modal-image"
          className="max-h-[95%] max-w-[95%] object-cover"
        />
      </div>
      <div className="max-h-[70vh] max-w-[97%] grid grid-flow-row overflow-y-scroll gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-8 text-gray-300 pb-7">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="rounded shadow-lg shadow-gray-900 bg-black bg-opacity-40 hover:shadow-gray-600 text-center">
              <p className="font-medium uppercase py-1">{project.title}</p>
              <img
                src={project.picture}
                className="rounded-t h-50 w-full object-cover cursor-pointer"
                onClick={(e) => showImage(e.target.src)}
              />
              <p className="text-sm mb-4 px-2 text-justify">
                {project.description}
              </p>
              <p className="text-sm mb-4 px-2 font-medium uppercase">
                {project.language}
              </p>
              <a
                href={project.code}
                target="_blank"
                className="uppercase font-bold hover:text-white"
              >
                Github Code
              </a>
              {project.website != "" ? (
                <a
                  href={project.website}
                  target="_blank"
                  className="uppercase font-bold hover:text-white pl-2"
                >
                  Website Link
                </a>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
