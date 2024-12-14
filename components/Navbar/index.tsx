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

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  const closeNavbar = () => {
    setNavigationOpen(false);
  };

  const scrollToSection = (id) => {
    // Check if the path is root ('/') and scroll to top
    if (id === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  
    // Remove leading '/' and ensure it has only a single '#' for valid CSS selector
    const elementId = id.startsWith('/#') ? id.replace('/#', '#') : id;
    const element = document.querySelector(elementId);
    
    if (element) {
      const offset = -120; // Adjust this value as needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;
  
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };
  


  return (
    <header
      className={`
      backdrop-blur-md font-semibold
      transition duration-500 
      top-0 z-50 w-full py-2 mt-2 
      mx-auto left-0 right-0
      ${stickyMenu ? "xl:w-10/12 md:w-10/12 dark:shadow-inner font-semibold fixed top-2 bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md !py-2 transition-width duration-700 shadow-2xl dark:hover:shadow-2xl" : ""}
      ${!navigationOpen ? "rounded-full" : ""}
    `}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between 2xl:w-1/4">
          <a id="#" href="/"  >
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
              className="w-55 p-5 hover:scale-110  hover:drop-shadow-2xl  dark:hidden rounded-lg transition-all duration-300 hover:rounded-3xl"
            />
          </a>

          <button
            aria-label="hamburger Toggler"
            className="block 2xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          className={`invisible h-0 w-full items-center justify-between overflow-hidden 2xl:visible 2xl:flex 2xl:h-auto 2xl:w-full ${navigationOpen
            ? "navbar !visible mt-4 text-center text-xl min-h-screen h-auto transition-all ease-in-out animate-slideFromTop p-7.5 shadow-solid-5 mb-10 overflow-y-auto scrollbar-hide"
            : "rounded-full"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu ? "group relative" : ""}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"} onClick={closeNavbar}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={menuItem.path}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(menuItem.path); // Pass path as it is
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

                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex flex-col 2xl:flex-row items-center gap-6 2xl:mt-0">
            <div className="flex justify-center items-center">
              <ThemeToggler />
            </div>
            <div className="flex justify-center items-center">
              <ConsultationButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
