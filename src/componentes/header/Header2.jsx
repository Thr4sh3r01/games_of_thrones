import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header2.css";

const Header2 = () => {
  const { t, i18n } = useTranslation();

  const cambioLenguaEn = () => {
    i18n.changeLanguage("en");
  };
  const cambioLenguaEs = () => {
    i18n.changeLanguage("es");
  };
  return (
    <div className="encabezado2">
      <div className="volver">
        <Link to="/">
          <img
            src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/dbfeb53b-7b64-4e55-984b-6e3f413a161c.svg"
            alt="home"
          />
        </Link>
        <div className="return">
          <img
            src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/bd7a5dbd-9a2c-49a9-a500-522444eb8d54.svg"
            alt="flecha"
          />
          <Link to="/personajes">{t("volver")}</Link>
        </div>
      </div>
      <img
        onClick={cambioLenguaEs}
        src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/842be3f9-cd11-4614-9bc1-1cb828173304.svg"
        alt="Español"
      />
      <img
        onClick={cambioLenguaEn}
        src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/23549f44-866d-4fcf-93b6-951ac1256135.svg"
        alt="Español"
      />
    </div>
  );
};

export default Header2;
