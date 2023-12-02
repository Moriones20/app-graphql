import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import ProjectCard from "./ProjectCard";
import { Project } from "../interfaces/project";

function ProjectList() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    <p>Error al obtener datos</p>;
  }

  return (
    <div>
      {data.projects.map((project: Project, idx: number) => (
        <div key={idx}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
