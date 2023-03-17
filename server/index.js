import express from "express";
import colors from "colors"
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import DBConnectWithRetry from "./config/dbConfig.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const isGraphiql = process.env.NODE_ENV === "development";

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: isGraphiql,
  })
);

app.listen(PORT, async function () {
  await DBConnectWithRetry()
  console.log(`Server running on port ${PORT}...`.blue.bold);
});
