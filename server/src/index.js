const { GraphQLServer } = require("graphql-yoga");
const { resolvers } = require('./resolvers');

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;


const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log("Server Runing on: https://localhost:4000"));
