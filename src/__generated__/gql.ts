/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation addPost($content: String!, $title: String!, $authorId: String!) {\n    addPost(content: $content, title: $title, authorId: $authorId) {\n      id\n      content\n      title\n      authorId\n    }\n  }\n": types.AddPostDocument,
    "\n  mutation deletePost($id: ID!) {\n    deletePost(id: $id) {\n      id\n      title\n      content\n    }\n  }\n": types.DeletePostDocument,
    "\n  mutation UpdatePost($id: ID!, $title: String, $content: String) {\n    updatePost(id: $id, title: $title, content: $content) {\n      id\n      content\n      title\n    }\n  }\n": types.UpdatePostDocument,
    "\n  query Posts {\n    posts {\n      id\n      title\n      content\n      author {\n        id\n        name\n      }\n    }\n  }\n": types.PostsDocument,
    "\n  query Post($id: ID!) {\n    post(id: $id) {\n      id\n      content\n      title\n    }\n  }\n": types.PostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addPost($content: String!, $title: String!, $authorId: String!) {\n    addPost(content: $content, title: $title, authorId: $authorId) {\n      id\n      content\n      title\n      authorId\n    }\n  }\n"): (typeof documents)["\n  mutation addPost($content: String!, $title: String!, $authorId: String!) {\n    addPost(content: $content, title: $title, authorId: $authorId) {\n      id\n      content\n      title\n      authorId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deletePost($id: ID!) {\n    deletePost(id: $id) {\n      id\n      title\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation deletePost($id: ID!) {\n    deletePost(id: $id) {\n      id\n      title\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdatePost($id: ID!, $title: String, $content: String) {\n    updatePost(id: $id, title: $title, content: $content) {\n      id\n      content\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePost($id: ID!, $title: String, $content: String) {\n    updatePost(id: $id, title: $title, content: $content) {\n      id\n      content\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Posts {\n    posts {\n      id\n      title\n      content\n      author {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Posts {\n    posts {\n      id\n      title\n      content\n      author {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Post($id: ID!) {\n    post(id: $id) {\n      id\n      content\n      title\n    }\n  }\n"): (typeof documents)["\n  query Post($id: ID!) {\n    post(id: $id) {\n      id\n      content\n      title\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;