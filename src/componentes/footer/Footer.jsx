import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <span className="enlaces">
        <Link className="casas Text-Style-2" to="/casas">
          Casas
        </Link>
        <Link className="personajes Text-Style-2" to="/personajes">
          Personajes
        </Link>
        <Link className="Cronologia Text-Style-2" to="/cronologia">
          Cronologia
        </Link>
      </span>
    </div>
  );
};

export default Footer;
