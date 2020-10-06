import { GraphQLServer, PubSub } from "graphql-yoga";
import { connect } from "mongoose";
import colors from "colors";
import User from "./models/User";
import Board from "./models/Board";
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
        User,
        Board,
        pubsub: new PubSub()
    }
});

connect("mongodb://localhost:27017/minitrello", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("✅ Connected to database".blue.bold);
    server.start({port}, () => console.log(`⚡ Server started on http://localhost: ${port}`.blue.bold));
}).catch(err => console.log("Couldn't connect to database: ",err));