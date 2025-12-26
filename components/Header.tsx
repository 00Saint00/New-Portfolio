import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 px-3 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            Paul<span className="text-primary-default">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/">
            {" "}
            <Button> Hire me </Button>{" "}
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
