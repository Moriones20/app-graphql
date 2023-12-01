import Project from "../models/project.js";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({ name, description });
      const savedProject = await project.save();
      return savedProject;
    },
  },
};
