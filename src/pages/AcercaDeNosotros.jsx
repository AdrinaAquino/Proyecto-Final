import React from "react";
import Footer from "../components/Footer";

export default function AcercaDeNosotros() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center py-10">
        <div className="flex flex-col gap-5 items-center md:flex-row md:justify-around">
          <div className="w-70 md:w-100 md:h-90 bg-gray-300/50 p-4 rounded-lg shadow-md">
            <h1 className="font-semibold text-2xl mb-2">ABOUT US</h1>
            <p className="text-justify">
              Somos un equipo de vóley apasionado por el deporte, la superación
              y el trabajo en equipo. Nacimos con el objetivo de crear un
              espacio donde jugadores de diferentes niveles puedan crecer,
              aprender y disfrutar del voleibol en un ambiente inclusivo y
              motivador. Valoramos la amistad, el respeto y el compromiso dentro
              y fuera de la cancha. Entrenamos con dedicación, jugamos con el
              corazón y siempre buscamos dar lo mejor de nosotros en cada
              encuentro.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden w-70 md:w-100 h-90 rounded-md shadow-md">
            <img
              src="/medallas.jpg"
              alt="foto del equipo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row-reverse md:justify-around">
          <div className="w-70 md:w-100 md:h-90 bg-gray-300/50 p-4 rounded-lg shadow-md">
            <h1 className="font-semibold text-2xl mb-2">FUNDACIÓN</h1>
            <p className="text-justify">
              Nuestro equipo de voleibol <strong>Candelaria</strong> fue fundado
              en el 17 de febrero del año 2018 con el sueño de formar una
              comunidad unida por la pasión por este deporte. Desde nuestros
              inicios, hemos trabajado con esfuerzo y dedicación para crecer
              tanto en lo deportivo como en lo humano. A lo largo de los años,
              hemos sumado jugadores comprometidos, participado en torneos
              locales y creado un ambiente donde la amistad y el respeto son tan
              importantes como el juego en sí
            </p>
          </div>
          <div className="overflow-hidden w-70 md:w-100 h-90 rounded-md shadow-md">
            <img
              src="/team.jpg"
              alt="foto del equipo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
