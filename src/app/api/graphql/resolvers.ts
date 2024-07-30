import { DBContext } from "@/db/context";

export const resolvers = {
  Query: {
    post: async (_parent: any, args: any, context: DBContext) => {
      return await context.db.post.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    posts: async (_parent: any, _args: any, context: DBContext) => {
      try {
        return await context.db.post.findMany();
      } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
      }
    },
  },
  Post: {
    author: async (parent: any, _args: any, context: DBContext) => {
      return await context.db.user.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
  Mutation: {
    addPost: async (_parent: any, args: any, context: DBContext) => {
      return await context.db.post.create({
        data: {
          title: args.title,
          content: args.content,
          authorId: args.authorId,
        },
      });
    },
    updatePost: async (_parent: any, args: any, context: DBContext) => {
      return await context.db.post.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          content: args.content,
        },
      });
    },
    deletePost: async (_parent: any, args: any, context: DBContext) => {
      return await context.db.post.delete({
        where: {
          id: args.id,
        },
      });
    },

    addUser: async (_parent: any, args: any, context: DBContext) => {
      return await context.db.user.create({
        data: {
          id: args.id,
          name: args.name,
        },
      });
    },
    deleteUser: async (_parent: any, args: any, context: DBContext) => {
      return await context.db.user.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
