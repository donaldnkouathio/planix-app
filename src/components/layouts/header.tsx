import React, { useEffect, useState } from "react";
import logo from "/src/assets/logo.png";
import MaterialIcon from "/src/components/ui/material-icon";
import { useTranslation } from "react-i18next";
import useTheme from "/src/hooks/useTheme";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkData = [
    { title: t("home"), href: "/#home" },
    { title: t("features"), href: "/#features" },
    { title: t("faq"), href: "/#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full mt-1 mx-1 rounded-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="block-container flex flex-row justify-between py-4 items-center">
        {/* LOGO */}
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <img src={logo} alt="Planix logo" className="h-[20px]" />
          <div className="link">Planix</div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-12 items-center">
          <nav className="flex flex-row gap-4">
            {linkData.map((link, index) => (
              <a href={link.href} className="link" key={index}>
                {link.title}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            <div className="cursor-pointer" onClick={toggleTheme}>
              <MaterialIcon
                name={theme === "light" ? "dark_mode" : "light_mode"}
                className="dark:text-white text-primary"
              />
            </div>

            <div className="cursor-pointer" onClick={handleLanguage}>
              <MaterialIcon
                name={
                  i18n.language === "en"
                    ? "language_french"
                    : "language_gb_english"
                }
                className="dark:text-white text-primary"
              />
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Menu"
          >
            <MaterialIcon
              name={menuOpen ? "close" : "menu"}
              className="dark:text-white text-primary text-[24px]"
            />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`lg:hidden fixed top-[70px] left-0 w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg px-6 py-6 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {linkData.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex gap-6 mt-6 border-t border-gray-200 dark:border-gray-700 pt-4 justify-center">
          <div className="cursor-pointer" onClick={()=> {
            toggleTheme();
            setMenuOpen(false)
          }}>
            <MaterialIcon
              name={theme === "light" ? "dark_mode" : "light_mode"}
              className="dark:text-white text-primary"
            />
          </div>

          <div className="cursor-pointer" onClick={handleLanguage}>
            <MaterialIcon
              name={
                i18n.language === "en"
                  ? "language_french"
                  : "language_gb_english"
              }
              className="dark:text-white text-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
