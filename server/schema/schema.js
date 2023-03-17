import { projects, clients } from "../sampleData.js";
import { getClientById, getClients } from "../repository/clientRepository.js";
import {
  getProjectById,
  getProjects,
} from "../repository/projectRepository.js";

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from "graphql";

// Client Type
const ProjectType = new GraphQLObjectType({
  name: "ProjectType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    clients: {
      type: ClientType,
      resolve(parent, args) {
        return getClientById(parent.id);
        // return clients.find((client) => client.id === parent.clientId);
      },
    },
  }),
});

// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return getProjects();
      },
    },

    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return getProjectById(args.id);
        // return projects.find((project) => (project.id = args.id));
      },
    },

    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return getClients();
      },
    },

    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return getClientById(args.id);
        // return clients.find((client) => (client.id = args.id));
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
