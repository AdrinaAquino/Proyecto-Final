import React from "react";

export default function CardsEntrenadores({ entrenador }) {
  const { firstname, midlename, lastName, secondlastname, role_id } =
    entrenador || {};
  return (
    <div>
      <div className="relative border border-blue-300 rounded-xl bg-blue-50 w-70  h-fit p-1">
        <div className="rounded-xl overflow-hidden h-35">
          <img
            src={`/entrenador.jpg`}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <p>
          <strong>Nombres:</strong>
        </p>
        <p>
          {firstname} {midlename}
        </p>
        <p>
          <strong>Apellidos:</strong>
        </p>
        <p>
          {lastName} {secondlastname}
        </p>
        <p>
          <strong>Categoria:</strong>
        </p>
        <p>{role_id === 2 ? "Entrenador" : ""}</p>
      </div>
    </div>
  );
}
