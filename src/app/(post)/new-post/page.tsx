import { GET_POSTS } from "@/app/api/graphql/queries";
import PostsList from "@/components/PostsList";
import PostForm from "../_components/PostForm";
import { ADD_POST } from "@/app/api/graphql/mutations";
import { getClient } from "@/lib/apollo-client";

export default async function NewPost() {
  const client = getClient();
  console.log(999123, client);
  // const { data } = await getClient().mutate({
  //   mutation: ADD_POST,
  //   variables: {
  //     title: "test",
  //     content: "test",
  //   },
  // });

  // const { data, loading, error } = await getClient().query({
  //   query: GET_POSTS,
  // });

  // console.log(999123, data);
  // addPost();

  // if (loading)
  //   return (
  //     <p className="flex items-center justify-center text-red-500">
  //       Loading ....
  //     </p>
  //   );
  // if (error)
  //   return (
  //     <p className="flex items-center justify-center text-red-500">
  //       Oops! Something went wrong ....
  //     </p>
  //   );

  return (
    <section className="w-full">
      <PostForm />
    </section>
  );
}
