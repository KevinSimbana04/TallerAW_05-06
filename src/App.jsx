
import {  BrowserRouter,  Routes,  Route } from "react-router";
import Primero from "../pages/Primero.jsx"
import Segundo from "../pages/Segundo.jsx"
import MostrarPersonajes from "../pages/MostrarPersonajes.jsx"
import Props from "../pages/Props.jsx"
import Zustand from "../pages/Zustand.jsx"
import LandingPage from "../pages/LandingPage.jsx";
import Renderizado from "../pages/Renderizado";
import LocalStorage from "../pages/LocalStorage";
import Descripcion from "../pages/Descripcion.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Renderizado />} />
          <Route path="descripcion" element={<Descripcion/>} />
          <Route path="useState" element={<Primero/>} />
          <Route path="useffect" element={<Segundo/>} />
          <Route path="customhook" element={<MostrarPersonajes />} />
          <Route path="props" element={<Props/>} />
          <Route path="zustand" element={<Zustand/>} />
          <Route path="renderizado" element={<Renderizado />} />
          <Route path="localStorage" element={<LocalStorage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App