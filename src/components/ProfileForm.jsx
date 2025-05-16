import { useForm } from "react-hook-form";
import { profile, update } from "../axios/auth/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isLoading },
  } = useForm({
    defaultValues: async () => await profile(),
  });
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (profileData) => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const payload = { ...profileData, status: 1 };
      const status = await update(payload, payload.id);
      if (status === 200) {
        setSuccess("Usuario actualizado con éxito");
        setTimeout(() => {
          navigator("role_id" === 2 ? "/entrenadores" : "/jugadores");
        }, 2000);
      } else {
        setError("No se pudo actualizar el usuario");
      }
    } catch (error) {
      console.error(error);
      setError("Error de red o del servidor");
    } finally {
      setLoading(false);
    }
  };
  const globalLoading = loading || isSubmitting || isLoading;
  return (
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
          <span className="text-gray-600">Primer Apellido</span>
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

      <fieldset className="border border-gray-300 p-5 rounded-lg bg-[#eaf4ffa9]">
        <legend className="text-xl font-semibold text-gray-700">
          Contacto
        </legend>

        <label className="block mt-4">
          <span className="text-gray-600">Correo Electrónico</span>
          <input
            type="email"
            {...register("email")}
            readOnly
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
      {error && (
        <p className="text-red-600 text-center bg-red-300 rounded-md font-bold -mt-4 mb-2 text-lg">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-800 text-center bg-green-300 rounded-md font-bold -mt-4 mb-2 text-lg">
          {success}
        </p>
      )}

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
