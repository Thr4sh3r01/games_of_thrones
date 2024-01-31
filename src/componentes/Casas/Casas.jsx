import React, { useContext } from "react";
import { GamesContext } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";
import "../Casas/Casas.css";
import Footer from "../footer/Footer";
import Header2 from "../header/Header2";

const Casas = () => {
  const { houses } = useContext(GamesContext);
  console.log(houses);
  return (
    <div className="casa">
      <Header2></Header2>
      {houses.map((house, index) => (
        <div key={index}>
          <img src={house.image} alt={house.name} />
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
