import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CREATE_TASK } from "../../graphql/tasks";
import { useState } from "react";

const TaskForm = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createTask({
      variables: {
        title,
        projectId: params.id,
      },
    });
    console.log(result);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a task"
        onChange={handleChange}
        className="bg-zinc-900 text-white w-full p-2 rounded-lg mb-2"
      />
      <button
        type="submit"
        className="bg-sky-900 text-white w-full p-2 rounded-lg mb-2"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
