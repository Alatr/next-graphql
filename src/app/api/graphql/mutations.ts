import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation addPost($content: String!, $title: String!, $authorId: String!) {
    addPost(content: $content, title: $title, authorId: $authorId) {
      id
      content
      title
      authorId
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
      title
      content
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String, $content: String) {
    updatePost(id: $id, title: $title, content: $content) {
      id
      content
      title
    }
  }
`;
