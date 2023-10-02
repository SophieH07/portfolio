import Tatatarot from "../project_pictures/tatatarot.png";
import PromptCollector from "../project_pictures/nytud_prompt_collector.png";
import { useState } from "react";

const Project = () => {
  const [imageHidden, setImageHidden] = useState(true);

  const projects = [
    {
      id: 1,
      picture: Tatatarot,
      description:
        "I created this simple tarot card picker and describer with React, to study the basics of JS, HTML, CSS. I learnt animation and the basic components of React",
      code: "https://github.com/SophieH07/tatatarot",
      website: "",
    },
    {
      id: 2,
      picture: PromptCollector,
      description:
        "I'm currently working for the Hungarian Research Centre for Linguistics to create a Hungarian ChatGPT. This page helps send in prompts and answers by the AI and to evalute them. Created with Next.js, PostgreSQL, and Docker",
      code: "https://github.com/SophieH07/prompt_collector_nytud",
      website: "https://prompt.nytud.hu/",
    },
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
      <div className="text-4xl font-bold uppercase">Projects</div>
      <div
        className={`fixed top-0 left-0 z-90 w-screen h-screen bg-black/70 flex justify-center items-center ${
          imageHidden ? "hidden" : ""
        }`}
        onClick={toggleShowImage}
      >
        <img
          id="modal-image"
          className="max-w-[1000px] max-h-[800px] object-cover"
        />
      </div>
      <div className="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 text-gray-300">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="my-8 rounded shadow-lg shadow-gray-900 bg-slate-200 bg-opacity-20 hover:shadow-gray-600 text-center">
              <img
                src={project.picture}
                className="rounded-t h-72 w-full object-cover cursor-pointer"
                onClick={(e) => showImage(e.target.src)}
              />
              <p className="text-lg mb-4 font-medium leading-relaxed ">
                {project.description}
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
