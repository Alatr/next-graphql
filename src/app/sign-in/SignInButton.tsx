"use client";

import { signIn } from "next-auth/react";
import { FC } from "react";

interface SignInButtonProps {
  providers: any;
}

export const SignInButton: FC<SignInButtonProps> = (props): React.ReactNode => {
  const { providers } = props;
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider?.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider?.name}
          </button>
        </div>
      ))}
    </div>
  );
};
