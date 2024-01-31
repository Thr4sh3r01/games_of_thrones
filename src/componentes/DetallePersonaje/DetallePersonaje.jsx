import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header2 from "../header/Header2";
import { useTranslation } from "react-i18next";

const DetallePersonaje = () => {
  const { t } = useTranslation();
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await fetch(
        `http://localhost:3000/characters/${id}`
      );
      const characterJson = await charactersApi.json();
      setCharacter(characterJson);
    };
    getCharacters();
  }, []);
  console.log(character);
  return (
    <div>
      <Header2></Header2>
      <span>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <div>
          <ul>
            <li>
              <h2>{t("casas")}</h2>
            </li>
            <li>
              <h2>{t("Alianzas")}</h2>
              <p>{character.alliances}</p>
            </li>
            <li>
              <h2>{t("Apariciones")}</h2>
              <p>{character.episodes}</p>
            </li>
            <li>
              <h2>{t("Padre")}</h2>
              <p>{character.parents}</p>
            </li>
            <li>
              <h2>{t("Descendientes")}</h2>
            </li>
            <li>
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
