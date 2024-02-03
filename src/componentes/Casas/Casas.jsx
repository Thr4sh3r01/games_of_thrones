import React, { useContext, useState, useEffect } from "react";
import { GamesContext } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";
import "./Casas.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SimpleBar from "simplebar-react";

const Casas = () => {
  const { houses } = useContext(GamesContext);
  const [copiHouses, setCopiHouses] = useState([...houses]);
  const [inputValue, setInputValue] = useState("");

  const getFiltro = async (inputValue) => {
    let url = "http://localhost:3000/houses";
    if (inputValue !== "") {
      url = `http://localhost:3000/houses?name=${inputValue}`;
    }
    const filtroApi = await fetch(url);
    const filtroJson = await filtroApi.json();
    console.log(filtroJson);
    setCopiHouses(filtroJson);
  };

  useEffect(() => {
    const nuevaCopia = [...houses];
    setCopiHouses(nuevaCopia);
  }, [houses]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    getFiltro(event.target.value);
  };

  return (
    <div className="casas">
      <Header></Header>
      <div className="buscador">
        <input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="name"
        ></input>
      </div>

      {copiHouses.map((house, index) => (
        <div className="escudos" key={index}>
          <img className="imagen" src={house.image} alt={house.name} />
          <Link to={`/casas/${house.id}`}>
            <h2>{house.name}</h2>
          </Link>
        </div>
      ))}

      <Footer></Footer>
    </div>
  );
};

export default Casas;
