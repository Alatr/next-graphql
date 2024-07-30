"use client";

import { SessionProvider } from "next-auth/react";

export function AuthWrapper({ session, children }: React.PropsWithChildren) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      {children}
    </SessionProvider>
  );
}
