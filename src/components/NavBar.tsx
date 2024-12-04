// import Link from "next/link";
"use client";
import Image from "next/image";
import logo from "../assets/images/logo-jms.png";
import userImg from "../assets/images/avatar-icon.png";
import menuIcon from "../assets/images/menu_icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const navLinks = [
  {
    path: "/homepage",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/ourservices",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const NavBar = () => {
  const pathname = usePathname();

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center " ref={headerRef}>
      <div className="container ">
        <div className="centered-row justify-between">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="logo"
              width={160}
              className="-ml-6 md:-ml-0"
            />
          </div>

          {/* Menu */}
          <div className="navigation" onClick={toggleMenu}>
            <ul className="menu centered-row gap-[2.7rem] ">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`${
                    pathname === item.path ? "active" : "inactive"
                  }`}
                >
                  {item.display}
                </Link>
              ))}
            </ul>
          </div>

          {/* NavRight */}

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link href="#">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <Image
                    src={userImg}
                    alt="image"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>
            </div>
            <Link href="/login">
              <button className="hidden bg-primaryColor py-6 px-10 text-white font-semibold h-[44px] md:flex items-center justify-center rounded-[50px] cursor-pointe btn-hover">
                Login
              </button>
            </Link>

            <span className="block md:hidden" onClick={toggleMenu}>
              <Image
                src={menuIcon}
                alt="menu_icon"
                className="w-8  cursor-pointer"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
