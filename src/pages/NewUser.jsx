import React from "react";
import { useForm } from "react-hook-form";
import { create } from "../axios/auth/login";
import { useNavigate } from "react-router";

export default function NewUser() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (request) => {
    try {
      const status = await create(request);
      if (status === 201) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuevo Usuario</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        role="profile"
        className="space-y-6"
      >
        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">
            Información Personal
          </legend>

          <label className="block mt-4">
            <span className="text-gray-600">Primer Nombre</span>
            <input
              type="text"
              {...register("firstname")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Segundo Nombre</span>
            <input
              type="text"
              {...register("midlename")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Primer Apellido</span>
            <input
              type="text"
              {...register("lastname")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Segundo Apellido</span>
            <input
              type="text"
              {...register("secondlastname")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
        </fieldset>

        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">
            Contacto
          </legend>

          <label className="block mt-4">
            <span className="text-gray-600">Correo Electrónico</span>
            <input
              type="email"
              {...register("email")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Teléfono</span>
            <input
              type="tel"
              {...register("phone")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Password</span>
            <input
              type="password"
              {...register("password")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Teléfono de Emergencia</span>
            <input
              type="tel"
              {...register("emergencyphone")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Dirección</span>
            <input
              type="text"
              {...register("address")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </label>
        </fieldset>

        <fieldset className="border border-gray-300 p-5 rounded-lg">
          <legend className="text-xl font-semibold text-gray-700">Rol</legend>

          <label className="block mt-4">
            <span className="text-gray-600">Rol</span>
            <select
              {...register("role_id")}
              className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <option value="1">Administrador</option>
              <option value="2">Entrenador</option>
              <option value="3">Jugador</option>
            </select>
          </label>
        </fieldset>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
          >
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
}
