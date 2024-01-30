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
  return (
    <GamesContext.Provider value={{ characters }}>
      {children}
    </GamesContext.Provider>
  );
};
