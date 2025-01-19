import React, { createContext, useEffect, useState } from "react";
import historyPresensiTodayFetch from "@/lib/fetch/historyPresensiTodayFetch";

export const PresensiTodayContext = createContext();
export function PresensiTodayProvider({ children }) {
  const [dataPresensiToday, setDataPresensiToday] = useState({
    loading: true,
    data: null,
  });
  const successCallback = (res) => {
    setDataPresensiToday({
      loading: false,
      data: res,
    });
  };
  const errorCallback = (res) => {
    setDataPresensiToday({ loading: false, data: null });
  };
  useEffect(() => {
    historyPresensiTodayFetch(successCallback, errorCallback);
  }, []);
  return (
    <PresensiTodayContext.Provider value={{ dataPresensiToday }}>
      {children}
    </PresensiTodayContext.Provider>
  );
}
