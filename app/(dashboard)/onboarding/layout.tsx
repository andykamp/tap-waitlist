import { TRPCReactProvider } from "@/trpc/client";
import { headers } from "next/headers";
import { type PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <TRPCReactProvider headers={headers()}>
      {children}
    </TRPCReactProvider>
  );
}
