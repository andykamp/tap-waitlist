"use client"

import { trpc } from "@/trpc/client";

type useWaitListAccessProps = {
  user: any;
}

export default async function useWaitListAccess(props: useWaitListAccessProps) {
  const { user } = props;

  const {
    data: waitlistItem,
    isLoading,
    error,
  } = trpc.waitlist.getUserWaitList.useQuery({ email: (user as any).email });
  console.log('waitListItem',);

  return { waitlistItem, isLoading, error };
}


