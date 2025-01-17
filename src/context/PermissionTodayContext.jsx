import { createContext, useEffect, useState } from "react";
import historyPermissionFetch from "@/lib/fetch/historyPermissionFetch";
import historyPermissionTodayFetch from "../lib/fetch/historyPermissionTodayFetch";

export const PermissionTodayContext = createContext();

export function PermissionTodayProvider({ children }) {
  const [permissionToday, setPermissionToday] = useState(null);
  const filteredPermissionToday = () => {
    historyPermissionTodayFetch((res) => {
      setPermissionToday(res.data);
    });
  };
  useEffect(() => {
    filteredPermissionToday();
  }, []);
  return (
    <PermissionTodayContext.Provider value={{ permissionToday }}>
      {children}
    </PermissionTodayContext.Provider>
  );
}
