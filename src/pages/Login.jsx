import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../axios/auth/login";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData.entries());

    try {
      const res = await login(credentials);
      if (res.status !== "ok") throw new Error("Credenciales incorrectas");

      localStorage.setItem("token", res.token);
      navigate("/jugadores", { replace: true });
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
      setLoading(false);
    }
  }

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <div className="flex flex-col h-screen items-center">
        <div className=" flex items-center justify-center h-30 w-full md:h-full">
          <img
            src="fondo1.png"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-75 md:h-120 bg-[#deefff9f] rounded-lg shadow-md shadow-cyan-900 p-6 md:w-100 md:absolute md:left-1/2 md:top-50 md:-translate-x-1/2">
          <img src="escudo1.png" alt="" className="w-20 md:w-40" />
          <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
          <form className="w-full max-w-sm" onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm font-medium mb-4">
                Usuario o contraseña incorrectos
              </p>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-[#9cebef91] hover:bg-[#d7e88ba5] border-2"
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
