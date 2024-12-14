import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="hover:shadow-signUp flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-black dark:bg-gray-50 drop-shadow-2xl transition-all duration-300 ease-in-out hover:scale-125 hover:bg-opacity-80"
        >
          <span className="mt-[6px] h-4 w-4 rotate-45 border-t-4 border-l-4 border-white dark:border-black"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}
    </div>
  );
}
