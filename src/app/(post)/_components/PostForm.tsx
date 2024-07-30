"use client";

import { ADD_POST } from "@/app/api/graphql/mutations";
import { z } from "zod";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_POSTS } from "@/app/api/graphql/queries";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const productSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export default function PostForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState<{
    title?: string[] | undefined;
    content?: string[] | undefined;
    general?: string;
  }>({});
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_POSTS],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const result = productSchema.safeParse(Object.fromEntries(form.entries()));
    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
      return;
    }

    const { title, content } = result?.data || {};

    try {
      await addPost({
        variables: { title, content, authorId: session?.user?.id },
      });
      router.push("/posts");
    } catch (error) {
      console.error("Error adding new post:", error);
      setErrors({ general: "An error occurred while adding the post." });
    }
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
        <textarea
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
          Add Post
        </button>
      </div>
    </form>
  );
}
