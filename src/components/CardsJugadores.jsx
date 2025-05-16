import React, { useEffect, useState } from "react";
import { users } from "../axios/auth/login";

export default function CardsJugadores({ jugador }) {
  const { firstname, midlename, lastName, secondlastname, role_id } =
    jugador || {};
  return (
    <div>
      <div className="relative border border-blue-300 rounded-xl bg-blue-50 w-70  h-fit p-1">
        <div className="rounded-xl overflow-hidden h-35">
          <img
            src={`/jugador.jpg`}
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
        <p>{role_id === 3 ? "Jugador" : ""}</p>
      </div>
    </div>
  );
}
