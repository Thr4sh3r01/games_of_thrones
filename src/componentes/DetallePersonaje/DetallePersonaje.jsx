import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header2 from "../header/Header2";
import { useTranslation } from "react-i18next";
import "./DetallePersonaje.css";

const DetallePersonaje = () => {
  const { t } = useTranslation();
  const [character, setCharacter] = useState([]);
  const [houses, setHouses] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await fetch(
        `http://localhost:3000/characters/${id}`
      );
      const characterJson = await charactersApi.json();
      setCharacter(characterJson);
      const getHouses = async () => {
        const housesApi = await fetch(
          `http://localhost:3000/houses?name=${characterJson.house}`
        );
        const housesJson = await housesApi.json();
        setHouses(housesJson[0]);
      };
      getHouses();
    };
    getCharacters();
  }, []);
  return (
    <div className="detapersonajes">
      <Header2></Header2>
      <span className="cuerpo">
        <img className="foto" src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <div className="textoCompleto">
          <ul className="texto2">
            <li className="columna2">
              <h2>{t("casas")}</h2>
              <img className="escudo" src={houses.image} alt={houses.name} />
            </li>
            <li className="columna2">
              <h2>{t("Alianzas")}</h2>
              <p>{character.alliances}</p>
            </li>
            <li className="columna2">
              <h2>{t("Apariciones")}</h2>
              <p>{character.episodes}</p>
            </li>
            <li className="columna2">
              <h2>{t("Padre")}</h2>
              <p>{character.parents}</p>
            </li>
            <li className="columna2">
              <h2>{t("Descendientes")}</h2>
            </li>
            <li className="columna2">
              <h2>{t("Titulos")}</h2>
              <p>{character.titles}</p>
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export default DetallePersonaje;
