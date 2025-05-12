import React from "react";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className=" flex items-center justify-center h-1/3 md:h-full">
          <img
            src="fondo1.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Formulario Login */}
        <div className="flex flex-col justify-center items-center bg-white h-2/3 shadow-lg p-6 md:w-100 md:absolute md:left-1/2 md:top-50 md:-translate-x-1/2">
          <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
          <form className="w-full max-w-sm">
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
