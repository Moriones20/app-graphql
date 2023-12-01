import Project from "../models/project.js";
import Task from "../models/task.js";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    projects: async () => await Project.find(),
    tasks: async () => await Task.find(),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({ name, description });
      const savedProject = await project.save();
      return savedProject;
    },
    createTask: async (_, { title, projectId }) => {
      const projectExists = await Project.findById(projectId);
      if (!projectExists) {
        throw new Error("Project not found");
      }

      const task = new Task({ title, projectId });
      const savedTask = await task.save();
      return savedTask;
    },
  },
};
