import { ProfileForm } from "../components/ProfileForm";

export default function Profile() {
  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil</h2>
      <ProfileForm />
    </section>
  );
}
