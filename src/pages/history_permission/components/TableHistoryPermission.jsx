import React from "react";
import EmptySkeleton from "@/components/EmptySkeleton";
import { BASEURL } from "@/lib/fetch/baseURL";
function TableHistoryPermission({ data }) {
  if (data.length <= 0) {
    return <EmptySkeleton />;
  }
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Tanggal
          </th>
          <th scope="col" className="px-6 py-3">
            Lampiran
          </th>
          <th scope="col" className="px-6 py-3">
            Alasan
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr className="bg-white border-b  " key={d.id_permission}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {d.date}
            </th>
            <td className="px-6 py-4">
              <img
                src={`${BASEURL}/img/envelope/` + d.envelope_file}
                alt=""
                className="w-[80px] h-[80px]"
              />
            </td>
            <td className="px-6 py-4">{d.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableHistoryPermission;
