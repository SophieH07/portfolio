import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../assets/projects";

const Project = () => {
  const [imageHidden, setImageHidden] = useState(true);

  function toggleShowImage() {
    setImageHidden(!imageHidden);
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
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center md:w-[45%] lg:w-[30%] md:animate-flip-down"
          >
            <div className="relative inline-flex justify-center text-center uppercase font-bold m-3 transition duration-300 ease-in-out w-full md:hover:scale-105">
              <Link to={`/project/${project.slug}`} className="block w-full">
                <img
                  src={project.picture}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <span className="cursor-pointer absolute inset-0 pt-20 sm:pt-24 md:pt-28 transition-all transform opacity-0 md:hover:bg-white md:hover:bg-opacity-70 md:hover:opacity-100 text-xl sm:text-2xl md:text-3xl text-black">
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
