import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from "../axios/auth/login";
import { useNavigate } from "react-router";

export default function NewUser() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const onSubmit = async (request) => {
    setError("");
    setLoading(true);
    try {
      const status = await create(request);
      if (status === 201) {
        navigator(request.role_id === "2" ? "/entrenadores" : "/jugadores");
      } else {
        setError("Error al crear el usuario. Intenta nuevamente.");
      }
    } catch (error) {
      setError("Ocurrió un error al crear el usuario. Verifica los datos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuevo Usuario</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        role="profile"
        className="space-y-6"
      >
        <fieldset className="border border-gray-300 p-5 rounded-lg bg-[#eaf4ffa9]">
          <legend className="text-xl font-semibold text-gray-700">
            Información Personal
          </legend>

          <label className="block mt-4">
            <span className="text-gray-600">Primer Nombre</span>
            <input
              type="text"
              {...register("firstname")}
              required
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Segundo Nombre</span>
            <input
              type="text"
              {...register("midlename")}
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600 ">Primer Apellido</span>
            <input
              type="text"
              {...register("lastname")}
              required
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Segundo Apellido</span>
            <input
              type="text"
              {...register("secondlastname")}
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>
        </fieldset>

        <fieldset className="border border-gray-300 p-5 rounded-lg bg-[#eaf4ff]">
          <legend className="text-xl font-semibold text-gray-700">
            Contacto
          </legend>

          <label className="block mt-4">
            <span className="text-gray-600">Correo Electrónico</span>
            <input
              type="email"
              {...register("email")}
              required
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Teléfono</span>
            <input
              type="tel"
              {...register("phone")}
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Password</span>
            <input
              type="password"
              {...register("password")}
              required
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Teléfono de Emergencia</span>
            <input
              type="tel"
              {...register("emergencyphone")}
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Dirección</span>
            <input
              type="text"
              {...register("address")}
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            />
          </label>
        </fieldset>

        <fieldset className="border border-gray-300 p-5 rounded-lg bg-[#eaf4ff]">
          <legend className="text-xl font-semibold text-gray-700">Rol</legend>

          <label className="block mt-4">
            <span className="text-gray-600">Rol</span>
            <select
              {...register("role_id")}
              required
              className="hover:bg-[#f0fcd386] mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-[#f0fcd386]"
            >
              <option value="1">Administrador</option>
              <option value="2">Entrenador</option>
              <option value="3">Jugador</option>
            </select>
          </label>
        </fieldset>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </form>
    </section>
  );
}
