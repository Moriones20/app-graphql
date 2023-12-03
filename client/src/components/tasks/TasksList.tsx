import { ImFileEmpty } from "react-icons/im";
import TaskCard from "./TaskCard";
import { FunctionComponent } from "react";
import { Task } from "../../interfaces/task";

interface TaskListProps {
  tasks: Task[];
}

const TasksList: FunctionComponent<TaskListProps> = ({ tasks }) => {
  console.log(tasks);

  if (!tasks.length)
    return (
      <div className="flex justify-center content-center p-5">
        <div>
          <ImFileEmpty className="h-32 w-32 text-zinc-500 pb-4" />
          <h1 className="text-center">No Tasks Yet</h1>
        </div>
      </div>
    );

  console.log(tasks);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
