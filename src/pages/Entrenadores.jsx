import React from "react";
import Footer from "../components/Footer";
import CardsEntrenadores from "../components/CardsEntrenadores";

export default function Entrenadores() {
  return (
    <div>
      <div className="min-h-screen flex flex-wrap justify-center gap-5 w-95/100 py-10">
        <CardsEntrenadores />
        <CardsEntrenadores />
        <CardsEntrenadores />
        <CardsEntrenadores />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
