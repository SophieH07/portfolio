import Tatatarot from "../project_pictures/tatatarot.png";
import PromptCollector from "../project_pictures/nytud_prompt_collector.png";
import Tatatarot2 from "../project_pictures/tatatarot.v.2.png";
import DemoNytud from "../project_pictures/demotest.png";
import BookCatalogue from "../project_pictures/book_catalogue.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [imageHidden, setImageHidden] = useState(true);

  const projects = [
    {
      id: 1,
      slug: "tatatarot-v1",
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
      slug: "tatatarot-v2",
      picture: Tatatarot2,
      title: "Tatatarot",
      description:
        "I recreated my first tarot card generator using AI generated images, to create it with new technologies",
      language: "React, Tailwind CSS, image AI, Vite",
      code: "https://github.com/SophieH07/tatatarot.v.2.0",
      website: "https://tatatarot.netlify.app/",
    },
    {
      id: 3,
      slug: "prompt-collector",
      picture: PromptCollector,
      title: "Prompt collector",
      description:
        "I'm currently working for the Hungarian Research Centre for Linguistics to create a Hungarian ChatGPT. This page helps send in prompts and answers by the AI and to evalute them.",
      language: "NextJs, PostgreSQL, Docker",
      code: "https://github.com/SophieH07/prompt_collector_nytud",
      website: "https://prompt.nytud.hu/",
    },
    {
      id: 4,
      slug: "nytk-demo",
      picture: DemoNytud,
      title: "NYTK Demo",
      description:
        "I'm currently working for the Hungarian Research Centre for Linguistics to create a Hungarian ChatGPT. This page shows a demo of their current projects",
      language: "Svelte, Tailwind CSS, Vite, Docker",
      code: "",
      website: "https://puli.nytud.hu/",
    },
    {
      id: 5,
      slug: "book-catalogue",
      picture: BookCatalogue,
      title: "Book Catalogue",
      description:
        "This was a project for a course at the IU University where I am currently enrolled",
      language: "ReactJS, TailwindCSS, Vite, NodeJS, MongoDB, Express, Docker",
      code: "https://github.com/SophieH07/book-catalogue",
      website: "",
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
    <div className="section flex w-screen flex-col" id="project">
      <div
        className={`fixed top-0 left-0 z-90 w-screen h-screen bg-black/70 flex justify-center items-center ${
          imageHidden ? "hidden" : ""
        }`}
        onClick={toggleShowImage}
      >
        <img
          id="modal-image"
          className="max-h-[95%] max-w-[95%] object-contain"
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center md:mt-10 w-full">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="animate-flip-down w-2/3 md:w-[45%] lg:w-[30%]"
          >
            <div className="relative inline-flex justify-center text-center uppercase font-bold m-3 transition duration-300 ease-in-out hover:scale-105 w-full">
              <Link to={`/project/${project.slug}`} className="block w-full">
                <img
                  src={project.picture}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <span className="cursor-pointer absolute inset-0 pt-20 sm:pt-24 md:pt-28 transition-all transform opacity-0 hover:bg-white hover:bg-opacity-70 hover:opacity-100 text-xl sm:text-2xl md:text-3xl text-black">
                  {project.title}
                </span>
                <span className="md:hidden">{project.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
