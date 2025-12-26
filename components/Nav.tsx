"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log("this is the pathname:" + pathname);

  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`${
            link.path === pathname &&
            "text-primary-default border-b-2 border-primary-default"
          } capitalize font-medium hover:text-primary-default transition-all duration-200`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
