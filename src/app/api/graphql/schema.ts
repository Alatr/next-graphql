import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Post {
    id: ID!
    createdAt: String!
    title: String!
    content: String
    published: Boolean!
    author: User
    authorId: String!
  }

  type Account {
    id: String!
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    user: User!
  }

  type Session {
    id: String!
    sessionToken: String!
    userId: String!
    expires: String!
    user: User!
  }

  type User {
    id: String!
    name: String
    email: String
    emailVerified: String
    image: String
    accounts: [Account!]!
    sessions: [Session!]!
    posts: [Post!]!
  }

  type VerificationToken {
    identifier: String!
    token: String!
    expires: String!
  }

  type Query {
    post(id: ID!): Post
    posts: [Post]
  }

  type Mutation {
    addPost(content: String, title: String, authorId: String): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Post
  }
`;
