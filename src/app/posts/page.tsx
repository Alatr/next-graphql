import { GET_POSTS } from "@/app/api/graphql/queries";
import PostsList from "@/components/PostsList";
import { getClient } from "@/lib/apollo-client";

export default async function Posts() {
  const { data, loading, error } = await getClient().query({
    query: GET_POSTS,
  });

  if (loading)
    return (
      <p className="flex items-center justify-center text-red-500">
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className="flex items-center justify-center text-red-500">
        Oops! Something went wrong ....
      </p>
    );

  return (
    <section>
      <PostsList posts={data.posts} />
    </section>
  );
}
