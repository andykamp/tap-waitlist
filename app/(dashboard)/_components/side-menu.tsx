import { dashboardLinks, siteConfig } from "@/app/config";
import { Brand } from "@/components/brand";
import Link from 'next/link';

// import { currentUser } from "@clerk/nextjs";
// import { Link } from "@nextui-org/link";
// import FeedbackModal from "./feedback-modal";
import { SideMenuLink } from "./side-menu-link";
// import { SideMenuModules } from "./side-menu-modules";
import { SideMenuWrapper } from "./side-menu-wrapper";

export const DashboardSideMenu = async () => {
  // const user = await currentUser();
  return (
    <SideMenuWrapper>
      <div className="flex flex-1 flex-col gap-8 overflow-hidden pb-6">
        <div className="pl-4">
          <Brand size={36} />
        </div>
        <section className="pr-6">
          <ul>
            {dashboardLinks.map((link) => (
              <SideMenuLink key={link.href} {...link} />
            ))}
          </ul>
        </section>

        Modules will go here
        {/* <SideMenuModules /> */}
      </div>

      <div>
        <section className="pr-6">
          <ul>
            <li>
              FeedbackModal goes here
              {/* <FeedbackModal */}
              {/*   email={user?.emailAddresses[0]!.emailAddress ?? ""} */}
              {/* /> */}
            </li>
            <li>
              <Link
                href={siteConfig.discord}
                className="w-full justify-start text-default-500 hover:text-default-900"
              >
                Help & Support
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </SideMenuWrapper>
  );
};
