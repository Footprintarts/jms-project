"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/images/logo-jms.png";
import userImg from "../assets/images/avatar-icon.png";
import menuIcon from "../assets/images/menu_icon.svg";

const navLinks = [
  { path: "/homepage", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/ourservices", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const headerRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  // Close menu on navigation
  const closeMenu = () => {
    setMobileNavVisible(false);
  };

  // Sticky header logic
  useEffect(() => {
    const handleStickyHeader = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    };

    window.addEventListener("scroll", handleStickyHeader);

    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="centered-row justify-between">
          {/* Logo */}
          <Link href="/">
            <div>
              <Image
                src={logo}
                alt="logo"
                width={160}
                className="-ml-6 md:-ml-0"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navigation hidden md:block">
            <ul className="menu centered-row gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={pathname === item.path ? "active" : "inactive"}
                >
                  {item.display}
                </Link>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Login Button for Desktop */}
            <Link href="/login">
              <button className="hidden bg-primaryColor py-6 px-10 text-white font-semibold h-[44px] md:flex items-center justify-center rounded-[50px] btn-hover">
                Login
              </button>
            </Link>

            {/* Menu Icon */}
            <span className="block md:hidden" onClick={toggleMenu}>
              <Image
                src={menuIcon}
                alt="menu_icon"
                className="w-8 cursor-pointer"
              />
            </span>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`absolute left-0 top-0 z-50 w-full h-screen bg-white transform ${
              isMobileNavVisible ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <div className="bg-zinc-50 p-4 border-b border-blue-700 text-lg">
              <button
                className="text-primaryColor bg-zinc-50"
                onClick={closeMenu}
              >
                Back
              </button>
            </div>
            <nav className="flex flex-col items-center">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={closeMenu}
                  className="w-full bg-white text-primaryColor p-4 border-b border-zinc-300 text-lg uppercase text-center hover:bg-primaryColor hover:text-white"
                >
                  {item.display}
                </Link>
              ))}
            </nav>
            {/* Login Button for Mobile */}
            <div className="p-4 flex justify-center">
              <Link href="/login" onClick={closeMenu}>
                <button className="w-full bg-primaryColor py-6 px-10 text-white font-semibold h-[44px] flex items-center justify-center rounded-[50px] btn-hover">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
