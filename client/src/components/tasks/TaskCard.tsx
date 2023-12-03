import ButtonIcon from "../ui/ButtonIcon";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";
import { FunctionComponent } from "react";
import { Task } from "../../interfaces/task";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FunctionComponent<TaskCardProps> = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between">
      <h1>{task.title}</h1>
      <div className="flex gap-x-2">
        <ButtonIcon icon={<AiOutlineCheck />} onClick={undefined} />
        <ButtonIcon
          icon={
            <AiOutlineDelete
              onClick={() => {
                deleteTask({
                  variables: {
                    id: task._id,
                  },
                });
              }}
            />
          }
          onClick={undefined}
        />
      </div>
    </div>
  );
};

export default TaskCard;
