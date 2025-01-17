import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import EmptySkeleton from "@/components/EmptySkeleton";
function TableHistoryPresensi({ data }) {
  if (data.length <= 0) {
    return <EmptySkeleton />;
  }
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((h) => (
            <tr className="bg-white border-b  " key={h.id_presensi}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {h.date_presensi}
              </th>
              <td className="px-6 py-4">
                <p>
                  <small>Presensi Masuk {h.presensi_in_status}</small>
                  <small className="block mt-2">
                    Presensi Masuk {h.presensi_out_status}
                  </small>
                </p>
              </td>
              <td className="px-6 py-4">
                <Link to={`/presensi/${h.id_presensi}`}>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaEye />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableHistoryPresensi;
