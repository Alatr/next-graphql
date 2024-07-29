import Link from "next/link";

export default async function PostsList({
  posts,
}: {
  posts: Array<{
    title: string;
    content: string;
    author: { name: string };
    id: string;
  }>;
}) {
  return (
    <ul>
      {posts.map(({ title, content, author, id }) => (
        <li key={id} className="mb-3">
          <h3 className="font-bold">{title}</h3>
          <p>{content}</p>
          <span className="italic justify-end flex w-full">
            by {author?.name}
          </span>
          <Link href={`/post/${id}`} className="text-blue-500 underline">
            Read
          </Link>
        </li>
      ))}
    </ul>
  );
}
