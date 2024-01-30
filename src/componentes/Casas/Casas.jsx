import React, { useContext } from "react";
import { GamesContext } from "../../Contexto/Contexto";

const Casas = () => {
  const {houses} = useContext(GamesContext);
  console.log(houses);
  return <div><p>Correcto</p></div>;
};

export default Casas;
