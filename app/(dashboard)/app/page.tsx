import { currentUser } from "@clerk/nextjs";
import { type Metadata } from "next";
// import useWaitListAccess from "../_components/waitlist-check";
import { redirect } from 'next/navigation';
// import { RecentModules } from "../_components/recent-modules";
import { siteConfig } from '@/app/config';

export const metadata: Metadata = {
  title: "Dashboard Home",
};

type QuoteType = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export default async function DashboardHome() {
  const user = await currentUser();
  // redirect to waitlist if access is not granted
  if (!user?.publicMetadata.invitedFromWaitlist) {
    redirect("/on-waitlist");
  }
  // redirect to onboarding if user has not completed it
  if (!user?.unsafeMetadata[siteConfig.onboardingCompletedKey]) {
    redirect("/onboarding");
  }

  const quote = await fetch(
    "https://api.quotable.io/random?minLength=100&maxLength=140",
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  ).then((res) => res.json() as Promise<QuoteType>);

  const date = new Date();
  const currentHour = date.getHours();
  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  const greet = `${greeting}${user?.firstName ? `, ${user?.firstName}` : ""}!`;
  const message = `"${quote.content}" - ${quote.author}`;

  return (
    <div>
      <h2>{greet}</h2>
      <p className="max-w-prose opacity-75 [&:not(:first-child)]:mt-2">
        {message}
      </p>

      <p>
        Recent modules will go here
      </p>
      {/* <RecentModules /> */}
    </div>
  );
}
