"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi"; // Import Hamburger Icon
import { gsap } from "gsap";
import NewsLetter from "./NewsLetter";
import NavList from "./NavList";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark mode class to the HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // GSAP animation for the menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="fixed  top-0 right-0 left-0 z-50">
      <NewsLetter />
      <header className=" bg-background text-foreground  w-full border-b border-zinc-500 ">
        <div className="flex py-4 px-5 justify-between items-center">
          {/* Logo Section */}
          <div className="">
            <Link href="/home">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="h-auto w-auto"
              />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <GiHamburgerMenu size={30} />
            </button>
          </div>

          <div className="hidden lg:flex gap-5">
            <NavList />
          </div>

          {/* Buttons Section */}
          <div className="hidden lg:flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="border-2 border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-lg capitalize"
            >
              login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-[#00C7BE] border-2 border-[#00C7BE] text-white px-4 py-3 rounded-lg capitalize"
            >
              register now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={toggleDarkMode}
              className="border-2 p-2 rounded-lg border-black dark:border-white"
            >
              <Image
                src={isDarkMode ? "/light_mode.svg" : "/dark_mode.svg"}
                alt="lightDark mode"
                width="20"
                height="20"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden flex flex-col items-center space-y-4 p-4 bg-background text-foreground"
          >
            <NavList />
            <div className="flex items-center gap-5 md:space-y-2">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="border-2 border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-lg capitalize"
              >
                login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-[#00C7BE] border-2 border-[#00C7BE] text-white px-4 py-3 rounded-lg capitalize"
              >
                register now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={toggleDarkMode}
                className="border-2 p-2 rounded-lg border-black dark:border-white"
              >
                <Image
                  src={isDarkMode ? "/light_mode.svg" : "/dark_mode.svg"}
                  alt="lightDark mode"
                  width="20"
                  height="20"
                />
              </motion.button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
