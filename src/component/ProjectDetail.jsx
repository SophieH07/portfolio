import { useParams, Link } from "react-router-dom";
import Tatatarot from "../project_pictures/tatatarot.png";
import PromptCollector from "../project_pictures/nytud_prompt_collector.png";
import Tatatarot2 from "../project_pictures/tatatarot.v.2.png";
import DemoNytud from "../project_pictures/demotest.png";
import BookCatalogue from "../project_pictures/book_catalogue.png";

const projects = [
  {
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

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="section p-8">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="section p-8">
      <Link to="/projects" className="underline mb-4 inline-block">
        ← Back to Projects
      </Link>
      <h1 className="text-5xl text-bold text-primary">UNDER DEVELOPMENT</h1>
      {/* <h2 className="text-4xl font-bold uppercase mb-4">{project.title}</h2>
      <img
        src={project.picture}
        alt={project.title}
        className="rounded max-w-lg mb-4"
      />
      <p className="mb-4">{project.description}</p>
      <p className="mb-4 font-medium uppercase">{project.language}</p>
      {project.code && (
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase font-bold hover:text-white mr-4"
        >
          Github Code
        </a>
      )}
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase font-bold hover:text-white"
        >
          Website Link
        </a>
      )} */}
    </div>
  );
};

export default ProjectDetail;
