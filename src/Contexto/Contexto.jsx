import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GamesContext = createContext();
const baseUrl = "http://localhost:3000/";

export const GamesContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [cronologia, setCronologia] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await fetch(`${baseUrl}characters`);
      const characterJson = await charactersApi.json();
      setCharacters(characterJson);
    };
    getCharacters();
  }, []);
  useEffect(() => {
    const getHouses = async () => {
      const housesApi = await fetch(`${baseUrl}houses`);
      const housesJson = await housesApi.json();
      setHouses(housesJson);
    };
    getHouses();
  }, []);

  return (
    <GamesContext.Provider value={{ characters, houses }}>
      {children}
    </GamesContext.Provider>
  );
};
