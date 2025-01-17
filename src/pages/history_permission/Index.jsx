import React, { useContext, useEffect, useState } from "react";
import BottomNavbar from "@/components/BottomNavbar";
import HeaderInfo from "@/components/HeaderInfo";
import MonthPicker from "@/components/MonthPicker";
import YearPicker from "@/components/YearPicker";
import SpinnerLoading from "@/components/SpinnerLoading";
import TableHistoryPermission from "./components/TableHistoryPermission";
import { month, year } from "@/lib/util/date.js";
import historyPermissionFetch from "@/lib/fetch/historyPermissionFetch";
function HistoryPermission() {
  const [dateInfo, setDateInfo] = useState({
    month: month,
    year: year,
  });
  const [historyPermission, setHistoryPermission] = useState({
    loading: true,
    data: [],
  });
  const getHistoryPermission = async (event) => {
    if (event) {
      event.preventDefault();
    }
    historyPermissionFetch(dateInfo.month, dateInfo.year, (res) =>
      setHistoryPermission({
        loading: false,
        data: res.data,
      })
    );
  };
  useEffect(() => {
    getHistoryPermission();
  }, []);
  return (
    <>
      <HeaderInfo />
      <section className="w-full px-2  py-4">
        <p className=" font-bold">History Cuti Bulan Ini</p>
        <form
          action=""
          className="w-full my-3 flex items-center"
          id="form-filter-presensi"
          onSubmit={getHistoryPermission}
        >
          <div className="w-full mr-2">
            <MonthPicker
              onChange={(e) =>
                setDateInfo({ ...dateInfo, month: e.target.value })
              }
            />
          </div>

          <div className="w-full mr-2">
            <YearPicker
              onChange={(e) =>
                setDateInfo({ ...dateInfo, year: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Filter
          </button>
        </form>
        <div className="w-full">
          {historyPermission.loading ? (
            <SpinnerLoading />
          ) : (
            <TableHistoryPermission data={historyPermission.data} />
          )}
        </div>
      </section>
      <BottomNavbar />
    </>
  );
}

export default HistoryPermission;
