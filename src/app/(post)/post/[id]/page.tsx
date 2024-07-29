import { GET_POST } from "@/app/api/graphql/queries";
import { getClient } from "@/lib/apollo-client";

type Props = {
  params: {
    id: string;
  };
};
export default async function Post({ params: { id } }: Props) {
  const { data, loading, error } = await getClient().query({
    query: GET_POST,
    variables: { id: Number(id) },
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">{data?.post?.title}</h1>
      <p>{data?.post?.content}</p>
    </main>
  );
}
