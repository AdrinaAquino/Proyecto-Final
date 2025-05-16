import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CardsEntrenadores from "../components/CardsEntrenadores";
import { users } from "../axios/auth/login";

export default function Entrenadores() {
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
      <div className="min-h-screen flex flex-wrap justify-center gap-5 w-95/100 py-10">
        {data
          .filter((entrenador) => entrenador.role_id === 2)
          .map((entrenador) => (
            <CardsEntrenadores key={entrenador.id} entrenador={entrenador} />
          ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
