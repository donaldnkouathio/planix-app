import {useTranslation} from "react-i18next";
import useTheme from "/src/hooks/useTheme";
import mockup_dark from '../../assets/app/mockup_dark.png';

export default function Hero(){
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();


  return (
    <div id="home" className="bg-white dark:bg-black hero-bg">
      <div className="block-container min-h-screen flex items-center justify-center lg:justify-between flex-col lg:flex-row-reverse">

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/*<div
              className="absolute w-30 h-30 bg-black border rounded-full shadow-[0_0_880px_80px_rgba(24,119,242,0.6)]"></div>*/}
            <img
              src={mockup_dark}
              alt="Planix Mockup"
              className="up-down relative z-10"
            />
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary dark:text-gray-50">Organisez votre vie avec simplicité !</h1>
          <p className="py-6">
            Planix vous aide à planifier, suivre et visualiser vos événements récurrents et non récurrents, où que vous soyez.
          </p>
          <button className="button" onClick={toggleTheme}>Télécharger sur Play Store</button>
        </div>
      </div>
    </div>
  )
}