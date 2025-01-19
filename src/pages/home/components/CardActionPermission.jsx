import React, { useContext } from "react";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PermissionTodayContext } from "@/context/PermissionTodayContext";
import { checkCanMakePermission } from "@/lib/util/checkCanMakePermission";
function CardActionPermission() {
  const { permissionToday } = useContext(PermissionTodayContext);
  return (
    <div className="w-[47%]  mr-2 mb-2 border border-slate-200 bg-slate-100 rounded-md">
      <div className="p-2 w-full text-center ">Pengajuan Cuti</div>
      <div className="p-2 bg-white text-center ">
        {checkCanMakePermission(permissionToday) ? (
          <Link
            to={"/make-permission"}
            className="w-full flex items-center justify-center mt-2  block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <FaPlusCircle />
            <span className="ml-2">Request</span>
          </Link>
        ) : (
          <Link
            to={"#"}
            className="w-full flex items-center justify-center mt-2  block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            <FaCheckCircle />
            <span className="ml-2">Sudah Pengajuan</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CardActionPermission;
