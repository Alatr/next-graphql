"use client";
import Link from "next/link";
import PostNav from "./PostsNav";
import { useSuspenseQuery } from "@apollo/client";
import { GET_POSTS } from "@/app/api/graphql/queries";

export default function PostsList() {
  const { data, error } = useSuspenseQuery(GET_POSTS);

  if (error)
    return (
      <p className="flex items-center justify-center text-red-500">
        Oops! Something went wrong ....
      </p>
    );

  return (
    <ul>
      {data?.posts?.map(({ title, content, author, id }) => (
        <li key={id} className="mb-3">
          <h3 className="font-bold flex items-center">
            {title} <PostNav id={id} />
          </h3>
          <p>{content}</p>
          <span className="italic justify-end flex w-full">
            by {author?.name}
          </span>
          <Link href={`/post/${id}`} className="text-blue-500 underline">
            Read
          </Link>
        </li>
      ))}
    </ul>
  );
}
