import React, { createContext, useEffect, useState } from "react";
import { profile } from "../../axios/auth/login";
import { Navigate, Outlet } from "react-router";

export const ProfileContext = createContext();

export default function AuthLayout() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    profile()
      .then((rs) => setData(rs))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null; // spinner opcional

  // Si no hay sesión, redirige al login
  if (!data) return <Navigate to="/login" replace />;

  return (
    <ProfileContext value={{ data }}>
      <Outlet />
    </ProfileContext>
  );
}
