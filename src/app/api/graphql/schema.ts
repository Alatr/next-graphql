export const typeDefs = `#graphql

  type Post {
    id: Int!
    createdAt: String!
    title: String!
    content: String
    published: Boolean!
    author: User
    authorId: String
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
	  post(id: Int!): Post 
    posts: [Post]
  }

  type Mutation {
    addPost (content:String, title:String) : Post
    updatePost(id:Int!, title:String, content:String) : Post
    deletePost(id:Int!) : Post
    addUser(novelId:Int!, name:String): User
    deleteUser(id:Int!): User
  }

`;