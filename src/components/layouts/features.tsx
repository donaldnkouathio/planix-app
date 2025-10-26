import Text from "/src/components/ui/text";
import chart_dark_right from '../../assets/app/dark/chart_left.png';
import chart_light_right from '../../assets/app/light/chart_left.png';
import Card from "/src/components/ui/card";
import {useTranslation} from "react-i18next";
import {useTheme} from "/src/theme/themeContext";
import MotionCard from "/src/components/ui/motion-card";

interface IFeature{
  title: string;
  description: string;
  icon: string;
}

export default function Features() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const featuresData : IFeature[] = [
    {
      title: t("Événements récurrents & non récurrents"),
      description: t("Gère tes tâches quotidiennes, réunions, projets ou routines hebdomadaires."),
      icon: "event",
    },
    {
      title: t("Historique et graphiques"),
      description: t("Visualise l’évolution de tes activités dans le temps grâce à des graphiques clairs et interactifs."),
      icon: "chart_data",
    },
    {
      title: t("Sauvegarde et restauration"),
      description: t("Sauvegarde de vos données localement ou sur Google Drive."),
      icon: "cloud_done",
    },
    {
      title: t("Thèmes et personnalisation"),
      description: t("Choisissez entre un thème clair et sombre selon vos préférences."),
      icon: "dark_mode",
    }
  ];

  return (
    <section id="features" className="margin-top bg-gray-100 dark:bg-black">
      <div className="block-container flex flex-col lg:flex-row justify-between items-center">

        <div className="flex-1/3 px-4 hidden lg:flex">
          <img
            src={theme === "light" ? chart_light_right : chart_dark_right}
            alt="Planix Mockup"
            className="relative up-down z-10 transition-opacity duration-500"
          />
        </div>

        <div className="flex-2/3">
          <MotionCard>
            <Text label={t("features")} type="h1"/>
          </MotionCard>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              featuresData.map((item: IFeature, index) =>(
                <Card key={index} title={item.title} description={item.description} icon={item.icon} />
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}