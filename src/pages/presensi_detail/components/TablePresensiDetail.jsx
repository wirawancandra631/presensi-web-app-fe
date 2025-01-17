import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EmptySkeleton from "@/components/EmptySkeleton";
import SpinnerLoading from "@/components/SpinnerLoading";
import { useEffect } from "react";
import presensiDetailFetch from "@/lib/fetch/presensiDetailFetch";
function TablePresensiDetail() {
  const { id } = useParams();
  const [presensi, setPresensi] = useState({
    loading: true,
    data: null,
  });
  const successCallback = (res) => {
    setPresensi({
      loading: false,
      data: res.data,
    });
  };
  const getDetailPresensi = async () => {
    presensiDetailFetch(id, successCallback);
  };
  useEffect(() => {
    getDetailPresensi();
  }, []);
  if (presensi.loading) {
    return <SpinnerLoading />;
  } else if (!presensi.data) {
    return <EmptySkeleton />;
  } else {
    return (
      <table className="mt-4 text-sm w-full">
        <tbody>
          <tr>
            <td className="p-2 border border-slate-200 bg-white">
              Jam Masuk Presensi
            </td>
            <td className="p-2 border border-slate-200 bg-white text-center">
              {presensi.data.presensi_in_time}
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-200 bg-white">
              Status Presensi Masuk
            </td>
            <td className="p-2 border border-slate-200 bg-white text-center">
              {presensi.data.presensi_in_status}
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-200 bg-white">
              Jam Presensi Keluar
            </td>
            <td className="p-2 border border-slate-200 bg-white text-center">
              {presensi.data.presensi_out_time
                ? presensi.data.presensi_out_time
                : "-"}
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-200 bg-white">
              Status Presensi Keluar
            </td>
            <td className="p-2 border border-slate-200 bg-white text-center">
              {presensi.data.presensi_out_status}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TablePresensiDetail;
