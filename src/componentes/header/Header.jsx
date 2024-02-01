import React, { useTransition } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { useTranslation } from "react-i18next";
import { reloadResources } from "i18next";


const Header = () => {
  const { i18n } = useTranslation();
  const cambioLenguaEn = () => {
    i18n.changeLanguage("en");
  };
  const cambioLenguaEs = () => {
    i18n.changeLanguage("es");
  };
  return (
    <div>
      <input></input>
      <Link to="/">
        <button>HOME</button>
        <img alt="cazita"/>
      </Link>
      <img
        onClick={cambioLenguaEs}
        src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/842be3f9-cd11-4614-9bc1-1cb828173304.svg"
        alt="Español/>
      <img
        onClick={cambioLenguaEn}
        src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/23549f44-866d-4fcf-93b6-951ac1256135.svg"
        alt="Español"
      />
    </div>
  );
};

export default Header;
