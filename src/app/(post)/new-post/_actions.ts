// import { ADD_POST } from "@/app/api/graphql/mutations";
// import { getClient } from "@/lib/apollo-client";
// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { z } from "zod";

// const productSchema = z.object({
//   title: z.string().min(3),
//   content: z.string().min(3),
// });

// const client = getClient();
// // const client = new ApolloClient({
// //   link: new HttpLink({
// //     uri: "http://localhost:3000/api/graphql",
// //     fetch: (...args) => fetch(...args),
// //   }),
// //   cache: new InMemoryCache(),
// // });

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

//   // const client = getClient();
//   console.log(client);

//   try {
//     // const response = await client?.mutate({
//     //   mutation: ADD_POST,
//     //   variables: {
//     //     title,
//     //     content,
//     //   },
//     // });
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
