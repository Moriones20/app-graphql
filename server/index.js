import { StartApolloServer } from "./app.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

StartApolloServer(typeDefs, resolvers);
