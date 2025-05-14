import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <div>
      <nav className="bg-[#7375e7] text-white p-4 shadow-md ">
        <div className="flex items-center justify-between">
          <h1 className="flex text-xl font-bold">
            <img src="escudo1.png" alt="" className="w-10" />
            Escuela de Voleibol Candelaria
          </h1>
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
              <Link to="/" className="font-semibold hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/acercadenosotros"
                className="font-semibold hover:text-yellow-400"
              >
                Acerca de Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/jugadores"
                className="font-semibold hover:text-yellow-400"
              >
                Jugadores
              </Link>
            </li>
            <li>
              <Link
                to="/entrenadores"
                className="font-semibold hover:text-yellow-400"
              >
                Entrenadores
              </Link>
            </li>
            <li>
              <Link to="/login" className="font-semibold hover:text-yellow-400">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Movil */}
      {open && (
        <div className="z-10 md:hidden mt-4 w-45 rounded-2xl bg-[#5496e1c4] text-white font-semibold h-80 absolute right-0 top-11 cursor-pointer">
          <Link
            to="/"
            className="block w-full px-4 py-2 hover:bg-[#7375e7a5]"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/acercadenosotros"
            className="block px-4 py-2 hover:bg-[#7375e7a5]"
            onClick={toggleMenu}
          >
            Acerca de Nosotros
          </Link>
          <Link
            to="/jugadores"
            className="block px-4 py-2 hover:bg-[#7375e7a5]"
            onClick={toggleMenu}
          >
            Jugadores
          </Link>
          <Link
            to="/entrenadores"
            className="block px-4 py-2 hover:bg-[#7375e7a5]"
            onClick={toggleMenu}
          >
            Entrenadores
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-[#7375e7a5]"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
