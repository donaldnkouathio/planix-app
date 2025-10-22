import { useState } from 'react'
import './App.css'
import {useTranslation} from "react-i18next";
import useTheme from "../hooks/useTheme";

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="max-w-sm rounded-lg shadow-2xl hidden lg:block"
              />
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

export default App
