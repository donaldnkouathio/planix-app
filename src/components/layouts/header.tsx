import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10); // devient transparent si scroll > 10px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full mt-1 mx-1 rounded-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-sm"
          : ""
      }`}
    >
      <div className="block-container flex flex-row justify-between py-4">
        <div className="flex-1 text-xl font-semibold">Planix</div>

        <div className="flex-none hidden lg:block">
          <nav className="flex flex-row gap-4">
            <a href="#home" className="link">Accueil</a>
            <a href="#features" className="link">Fonctionnalités</a>
          </nav>
        </div>

        <div className="flex-none lg:hidden">
          <div>Menu</div>
        </div>
      </div>
    </header>
  );
}
