import Text from "/src/components/ui/text";
import mockup_dark_2 from "/src/assets/app/mockup_dark_2.png";
import Card from "/src/components/ui/card";
import policyData_fr from "/src/datas/policy_fr.json";
import policyData_en from "/src/datas/policy_en.json";
import {useTranslation} from "react-i18next";
import useTheme from "/src/hooks/useTheme";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const policyData = i18n.language === "en" ? policyData_en : policyData_fr;

  return (
    <section id="privacy-policy" className="margin-top">
      <div className="block-container flex flex-col lg:flex-row justify-between gap-6">

        <aside className="flex-1/3 lg:flex">
          <nav className="text-start">
            <ul className="flex flex-col gap-2 text-md bg-gray-50 dark:bg-gray-600 shadow-sm rounded-lg p-2 ">
              {policyData.sections.map((service) => (
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
          <Text label={t("Dernière mise à jour le ")+policyData.lastUpdated}/>
          <Text label={t("Politique de confidentialité")} type="h1"/>
          <Text label={t("Merci d’utiliser Planix.")}/>
          <Text label={t("Cette politique de confidentialité décrit")}/>

          <div className="flex flex-col gap-6 mt-3">
            {
              policyData.sections.map((section, index) => (
                <div key={index} id={section.title} className="scroll-mt-[80px]">
                  <Text label={section.title} type="h2"/>

                  {section.content &&
                    <Text label={section.content}/>
                  }

                  <div className="flex flex-col gap-4 mt-2">
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