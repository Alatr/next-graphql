import Link from "next/link";

export default async function Header() {
  return (
    <header className="mb-8">
      <ul className="flex justify-end">
        <li className="my-3">
          <Link href={`new-post`} className="text-blue-500 underline p-2">
            Add new
          </Link>
        </li>
      </ul>
    </header>
  );
}
