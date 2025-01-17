import React, { useContext, useEffect, useState } from "react";
import HeaderInfo from "@/components/HeaderInfo";
import BottomNavbar from "@/components/BottomNavbar";
import MonthPicker from "@/components/MonthPicker";
import YearPicker from "@/components/YearPicker";
import TableHistoryPresensi from "@/pages/history_presensi/components/TableHistoryPresensi";
import SpinnerLoading from "@/components/SpinnerLoading";
import historyPresensiFetch from "@/lib/fetch/historyPresensiFetch";
import { month, year } from "@/lib/util/date";
function HistoryPresensiPage() {
  const [dateInfo, setDateInfo] = useState({
    month: month,
    year: year,
  });
  const [history, setHistory] = useState({
    loading: true,
    data: [],
  });
  const successCallback = (res) => {
    setHistory({
      loading: false,
      data: res.data,
    });
  };
  const filterPresensi = async function (event) {
    if (event) {
      event.preventDefault();
    }
    historyPresensiFetch(dateInfo.month, dateInfo.year, successCallback);
  };

  useEffect(() => {
    filterPresensi();
  }, []);
  return (
    <>
      <HeaderInfo />
      <section className="w-full px-2 py-4">
        <p className=" font-bold">History presensi bulan ini</p>
        <form
          action=""
          className="w-full my-3 flex items-center"
          id="form-filter-presensi"
          onSubmit={filterPresensi}
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
          {!history.loading ? (
            <TableHistoryPresensi data={history.data} />
          ) : (
            <SpinnerLoading />
          )}
        </div>
      </section>
      <BottomNavbar />
    </>
  );
}

export default HistoryPresensiPage;
