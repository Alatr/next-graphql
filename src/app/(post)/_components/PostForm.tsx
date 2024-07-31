"use client";

import { ADD_POST, UPDATE_POST } from "@/app/api/graphql/mutations";
import { z } from "zod";
import { ChangeEvent, FormEvent, useState } from "react";
import { QueryRef, useMutation, useReadQuery } from "@apollo/client";
import { GET_POSTS } from "@/app/api/graphql/queries";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Post, PostQuery } from "@/__generated__/graphql";

const productSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

type PostFormWrapperProps = { queryRef: QueryRef<PostQuery> };
type PostFormProps = { post: PostQuery["post"] };
type IFormErrors = {
  title?: string[] | undefined;
  content?: string[] | undefined;
  general?: string;
};

export function PostFormWrapper({ queryRef }: PostFormWrapperProps) {
  const { data: post } = useReadQuery<PostQuery>(queryRef);
  return <PostForm post={post?.post} />;
}

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const action = useFormAction(post);

  const [formData, setFormData] = useState({
    title: post?.title,
    content: post?.content as string | undefined,
  });
  const [errors, setErrors] = useState<IFormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = productSchema.safeParse(Object.fromEntries(form.entries()));

    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
      return;
    }

    const { title, content } = result?.data || {};
    const actionData = {
      title,
      content,
      id: post?.id,
      authorId: session?.user?.id,
    };

    action(actionData)
      .then(() => {
        router.push("/posts");
      })
      .catch((error) => {
        setErrors({ general: error.message });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">{errors.title}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        {errors.content && (
          <p className="text-red-500 text-xs italic">{errors.content}</p>
        )}
      </div>
      {errors.general && (
        <p className="text-red-500 text-xs italic">{errors.general}</p>
      )}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {post ? "Update Post" : "Add Post"}
        </button>
      </div>
    </form>
  );
}

function useFormAction(post: any) {
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    awaitRefetchQueries: true,
  });
  const [updatePost] = useMutation(UPDATE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    awaitRefetchQueries: true,
  });
  const handleCreateNewPost = async <T extends object>(data: T) => {
    try {
      await addPost({
        variables: data,
      });
    } catch (error) {
      throw new Error("An error occurred while adding the post.", {
        cause: error,
      });
    }
  };
  const handleUpdatePost = async <T extends object>(data: T) => {
    try {
      await updatePost({
        variables: data,
      });
    } catch (error) {
      throw new Error("An error occurred while updating the post.", {
        cause: error,
      });
    }
  };
  return post ? handleUpdatePost : handleCreateNewPost;
}
