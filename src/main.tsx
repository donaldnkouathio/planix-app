import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "/src/layout";
import {I18nextProvider} from "react-i18next";
import i18n from "/src/i18n";
import {ThemeProvider} from "/src/theme/themeContext";

const basePath = import.meta.env.VITE_BASE_PATH || "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Layout />
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
