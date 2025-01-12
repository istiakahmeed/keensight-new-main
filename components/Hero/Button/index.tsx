"use client";

import { useState, useEffect } from "react";
import { PopupButton } from "@typeform/embed-react";
import { IoMdPeople } from "react-icons/io";

const ConsultationButton = ({ buttonText = "Schedule a Consultation", className = "", icon = <IoMdPeople /> }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`flex justify-center w-full ${className}`}>
      <PopupButton
        id={'https://calendly.com/jerryahmed127/30min'}
        className="flex items-center justify-center w-full rounded-full bg-black px-4 py-4 text-white duration-500 ease-in-out hover:bg-transparent hover:text-black hover:border border-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
      >
        <span className="text-sm sm:text-base whitespace-normal text-center">
          {buttonText}
        </span>
        <span className="ml-2 text-base sm:text-lg">{icon}</span>
      </PopupButton>
    </div>
  );
};

export default ConsultationButton;
