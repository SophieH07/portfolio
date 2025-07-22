import { useParams, Link } from "react-router-dom";
import projects from "../assets/projects";

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
