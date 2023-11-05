"use client";

import { UserButton } from "@clerk/nextjs";
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useSideMenu } from "../_context/side-menu";

export const Navbar = () => {
  const { isOpen, toggle } = useSideMenu();
  return (
    <nav className="flex justify-between">

      <button
        onClick={toggle}
        className="text-default-400 hover:text-default-900"
      >
        {isOpen ? (
          <ArrowRightIcon />
        ) : (
          <ArrowLeftIcon />
        )}
      </button>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};
