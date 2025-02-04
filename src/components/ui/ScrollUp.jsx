"use client";

import { useEffect, useState } from "react";

export default function ScrollUp() {
  const scrollHeight = 100;
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= scrollHeight) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {showScrollUp && (
          <button
            className="fixed bottom-3 lg:bottom-10 right-3 lg:right-10 text-4xl text-green-700 dark:text-green-500 rounded scrollup z-40"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-7"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.293 12.707L12 10.414l-4.293 4.293l-1.414-1.414L12 7.586l5.707 5.707l-1.414 1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
