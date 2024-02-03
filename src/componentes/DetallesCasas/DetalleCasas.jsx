import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header3 from "../header/Header3";
import { useTranslation } from "react-i18next";
import "./DetalleCasas.css";

const DetalleCasas = () => {
  const { t } = useTranslation();
  const [house, setHouse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getHouses = async () => {
      const housesApi = await fetch(`http://localhost:3000/houses/${id}`);
      const housesJson = await housesApi.json();
      setHouse(housesJson);
    };
    getHouses();
  }, []);
  console.log(house);

  return (
    <div className="detalleCasas">
      <Header3></Header3>
      <span class="cabeza">
        <img src={house.image} alt={house.name} />
        <h1>{house.name}</h1>
      </span>
      <div>
        <ul className="texto">
          <li className="columna">
            <h2>{t("Region")}</h2>
            <p>{house.region}</p>
          </li>
          <li className="columna">
            <h2>{t("Alianzas")}</h2>
            <p>{house.alliances}</p>
          </li>
          <li className="columna">
            <h2>{t("Religiones")}</h2>
            <p>{house.religions}</p>
          </li>
          <li className="columna">
            <h2>{t("Fundacion")}</h2>
            <p>{house.foundation}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetalleCasas;
