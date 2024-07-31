"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center">
        <h4>Welcome {session?.user?.name}</h4>
        <button
          className="text-blue-500 underline p-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      className="text-blue-500 underline p-2"
      onClick={() => signIn("github")}
    >
      Sign in with github
    </button>
  );
}
