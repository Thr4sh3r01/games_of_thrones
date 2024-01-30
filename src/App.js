import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GamesContextProvider } from "./Contexto/Contexto";
import Home from "./componentes/Home/Home";
import Personajes from "./componentes/Personajes/Personajes";
import Casas from "./componentes/Casas/Casas.jsx";

function App() {
  return (
    <div>
      <GamesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/Casas" element={<Casas />}></Route>
          </Routes>
        </BrowserRouter>
      </GamesContextProvider>
    </div>
  );
}

export default App;
