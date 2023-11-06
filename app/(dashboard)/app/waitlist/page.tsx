import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { type Metadata } from "next";
import { Waitlist } from "../../_components/waitlist-table";

export const metadata: Metadata = {
  title: "Dashboard Waitlist",
};

export default async function WaitlistPage() {
  const user: User | null = await currentUser();
  const userMetadata = user?.publicMetadata;

  if (userMetadata?.role === "ADMIN") {
    return (
      <div>
        <h2 className="mb-6">Waitlist</h2>
        <Waitlist />
      </div>
    );
  }

  return (
    <div>
      <h2>Not Authorized</h2>
    </div>
  );
}

