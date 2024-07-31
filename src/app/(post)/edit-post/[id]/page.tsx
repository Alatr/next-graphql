import { GET_POST } from "@/app/api/graphql/queries";
import PostForm, { PostFormWrapper } from "../../_components/PostForm";
import { getClient, PreloadQuery } from "@/lib/apollo-client";

type Props = {
  params: {
    id: string;
  };
};

export default async function EditPost({ params: { id } }: Props) {
  return (
    <section className="w-full">
      <PreloadQuery
        query={GET_POST}
        variables={{
          id,
        }}
      >
        {(queryRef) => <PostFormWrapper queryRef={queryRef} />}
      </PreloadQuery>
    </section>
  );
}
