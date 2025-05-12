import React from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import CardsJugadores from "./components/CardsJugadores";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}
