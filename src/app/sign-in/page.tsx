import { getProviders } from "next-auth/react";
import { SignInButton } from "./SignInButton";

export default async function SignIn() {
  const providers = (await getProviders()) || {};

  return (
    <div>
      <h1>Sign in</h1>
      <SignInButton providers={providers} />
    </div>
  );
}
