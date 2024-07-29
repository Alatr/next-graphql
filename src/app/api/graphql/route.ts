import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest, NextResponse } from "next/server";
import { gql } from "graphql-tag";
import { PrismaClient } from "@prisma/client/extension";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { DBContext } from "@/db/context";
import db from "@/db/db";

const server = new ApolloServer<DBContext>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server as any, {
  context: async (req, res) => ({ req, res, db }),
});

// more reference https://www.npmjs.com/package/@as-integrations/next?activeTab=readme

/**
 * Refer https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/ for apollo client
 */

export { handler as GET, handler as POST };
