import React, { useContext } from "react";
import { GamesContext } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SimpleBar from 'simplebar-react';
import './Personajes.css';


const Personajes = () => {
  const { characters } = useContext(GamesContext);
  console.log(characters);
  return (
    <div>
      <Header></Header>
      {characters.map((character, index) => (
        <SimpleBar>  
          <div className="contenedorPersonajes" key={index}>
            <img className="imagen" src={character.image} alt={character.name} />
              <Link to={`/personajes/${character.id}`}>
                <h2>{character.name}</h2>
              </Link>
          </div>
        </SimpleBar>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default Personajes;
