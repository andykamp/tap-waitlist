"use client";

import { useUser } from "@clerk/nextjs";
import { trpc } from "@/trpc/client";

export default function Welcome() {
  const { user, isLoaded } = useUser();
  if(!isLoaded) return <div>loading...</div>;
  if (!user) return <div>no user</div>;

  const {
    data: dbUser,
    isLoading,
  } = trpc.user.getUser.useQuery({
    userId: user.id,
    name: user.fullName || '',
    email: user.emailAddresses[0].emailAddress,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>User from database</div>
      <div>{JSON.stringify(dbUser)}</div>
    </div>
  );
};

