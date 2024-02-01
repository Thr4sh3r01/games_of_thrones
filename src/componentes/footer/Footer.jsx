import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="Base">
      <span className="enlaces">
        <Link className="casas Text-Style-2" to="/casas">
          {t("casas")}
        </Link>
        <Link className="personajes Text-Style-2" to="/personajes">
          {t("personajes")}
        </Link>
        <Link className="Cronologia Text-Style-2" to="/cronologia">
          {t("cronologia")}
        </Link>
      </span>
    </div>
  );
};

export default Footer;
