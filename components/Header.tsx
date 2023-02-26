import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellAlertIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Menu from "./Menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/assets/images/netflix-logo.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="Netflix Logo"
        />

        <Menu />

        <ul className="hidden md:flex space-x-4">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6 " />
        <p className="hidden lg:inline">Kids</p>
        <BellAlertIcon className="h-6 w-6" />
        <Link href="/plans">
          <Image
            src="/assets/images/netflix-avatar.png"
            alt="Plans"
            className="cursor-pointer rounded"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
