import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuth(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/", { replace: true });
  };

  const publicLinks = (
    <>
      <NavItem to="/" label="Home" />
      <NavItem to="/acercadenosotros" label="Acerca de Nosotros" />
      <NavItem to="/login" label="Login" />
    </>
  );

  const privateLinks = (
    <>
      <NavItem to="/jugadores" label="Jugadores" />
      <NavItem to="/entrenadores" label="Entrenadores" />
      <NavItem to="/profile" label="Perfil" />
      <NavItem to="/newuser" label="Nuevo Usuario" />

      {/* Botón de cerrar sesión */}
      <button
        onClick={handleLogout}
        className="font-bold hover:text-yellow-400"
      >
        Salir
      </button>
    </>
  );

  return (
    <div>
      {/* Barra superior */}
      <nav className="bg-[#7375e7] text-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="flex text-xl font-bold items-center gap-2">
            <img src="escudo1.png" alt="" className="w-10" />
            Escuela de Voleibol Candelaria
          </h1>

          {/* Hamburguesa móvil */}
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

          {/* Menú desktop */}
          <ul className="hidden md:flex space-x-6">
            {isAuth ? privateLinks : publicLinks}
          </ul>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="z-10 md:hidden mt-4 w-45 rounded-2xl bg-[#5496e1c4] text-white font-semibold h-80 absolute right-0 top-11 cursor-pointer">
          {(isAuth ? privateLinks : publicLinks)?.props?.children.map(
            (child, idx) =>
              React.cloneElement(child, {
                key: idx,
                onClick: () => {
                  toggleMenu();
                  child.props.onClick && child.props.onClick();
                },
                className: "block w-full px-4 py-2 hover:bg-[#7375e7a5]",
              })
          )}
        </div>
      )}
    </div>
  );
}

function NavItem({ to, label, ...rest }) {
  return (
    <li {...rest}>
      <Link to={to} className="font-semibold hover:text-yellow-400">
        {label}
      </Link>
    </li>
  );
}
