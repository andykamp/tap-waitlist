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
  } = trpc.onboarding.get.byUserId.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Welcome {user.fullName}!</h2>
      <p>Lets start with a simple onbarding:</p>
      <div>{JSON.stringify(dbUser)}</div>
    </div>
  );
};

