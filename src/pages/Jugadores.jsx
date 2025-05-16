import React, { useEffect, useState } from "react";
import CardsJugadores from "../components/CardsJugadores";
import Footer from "../components/Footer";
import { users } from "../axios/auth/login";

export default function Jugadores() {
  const [data, setData] = useState([]);

  useEffect(() => {
    users()
      .then((rs) => setData(rs))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 w-95/100 py-10">
        {data
          .filter((jugador) => jugador.role_id === 3)
          .map((jugador) => (
            <CardsJugadores key={jugador.id} jugador={jugador} />
          ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
