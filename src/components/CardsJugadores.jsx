import React from "react";

export default function CardsJugadores() {
  return (
    <div>
      <div className="relative border border-blue-300 rounded-xl bg-blue-50 w-70  h-fit p-1">
        <div className="rounded-xl overflow-hidden h-35">
          <img
            src={`/categorias/${"category?.id"}.png`}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <p>
          <strong>Horas de servicio reportadas:</strong>
        </p>
        <p>{"amount_reported"} horas</p>
        <p>
          <strong>Descripción de la actividad:</strong>
        </p>
        <p>{"description"}</p>
        <p>
          <strong>Tipo de actividad:</strong>
        </p>
        <p>{"category.name"}</p>
        <p>
          <strong>Documento:</strong>
        </p>
      </div>
    </div>
  );
}
