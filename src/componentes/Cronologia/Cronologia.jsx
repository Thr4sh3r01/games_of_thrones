import { useContext, useState, useEffect } from "react";
import React from "react";
import { GamesContext } from "../../Contexto/Contexto";
import "./Cronologia.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const Cronologia = () => {
  const { characters } = useContext(GamesContext);
  const [copiCharacters, setCopiCharacters] = useState([...characters]);

  useEffect(() => {
    const nuevaCopia = [...characters];
    nuevaCopia.sort((a, b) => a.age - b.age);
    setCopiCharacters(nuevaCopia);
  }, [characters]);

  const reverso = () => {
    setCopiCharacters([...copiCharacters].reverse());
  };

  return (
    <div className="cronologia1">
      <Header></Header>
      <div className="volverCro">
        <Link to="/">
          <img
            src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/dbfeb53b-7b64-4e55-984b-6e3f413a161c.svg"
            alt="home"
          />
        </Link>
      </div>
      <button onClick={reverso}>hago el reverso</button>
      <div>
        {copiCharacters.map((copiCharacter, index) => (
          <div key={index}>
            <img
              className="imagenCro"
              src={copiCharacter.image}
              alt={copiCharacter.name}
            />
            <p>{copiCharacter.name}</p>
            <p>{copiCharacter.age}</p>
          </div>
        ))}
      </div>
      <footer></footer>
    </div>
  );
};

export default Cronologia;
