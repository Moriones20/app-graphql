import { StartApolloServer } from "./app.js";
import { connectDB } from "./db.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

connectDB().then(() => StartApolloServer(typeDefs, resolvers));
