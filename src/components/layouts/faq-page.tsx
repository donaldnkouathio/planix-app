// pages/faq.tsx
import React, { useState } from "react";
import faqData_fr from "/src/datas/faq_fr.json";
import faqData_en from "/src/datas/faq_en.json";
import MaterialIcon from "/src/components/ui/material-icon";
import Text from "/src/components/ui/text";
import {useTranslation} from "react-i18next";

export default function FAQPage() {
  const { t, i18n } = useTranslation();

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<Record<number, number | null>>({});

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const toggleQuestion = (catIndex: number, qIndex: number) => {
    setActiveQuestion(prev => ({
      ...prev,
      [catIndex]: prev[catIndex] === qIndex ? null : qIndex,
    }));
  };

  const faqData = i18n.language === "fr" ? faqData_fr : faqData_en;

  return (
    <div id="faq" className="margin-top">
      <div className="block-container">
        <Text type="h1" label={t("Foire aux Questions")}/>
        <Text label={t("Retrouvez ici toutes les réponses aux questions fréquentes sur Planix.")}/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {faqData.map((category, catIndex) => (
            <div
              key={catIndex}
              className="overflow-hidden"
            >
              {/* Header catégorie */}
              <div
                onClick={() => toggleCategory(catIndex)}
                className="w-full shadow-sm  cursor-pointer flex justify-between items-center p-5 text-left font-semibold text-lg bg-white dark:bg-primary/30 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-primary/35 transition"
              >
                <Text label={category.title} type="h3"/>
                {activeCategory === catIndex ? (
                  <MaterialIcon name="keyboard_arrow_up" className="dark:text-white text-primary"/>
                ) : (
                  <MaterialIcon name="keyboard_arrow_down" className="dark:text-white text-primary"/>
                )}
              </div>

              {/* Contenu catégorie */}
              {activeCategory === catIndex && (
                <div className="text-gray-700 bg-gray-50 dark:text-white dark:bg-primary/20 transition">
                  {category.faq.map((item, qIndex) => (
                    <div key={qIndex} className="border-t border-gray-100 dark:border-gray-700">
                      <button
                        onClick={() => toggleQuestion(catIndex, qIndex)}
                        className="flex cursor-pointer justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 dark:hover:bg-primary/25"
                      >
                        <span className="font-medium">{item.question}</span>
                        {activeQuestion[catIndex] === qIndex ? (
                          <MaterialIcon name="keyboard_arrow_up" className="dark:text-white text-primary"/>
                        ) : (
                          <MaterialIcon name="keyboard_arrow_down" className="dark:text-white text-primary"/>
                        )}
                      </button>

                      {activeQuestion[catIndex] === qIndex && (
                        <div className="px-5 pb-4 whitespace-pre-line">
                          <Text label={item.answer}/>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
