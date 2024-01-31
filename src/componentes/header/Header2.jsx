import React from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <div>
      <div>
        <Link to="/personajes">VOLVER</Link>
        <img
          src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/842be3f9-cd11-4614-9bc1-1cb828173304.svg"
          alt="Español"
        />
        <img
          src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/23549f44-866d-4fcf-93b6-951ac1256135.svg"
          alt="Español"
        />
      </div>
    </div>
  );
};

export default Header2;
