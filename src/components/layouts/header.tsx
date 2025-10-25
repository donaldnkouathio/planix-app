import React, { useEffect, useState } from "react";
import logo from "/src/assets/logo.png";
import MaterialIcon from "/src/components/ui/material-icon";
import {useTranslation} from "react-i18next";
import useTheme from "/src/hooks/useTheme";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10); // devient transparent si scroll > 10px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLanguage = () => {
    i18n.language === "fr" ? i18n.changeLanguage("en") : i18n.changeLanguage("fr");
  }

  const linkData = [
    {
      title: t("home"),
      href: "/#home",
    },
    {
      title: t("features"),
      href: "/#features",
    },
    {
      title: t("faq"),
      href: "/#faq",
    }
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full mt-1 mx-1 rounded-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-sm"
          : ""
      }`}
    >
      <div className="block-container flex flex-row justify-between py-4">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <img src={logo} alt="Planix logo" className="h-[20px]"/>
          <div className="link">Planix</div>
        </div>

        <div className="hidden lg:flex gap-12">
          <nav className="flex flex-row gap-4">
            {linkData.map((link, index) => (
              <a href={link.href} className="link" key={index}>{link.title}</a>
            ))}
          </nav>

          <div className="flex gap-4">
            <div className="cursor-pointer" onClick={toggleTheme}>
              <MaterialIcon name={theme === "light" ? "dark_mode" : "light_mode"} className="dark:text-white text-primary"/>
            </div>

            <div className="cursor-pointer" onClick={handleLanguage}>
              <MaterialIcon name={i18n.language === "en" ? "language_french" : "language_gb_english"} className="dark:text-white text-primary"/>
            </div>
          </div>
        </div>

        <div className="flex-none lg:hidden">
          <div>
            <MaterialIcon name="menu" className="dark:text-white text-primary"/>
          </div>
        </div>
      </div>
    </header>
  );
}
