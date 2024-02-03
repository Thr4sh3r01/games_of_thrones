import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="base">
      <span className="enlaces">
        <Link className="textCasa" to="/casas">
          {t("casas")}
        </Link>
        <Link className="personajes" to="/personajes">
          {t("personajes")}
        </Link>
        <Link className="cronologia" to="/cronologia">
          {t("cronologia")}
        </Link>
      </span>
    </div>
  );
};

export default Footer;
