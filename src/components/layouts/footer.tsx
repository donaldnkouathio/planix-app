import {useTranslation} from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

    return (
      <footer id="footer" className="">
        <div  className="block-container py-4 border-t border-gray-900 dark:border-gray-700 flex gap-6 flex-col lg:flex-row justify-between items-center">
          <div className="flex"><a href="/privacy-policy">{t("Politique de confidentialité")}</a></div>
          <div className="flex text-xs">©{new Date().getFullYear()} Donald Nkouathio</div>
        </div>
      </footer>
    )
}