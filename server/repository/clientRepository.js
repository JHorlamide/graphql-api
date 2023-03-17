import Client from "../models/Client.js";

export const getClients = () => {
  return Client.find({}).exec();
};

export const getClientById = async (clientId) => {
  try {
    const client = await Client.findById(clientId).exec();
    if (!client) {
      throw new Error("Client with the given ID not found");
    }

    return client;
  } catch (error) {
    throw new Error(error.message);
  }
};
