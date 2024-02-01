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
    <div className="Base">
      <Header></Header>
    <SimpleBar> 
      <div className="gallery">
        {characters.map((character, index) => (

          <div className="card" key={index}>
            <img className="characterImage" src={character.image} alt={character.name} />
              <Link to={`/personajes/${character.id}`}>
                <h1 className="perName">{character.name}</h1>
              </Link>
          </div>
        ))}
      </div>
    </SimpleBar>  
      <Footer></Footer>
    </div>
  );
};

export default Personajes;
