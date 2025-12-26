"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiHome6Fill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  {
    name: "home",
    path: "/",
    icon: <RiHome6Fill />,
  },
  {
    name: "resume",
    path: "/resume",
    icon: <RiHome6Fill />,
  },
  {
    name: "work",
    path: "/work",
    icon: <RiHome6Fill />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <RiHome6Fill />,
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-primary-default scale-x-[-1]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-bg-primary border-none shadow-none">
        {/* <SheetTitle className="text-xl font-bold mb-4">Menu</SheetTitle> */}
        <div className="text-center mt-32 mb-0 text-2xl">
          <Link href="/">
            <SheetTitle className="text-4xl font-semibold text-white">
              Paul<span className="text-primary-default">.</span>
            </SheetTitle>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-8 justify-center items-center">
          {Links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-primary-default border-b-2 border-primary-default"
                } text-xl capitalize hover:text-primary-default transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
