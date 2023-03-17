import Project from "../models/Project.js";

export const getProjects = () => {
  return Project.find({}).exec();
};

export const getProjectById = async (projectId) => {
  try {
    const project = await Project.findById(projectId).exec();
    if (!project) {
      throw new Error("Project with the given ID not found");
    }

    return project;
  } catch (error) {
    throw new Error(error.message);
  }
};
