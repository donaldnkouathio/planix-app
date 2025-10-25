import Text from "/src/components/ui/text";
import mockup_dark_2 from "/src/assets/app/mockup_dark_2.png";
import Card from "/src/components/ui/card";
import {useTranslation} from "react-i18next";

interface IFeature{
  title: string;
  description: string;
  icon: string;
}

export default function Features() {
  const { t } = useTranslation();

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
    <section id="features" className="margin-top bg-white dark:bg-black">
      <div className="block-container flex flex-col lg:flex-row justify-between items-center">

        <div className="flex-1/3 px-4 hidden lg:flex">
          <img
            src={mockup_dark_2}
            alt="Planix Mockup"
            className="relative up-down z-10"
          />
        </div>

        <div className="flex-2/3">
          <Text label={t("features")} type="h1"/>

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