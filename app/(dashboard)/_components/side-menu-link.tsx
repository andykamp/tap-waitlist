"use client";
import { cn } from "@/lib/utils/cn";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { type FC, type ReactNode } from "react";

type SideMenuLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export const SideMenuLink: FC<SideMenuLinkProps> = ({ href, label, icon }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "w-full justify-start text-default-500 hover:text-default-900",
          pathname === href && "text-default-900",
        )}
      >
        {label}
      </Link>
    </li>
  );
};
