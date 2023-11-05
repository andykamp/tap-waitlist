import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { type Metadata } from "next";
import Welcome from "./_components/welcome";

export const metadata: Metadata = {
  title: "Dashboard Waitlist",
};

export default async function WaitlistPage() {
  return (
    <div>
      <h2>Onboarding will show here</h2>
      <Welcome />
    </div>
  );
}


