"use client";

import { Authenticator } from "@aws-amplify/ui-react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator>{children}</Authenticator>;
}
