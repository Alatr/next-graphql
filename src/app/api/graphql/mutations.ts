import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation AddPost($content: String!, $title: String!, $authorId: String!) {
    addPost(content: $content, title: $title, authorId: $authorId) {
      id
      content
      title
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

// rewrite below

export const ADD_USER = gql`
  mutation Mutation($novelId: ID!, $name: String) {
    addAuthor(novelId: $novelId, name: $name) {
      id
      name
      novelId
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($id: ID!) {
    deleteAuthor(id: $id) {
      id
      name
      novelId
    }
  }
`;
