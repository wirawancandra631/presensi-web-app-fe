import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { PresensiTodayContext } from "@/context/PresensiTodayContext";
import {
  checkCanPresensiIn,
  checkCanPresensiOut,
} from "@/lib/util/checkCanPresensi";
export function CardSkeleton() {
  return (
    <div className="w-[47%]  mr-2 mb-2 border border-slate-200 bg-slate-100 rounded-md">
      <div className="p-2 w-full text-center ">Absensi Masuk</div>
      <div className="p-2 bg-white text-center ">
        <p className="font-bold p-1.5 w-[100px] bg-slate-200 my-3"></p>
        <Link className="w-full flex items-center justify-center mt-2  block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"></Link>
      </div>
    </div>
  );
}
export function CardActionPresensiIn({ profil }) {
  const { dataPresensiToday } = useContext(PresensiTodayContext);
  if (profil) {
    return (
      <div className="w-[47%]  mr-2 mb-2 border border-slate-200 bg-slate-100 rounded-md">
        <div className="p-2 w-full text-center ">Absensi Masuk</div>
        <div className="p-2 bg-white text-center ">
          <p className="font-bold">{profil.start_time}</p>
          {checkCanPresensiIn(dataPresensiToday.data) ? (
            <Link
              to={"/make-presensi-in"}
              className="w-full flex items-center justify-center mt-2  block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <FaArrowRight />
              <span className="ml-2">Clock In</span>
            </Link>
          ) : (
            <Link
              to={"#"}
              className="w-full flex items-center justify-center mt-2  block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <FaCheckCircle />
              <span className="ml-2">Sudah Presensi </span>
            </Link>
          )}
        </div>
      </div>
    );
  }
  return <CardSkeleton />;
}

export function CardActionPresensiOut({ profil }) {
  const { dataPresensiToday } = useContext(PresensiTodayContext);

  if (profil) {
    return (
      <div className="w-[47%]  mr-2 mb-2 border border-slate-200 bg-slate-100 rounded-md">
        <div className="p-2 w-full text-center ">Absensi Pulang</div>
        <div className="p-2 bg-white text-center ">
          <p className="font-bold">{profil.end_time}</p>
          {checkCanPresensiOut(dataPresensiToday).status ? (
            <Link
              to={"/make-presensi-out"}
              className="w-full flex items-center justify-center mt-2  block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <FaArrowRight />
              <span className="ml-2">Clock Out</span>
            </Link>
          ) : (
            <Link
              to={"#"}
              className="w-full flex items-center justify-center mt-2  block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <FaCheckCircle />
              <span className="ml-2">
                {checkCanPresensiOut(dataPresensiToday).message}
              </span>
            </Link>
          )}
        </div>
      </div>
    );
  }
  return <CardSkeleton />;
}
