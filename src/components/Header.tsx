import Link from "next/link";
import AuthButton from "./AuthButton";

export default async function Header() {
  return (
    <>
      <header className="px-10 mb-8 bg-gray-300">
        <ul className="flex justify-end items-center mb-1">
          <li className="my-3">
            <AuthButton />
          </li>
        </ul>
      </header>
      <nav className="px-10 flex justify-end items-center">
        <div className="my-3">
          <Link href={`/new-post`} className="text-blue-500 underline p-2">
            Add new
          </Link>
        </div>
      </nav>
    </>
  );
}
