import React from "react";
import { useContext } from "react";
import SpinnerLoading from "@/components/SpinnerLoading";
import { PresensiTodayContext } from "@/context/PresensiTodayContext";
import EmptySkeleton from "@/components/EmptySkeleton";
function TableHistoryPresensiToday() {
  const { dataPresensiToday } = useContext(PresensiTodayContext);
  if (dataPresensiToday.loading) {
    return <SpinnerLoading />;
  } else if (!dataPresensiToday.data) {
    return <EmptySkeleton />;
  }
  return (
    <table className="w-full mt-2">
      <tbody>
        <tr>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            Jam Masuk
          </td>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            {dataPresensiToday.data.presensi_in_time}
          </td>
        </tr>

        <tr>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            Jam Pulang
          </td>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            {dataPresensiToday.data.presensi_out_time
              ? dataPresensiToday.data.presensi_out_time
              : "-"}
          </td>
        </tr>

        <tr>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            Status Presensi Masuk
          </td>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            {dataPresensiToday.data.presensi_in_status}
          </td>
        </tr>

        <tr>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            Status Presensi Keluar
          </td>
          <td className="text-sm p-2 border border-slate-400 bg-slate-100">
            {dataPresensiToday.data.presensi_out_status}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableHistoryPresensiToday;
