import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../graphql/projects";
import { useQuery } from "@apollo/client";
import { Project } from "../interfaces/project";

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div className="overflow-y-auto w-full px-5">
      {data.projects.map((project: Project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
