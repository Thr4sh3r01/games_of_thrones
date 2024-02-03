import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const cambioLenguaEn = () => {
    i18n.changeLanguage("en");
  };
  const cambioLenguaEs = () => {
    i18n.changeLanguage("es");
  };
  return (
    <div className="encabezado">
      {/* <Link to="/">
        <img
          src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/dbfeb53b-7b64-4e55-984b-6e3f413a161c.svg"
          alt="home"
        />
      </Link> */}
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

export default Header;
