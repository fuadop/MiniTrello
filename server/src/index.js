import express from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import Schema from "./schemas/Schema.gql";
import Resolvers from "./schemas/resolvers";

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/graphql", graphqlHTTP({
    schema: buildSchema(Schema),
    rootValue: Resolvers,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log("Server started");
});