"use client";

import { DELETE_POST } from "@/app/api/graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";
import { GET_POSTS } from "@/app/api/graphql/queries";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface PostNavProps {
  id: string;
}

export default function PostNav(props: PostNavProps) {
  const { id } = props;
  const client = useApolloClient();

  const router = useRouter();
  const { data: session } = useSession();
  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    awaitRefetchQueries: true,
  });

  const handleDeletePost = async () => {
    await deletePost({ variables: { id: Number(id) } });
  };

  return (
    <ul className="flex items-center font-normal text-sm">
      <li>
        <Link
          href={`edit-post/${id}`}
          className="text-blue-500 underline italic p-2"
        >
          Edit
        </Link>
      </li>
      <li>
        <button
          onClick={handleDeletePost}
          className="text-blue-500 underline italic p-2"
        >
          Delete
        </button>
      </li>
    </ul>
  );
}
