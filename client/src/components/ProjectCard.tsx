import { Project } from "../interfaces/project";

interface ProjectProp {
  project: Project;
}

function ProjectCard({ project }: ProjectProp) {
  const { name, description } = project;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
