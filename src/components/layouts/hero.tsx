import {useTranslation} from "react-i18next";
import home_dark_right from '../../assets/app/dark/home_right.png';
import home_light_right from '../../assets/app/light/home_right.png';

export default function Hero(){
  const { t } = useTranslation();

  return (
    <div id="home" className="bg-white dark:bg-black hero-bg">
      <div className="block-container min-h-screen flex items-center justify-center lg:justify-between flex-col lg:flex-row-reverse">

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <img
              src={home_dark_right}
              alt="Planix Mockup"
              className="up-down hidden dark:block relative z-10 transition-opacity duration-500"
            />
            <img
              src={home_light_right}
              alt="Planix Mockup"
              className="up-down block dark:hidden relative z-10 transition-opacity duration-500 "
            />
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary dark:text-gray-50">{t("Organisez votre vie avec simplicité !")}</h1>
          <p className="py-6">
            {t("Planix vous aide à planifier")}
          </p>
          <button className="button" >{t("Télécharger sur Play Store")}</button>
        </div>
      </div>
    </div>
  )
}