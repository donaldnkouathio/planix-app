import {useTranslation} from "react-i18next";
import useTheme from "/src/hooks/useTheme";
import light1 from '../../assets/app/light1.png';

export default function Hero(){
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();


  return (
    <div className="">
      <div className="block-container min-h-screen flex items-center justify-between flex-col lg:flex-row-reverse">
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={light1}
            className="max-w-sm rounded-lg hidden lg:block"
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Organisez votre vie avec simplicité !</h1>
          <p className="py-6">
            Planix vous aide à planifier, suivre et visualiser vos événements récurrents et non récurrents, où que vous soyez.
          </p>
          <button className="btn btn-primary" onClick={toggleTheme}>Télécharger sur Play Store</button>
        </div>
      </div>
    </div>
  )
}