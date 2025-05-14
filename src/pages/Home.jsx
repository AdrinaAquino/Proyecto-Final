import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-full">
      <div className="overflow-hidden h-85 shadow">
        <img
          src="red0.png"
          alt="foto del equipo"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="py-5 bg-[#4a9684d2] text-center font-bold md:text-2xl text-[#f8ff72] md:absolute md:top-35 md:rounded-2xl md:shadow-2xl">
        --- PROXIMO PARTIDO --- <br />
        FECHA 2 - SABADO - CANCHA-MUNICIPAL - 10:00 HS
        <br />
        CANDELARIA VS FATHNES
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around h-auto py-10 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-70 text-[#4a4040] rounded-md h-50 p-2 text-2xl text-center md:text-left">
          "El deporte es tu mejor aliado para sentirte bien y vibrar con
          energía. ¡Tu cuerpo te lo agradecerá!"
        </div>
        <div className="border-t md:border-t-0 md:border-l border-gray-400 w-4/5 md:w-auto h-0 md:h-40 my-4 md:my-0"></div>
        <div className="w-70 text-[#4a4040] rounded-md h-50 space-y-4 p-2 text-center md:text-left">
          <h1>
            <strong> -¡SÉ PARTE DE NUESTRO EQUIPO!</strong>
          </h1>
          <h2>INSCRIPCIONES ABIERTAS</h2>
          <button className="bg-[#9cebef91] rounded-md border-2 p-2 hover:bg-[#d7e88ba5] cursor-pointer">
            <Link to="/login" className="font-bold">
              Iniciar Sesión
            </Link>
          </button>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-gray-400 w-4/5 md:w-auto h-0 md:h-40 my-4 md:my-0"></div>
        <div className="w-70 text-[#4a4040] rounded-md h-50 space-y-2 p-2 text-center md:text-left">
          <h1>
            <strong>-CONTÁCTANOS</strong>
          </h1>
          <h2>Correo: candelaria@gmail.com</h2>
          <h2>Celular: +591 72471600</h2>
          <h2>Facebook: Escuela de Voleibol Candelaria</h2>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
