import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header2 from "../header/Header2";

const DetalleCasas = () => {
  const [house, setHouse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getHouses = async () => {
      const housesApi = await fetch(`http://localhost:3000/houses/${id}`);
      const housesJson = await housesApi.json();
      setHouse(housesJson);
    };
    getHouses();
  }, []);
  console.log(house);

  return (
    <div>
      <Header2></Header2>
      <span>
        <img src={house.image} alt={house.name} />
        <h1>{house.name}</h1>
      </span>
      <div>
        <ul>
          <li>
            <h2>Region</h2>
            <p>{house.region}</p>
          </li>
          <li>
            <h2>Alianzas</h2>
            <p>{house.alliances}</p>
          </li>
          <li>
            <h2>Religiones</h2>
            <p>{house.religions}</p>
          </li>
          <li>
            <h2>Fundacion</h2>
            <p>{house.foundation}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetalleCasas;
