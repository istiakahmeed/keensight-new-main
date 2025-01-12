import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import ConsultationButton from "../Hero/Button";

const Navbar = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky Menu Handler
  useEffect(() => {
    const handleStickyMenu = () => {
      if (window.scrollY >= 80) {
        setStickyMenu(true);
      } else {
        setStickyMenu(false);
      }
    };

    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const closeNavbar = () => {
    setNavigationOpen(false);
  };

  const scrollToSection = (path) => {
    // Adjust path for internal IDs
    const elementId = path.startsWith("/#") ? path.slice(2) : path.slice(1);
    const element = document.getElementById(elementId);

    if (element) {
      const offset = -80; // Adjust offset for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  };

  return (
    <header
      className={`backdrop-blur-md font-semibold transition duration-500 top-0 z-50 w-full py-2 mt-2 mx-auto left-0 right-0 ${
        stickyMenu
          ? "xl:w-10/12 md:w-10/12 dark:shadow-inner font-semibold fixed top-2 bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md !py-2 transition-width duration-700 shadow-2xl dark:hover:shadow-2xl"
          : ""
      } ${!navigationOpen ? "rounded-full" : ""}`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:flex 2xl:px-0">
        {/* Logo */}
        <div className="flex w-full items-center justify-between 2xl:w-1/4">
          <Link href="/" onClick={() => scrollToSection("/")}>
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-55 p-5 hover:scale-110 hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] dark:block rounded-lg transition-all duration-300"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-55 p-5 hover:scale-110 hover:drop-shadow-2xl dark:hidden rounded-lg transition-all duration-300 hover:rounded-3xl"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            aria-label="hamburger-toggler"
            className="block 2xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`invisible h-0 w-full items-center justify-between overflow-hidden 2xl:visible 2xl:flex 2xl:h-auto 2xl:w-full ${
            navigationOpen
              ? "navbar !visible mt-4 text-center text-xl min-h-screen h-auto transition-all ease-in-out animate-slideFromTop p-7.5 shadow-solid-5 mb-10 overflow-y-auto scrollbar-hide"
              : "rounded-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key}>
                  <a
                    href={menuItem.path}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(menuItem.path);
                      closeNavbar();
                    }}
                    className={
                      pathUrl === menuItem.path
                        ? "text-black text-lg dark:text-white hover:text-black duration-300 ease-in-out hover:text-xl"
                        : "text-black text-lg dark:text-white hover:text-black dark:hover:text-white duration-300 ease-in-out hover:text-xl"
                    }
                  >
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggler and Button */}
          <div className="mt-7 flex flex-col 2xl:flex-row items-center gap-6 2xl:mt-0">
            <ThemeToggler />
            <ConsultationButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
