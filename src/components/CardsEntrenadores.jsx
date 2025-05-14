import React from "react";

export default function CardsEntrenadores() {
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
        <p>{"nombres"}</p>
        <p>
          <strong>Apellidos:</strong>
        </p>
        <p>{"apellidos"}</p>
        <p>
          <strong>Rama:</strong>
        </p>
        <p>{"rama"}</p>
        <p>
          <strong>Categoria:</strong>
        </p>
        <p>{"categoria"}</p>
      </div>
    </div>
  );
}
