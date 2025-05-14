import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AcercaDeNosotros from "./pages/AcercaDeNosotros";
import Jugadores from "./pages/Jugadores";
import Entrenadores from "./pages/Entrenadores";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercadenosotros" element={<AcercaDeNosotros />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
