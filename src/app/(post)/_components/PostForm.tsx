"use client";

import { ADD_POST } from "@/app/api/graphql/mutations";
import { useFormState } from "react-dom";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useState } from "react";
// import { addNewPost } from "../new-post/_actions";
import { getClient } from "@/lib/apollo-client";
import { useMutation } from "@apollo/client";

const productSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(3),
});

// export async function addNewPost(formData) {
//   const result = productSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!result.success) {
//     return {
//       success: false,
//       errors: result.error.formErrors.fieldErrors,
//     };
//   }

//   const { title, content } = result?.data || {};

//   const client = getClient();
//   console.log(client);

//   try {
//     const response = await client?.mutate({
//       mutation: ADD_POST,
//       variables: {
//         title,
//         content,
//       },
//     });
//     // console.log("Post added:", response.data);
//   } catch (error) {
//     console.error("Error adding new post:", error);
//     return {
//       success: false,
//       errors: { general: "An error occurred while adding the post." },
//     };
//   }

//   revalidatePath("posts");
//   redirect("posts");
// }

export default function PostForm() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState({});
  const [addPost] = useMutation(ADD_POST, {
    variables: { title: "mut", content: "mut" },
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
    const form = new FormData();
    form.append("title", formData.title);
    form.append("content", formData.content);

    addPost();

    // const result = await addNewPost(form);

    // if (!result.success) {
    //   setErrors(result.errors);
    // } else {
    //   setFormData({ title: "", content: "" }); // Clear the form
    //   setErrors({}); // Clear errors
    // }
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
