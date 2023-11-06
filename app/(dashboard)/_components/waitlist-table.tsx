"use client";
import { trpc } from "@/trpc/client";
import { type FC } from "react";
import { WaitListInvitationForm } from "./waitlist-form";

export const Waitlist: FC = () => {
  const {
    data: waitlist,
    isLoading,
    error,
  } = trpc.waitlist.getWaitList.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something wrong happened...</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between ">
        <div className="">Name</div>
        <div className="">Email</div>
        <div className="">InvitationStatus</div>
        <div className="">Action</div>
      </div>
      {waitlist.map((item) => (
        <div key={item.id} className="w-full flex flex-row justify-between">
          <div className="">{item.name}</div>
          <div className="">{item.email}</div>
          <div className="">
            {item.invitationSentAt ? (
              <span className="text-sm">Invited</span>
            ) : (
              <span className="text-sm">No invitation sent</span>
            )}
          </div>

          <div>
            {!item.invitationSentAt ? (
              <WaitListInvitationForm invitationId={String(item.id)} />
            ):
              <span className="text-sm">Invitation has been sendt</span>
            }
          </div>
        </div>
      ))}
    </div >
  )
};

