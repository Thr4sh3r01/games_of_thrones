import React, { useContext } from "react";
import { GamesContext } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";

const Personajes = () => {
  const { characters } = useContext(GamesContext);
  console.log(characters);
  return (
    <div>
      <h1>PERSONAJES</h1>
      <Link to="/">
        <button>HOME</button>
      </Link>
      {characters.map((character, index) => (
        <div key={index}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Personajes;
