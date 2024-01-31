import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GamesContextProvider } from "./Contexto/Contexto";
import Home from "./componentes/Home/Home";
import Personajes from "./componentes/Personajes/Personajes";
import Casas from "./componentes/Casas/Casas.jsx";
import Cronologia from "./componentes/Cronologia/Cronologia.jsx";
import DetallePersonaje from "./componentes/DetallePersonaje/DetallePersonaje.jsx";
import DetalleCasas from "./componentes/DetallesCasas/DetalleCasas.jsx";

function App() {
  return (
    <div>
      <GamesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/casas" element={<Casas />} />
            <Route path="/cronologia" element={<Cronologia />} />
            <Route path="/personajes/:id" element={<DetallePersonaje />} />
            <Route path="/casas/:id" element={<DetalleCasas />} />
          </Routes>
        </BrowserRouter>
      </GamesContextProvider>
    </div>
  );
}

export default App;
