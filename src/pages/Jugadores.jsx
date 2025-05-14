import React from "react";
import CardsJugadores from "../components/CardsJugadores";
import Footer from "../components/Footer";

export default function Jugadores() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 w-95/100 py-10">
        <CardsJugadores />
        <CardsJugadores />
        <CardsJugadores />
        <CardsJugadores />
        <CardsJugadores />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
