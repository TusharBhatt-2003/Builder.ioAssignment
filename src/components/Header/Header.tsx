"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi"; // Import Hamburger Icon
import NewsLetter from "./NewsLetter";
import NavList from "./NavList";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NewsLetter />
      <header className="bg-white w-full border-b border-zinc-500">
        <div className="flex py-4 px-5 justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link href="/home">
              <Image src="/logo.svg" alt="logo" width="85" height="85" />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <GiHamburgerMenu size={30} />
            </button>
          </div>

          <div className="hidden md:flex gap-5">
            <NavList />
          </div>

          {/* Buttons Section */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="border-2 border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-lg capitalize">
              login
            </button>
            <button className="bg-[#00C7BE] border-2 border-[#00C7BE] text-white px-4 py-3 rounded-lg capitalize">
              register now
            </button>
            <button className="border-2 p-2 rounded-lg border-black">
              <Image
                src="/dark_mode.svg"
                alt="lightDark mode"
                width="20"
                height="20"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-white">
            <NavList />
            <div className="flex md:flex-col items-center gap-5 md:space-y-2">
              <button className="border-2 border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-lg capitalize">
                login
              </button>
              <button className="bg-[#00C7BE] border-2 border-[#00C7BE] text-white px-4 py-3 rounded-lg capitalize">
                register now
              </button>
              <button className="border-2 p-2 rounded-lg border-black">
                <Image
                  src="/dark_mode.svg"
                  alt="lightDark mode"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
