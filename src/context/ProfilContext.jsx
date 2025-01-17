import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import profilFetch from "@/lib/fetch/profilFetch";

export const ProfilContext = createContext();
export const ProfilProvider = () => {
  const [profil, setProfil] = useState(null);
  const successCallback = (res) => {
    setProfil(res.data);
  };
  const getProfil = async function () {
    profilFetch(successCallback);
  };
  useEffect(() => {
    getProfil();
  }, []);
  return (
    <ProfilContext.Provider value={{ profil, getProfil }}>
      <Outlet />
    </ProfilContext.Provider>
  );
};
