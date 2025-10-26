import { useEffect, useState } from "react";
import MaterialIcon from "/src/components/ui/material-icon";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={` flex justify-center items-center  h-10 w-10
        fixed bottom-14 lg:bottom-6 right-6 z-50 
        bg-primary dark:bg-white 
        rounded-lg shadow-lg transition-all duration-300 
        hover:scale-110 cursor-pointer
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <MaterialIcon name="arrow_drop_up" className="mx-1 text-white dark:text-primary"/>
    </div>
  );
}
