import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header2 from "../header/Header2";

const DetallePersonaje = () => {
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
              <h2>Casa</h2>
            </li>
            <li>
              <h2>Alianzas</h2>
              <p>{character.alliances}</p>
            </li>
            <li>
              <h2>Apariciones</h2>
              <p>{character.episodes}</p>
            </li>
            <li>
              <h2>Padre</h2>
              <p>{character.parents}</p>
            </li>
            <li>
              <h2>Descendientes</h2>
            </li>
            <li>
              <h2>Titulos</h2>
              <p>{character.titles}</p>
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export default DetallePersonaje;
