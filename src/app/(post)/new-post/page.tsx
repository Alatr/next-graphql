import { GET_POSTS } from "@/app/api/graphql/queries";
import PostsList from "@/components/PostsList";
import PostForm from "../_components/PostForm";
import { ADD_POST } from "@/app/api/graphql/mutations";
import { getClient } from "@/lib/apollo-client";

export default async function NewPost() {
  const client = getClient();

  return (
    <section className="w-full">
      <PostForm />
    </section>
  );
}
