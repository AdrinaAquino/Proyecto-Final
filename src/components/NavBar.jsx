import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <div>
      <nav className="bg-[#7375e7] text-white p-4 shadow-md rounded-b-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Escuela de Voleibol Candelaria</h1>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-[#5496e1]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/* Desktop */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Acerca de Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Jugadores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Entrenadores
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Movil */}
      {open && (
        <div className="md:hidden mt-4 w-45 rounded-2xl bg-[#5496e19f] text-white font-semibold h-80 absolute right-0 top-11 cursor-pointer">
          <a href="#" className="block w-full px-4 py-2 hover:bg-[#7375e7a5]">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-[#7375e7a5]">
            Acerca de Nosotros
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-[#7375e7a5]">
            Jugadores
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-[#7375e7a5]">
            Entrenadores
          </a>
        </div>
      )}
    </div>
  );
}
