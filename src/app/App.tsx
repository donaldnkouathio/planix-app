import { useState } from 'react'
import './App.css'
import {useTranslation} from "react-i18next";
import useTheme from "../hooks/useTheme";
import Header from "/src/components/layouts/header";
import Hero from "/src/components/layouts/hero";

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
      <div>
        <Header />
        <Hero />
      </div>
  )
}

export default App
