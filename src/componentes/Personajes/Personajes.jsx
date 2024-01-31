import React, { useContext } from "react";
import { GamesContext } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Personajes = () => {
  const { characters } = useContext(GamesContext);
  console.log(characters);
  return (
    <div>
      <Header></Header>
      {characters.map((character, index) => (
        <div key={index}>
          <img src={character.image} alt={character.name} />
          <Link to={`/personajes/${character.id}`}>
            <h2>{character.name}</h2>
          </Link>
        </div>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default Personajes;
