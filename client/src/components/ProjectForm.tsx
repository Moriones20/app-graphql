import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

function ProjectForm() {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}

      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        rows={3}
        placeholder="Write a description"
        onChange={handleChange}
      ></textarea>
      <button disabled={!project.name || !project.description || loading}>
        Save
      </button>
    </form>
  );
}

export default ProjectForm;
