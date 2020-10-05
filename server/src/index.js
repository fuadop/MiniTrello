import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const port = process.env.PORT || 8080;
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query,
        Mutation
    },
    context: {
        
    }
});

server.start({port}, () => console.log("🚀 Server started on http://localhost:" + port));