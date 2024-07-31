import { GET_POSTS } from "@/app/api/graphql/queries";
import { PreloadQuery } from "@/lib/apollo-client";
import PostsList from "./_components/PostsList";

export default async function Posts() {
  return (
    <section>
      <PreloadQuery query={GET_POSTS}>
        <PostsList />
      </PreloadQuery>
    </section>
  );
}
