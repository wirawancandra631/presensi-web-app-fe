import { createContext, useEffect, useState } from "react";
import historyPermissionTodayFetch from "../lib/fetch/historyPermissionTodayFetch";

export const PermissionTodayContext = createContext();

export function PermissionTodayProvider({ children }) {
  const [permissionToday, setPermissionToday] = useState(null);
  const successCallback = (res) => {
    setPermissionToday(res);
  };
  const errorCallback = (res) => {};
  const filteredPermissionToday = () => {
    historyPermissionTodayFetch(successCallback, errorCallback);
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
