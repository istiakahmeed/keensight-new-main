import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const basePath = '/analyticshome1'; // Set basePath directly here for the test branch

  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-transparent mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="logo"
        width={26}
        height={26}
        className="dark:hidden duration-300 transition-all hover:w-7 hover:h-7 hover:rounded-full"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt="logo"
        width={26}
        height={26}
        className="hidden dark:block duration-300 transition-all hover:w-7 hover:h-7 hover:animate-spin"
      />
    </button>
  );
};

export default ThemeToggler;
