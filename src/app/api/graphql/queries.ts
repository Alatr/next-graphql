import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`;

export const GET_POST = gql`
  query Post($id: Int!) {
    post(id: $id) {
      id
      content
      title
    }
  }
`;
