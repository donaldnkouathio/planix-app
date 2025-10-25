import Text from "/src/components/ui/text";
import mockup_dark_2 from "/src/assets/app/mockup_dark_2.png";
import Card from "/src/components/ui/card";
import policyData_fr from "/src/datas/policy_fr.json";
import {useTranslation} from "react-i18next";
import useTheme from "/src/hooks/useTheme";
import {useEffect, useState} from "react";

interface IFeature{
  title: string;
  description: string;
  icon: string;
}

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="policy" className="margin-top">
      <div  className="block-container flex flex-col lg:flex-row justify-between gap-6">

        <aside className="flex-1/3 hidden lg:flex">
          <nav className="text-start">
            <ul className="flex flex-col gap-2 text-lg bg-gray-50 dark:bg-gray-600 shadow-sm rounded-lg p-2 ">
              {policyData_fr.sections.map((service) => (
                <li key={service.title} className={`rounded-lg hover:bg-primary`}>
                  <a
                    href={`#${service.title}`}
                    className={`p-2 text-gray-600 dark:text-gray-50 block hover:text-white`}
                  >
                    {t(service.title)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex-2/3 ">
          <Text label={"Dernière mise à jour : "+policyData_fr.lastUpdated}/>
          <Text label={"Politique de confidentialité"} type="h1"/>

          <div className="flex flex-col gap-6">
            {
              policyData_fr.sections.map((section, index) => (
                <div key={index} id={section.title}>
                  <Text label={section.title} type="h2"/>

                  {section.content &&
                    <Text label={section.content}/>
                  }

                  <div className="flex flex-col gap-4">
                    {section.subsections &&
                      section.subsections.map((subsection, index) => (
                        <div key={index}>
                          <Text label={subsection.title} type="h3"/>
                          <Text label={subsection.content}/>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}