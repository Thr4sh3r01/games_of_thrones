import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GamesContextProvider } from "./Contexto/Contexto";
import Home from "./componentes/Home/Home";
import Personajes from "./componentes/Personajes/Personajes";

function App() {
  return (
    <div>
      <GamesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Personajes />} />
          </Routes>
        </BrowserRouter>
      </GamesContextProvider>
    </div>
  );
}

export default App;
