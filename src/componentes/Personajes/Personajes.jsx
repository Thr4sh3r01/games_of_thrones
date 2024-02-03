import React, { useContext, useEffect } from "react";
import { GamesContext } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SimpleBar from "simplebar-react";
import "./Personajes.css";
import { useState } from "react";

const Personajes = () => {
  const { characters } = useContext(GamesContext);
  const [copiCharacters, setCopiCharacters] = useState([...characters]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const nuevaCopia = [...characters];
    setCopiCharacters(nuevaCopia);
  }, [characters]);

  const getFiltro = async (inputValue) => {
    // const codificadoValor = encodeURIComponent(inputValue);
    let url = "http://localhost:3000/characters";
    if (inputValue !== "") {
      url = `http://localhost:3000/characters?name=${inputValue}`;
    }
    const filtroApi = await fetch(url);
    const filtroJson = await filtroApi.json();
    setCopiCharacters(filtroJson);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    getFiltro(event.target.value);
  };

  return (
    <div className="Base">
      <Header></Header>
      <div className="volver">
        <Link to="/">
          <img
            src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/dbfeb53b-7b64-4e55-984b-6e3f413a161c.svg"
            alt="home"
          />
        </Link>
      </div>
      <input
        onChange={handleInputChange}
        value={inputValue}
        placeholder="name"
      ></input>
      <SimpleBar>
        <div className="gallery">
          {copiCharacters.map((character, index) => (
            <div className="card" key={index}>
              <img
                className="characterImage"
                src={character.image}
                alt={character.name}
              />
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
