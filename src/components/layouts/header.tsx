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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-sm"
          : ""
      }`}
    >
      <div className="block-container navbar">
        <div className="flex-1 text-xl font-semibold">Planix</div>

        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li><a>Accueil</a></li>
            <li><a>Fonctionnalités</a></li>
            <li>
              <details>
                <summary>Plus</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Contact</a></li>
                  <li><a>À propos</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="flex-none lg:hidden">
          <ul className="menu menu-horizontal px-1">
            <li><a>Menu</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
