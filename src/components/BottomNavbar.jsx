import React from "react";
import {
  FaArrowRight,
  FaClock,
  FaDatabase,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function BottomNavbar() {
  return (
    <nav className=" md:w-[567px] mx-auto w-full  absolute bottom-0  bg-slate-200 shadow-xl text-sm p-4 z-50">
      <ul className="flex justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center  md:text-md text-sm text-blue-500 font-bold"
                : "flex flex-col items-center  md:text-md text-sm font-light"
            }
          >
            <FaHome className="mb-2" />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/history-presensi"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center  md:text-md text-sm text-blue-500 font-bold"
                : "flex flex-col items-center  md:text-md text-sm font-light"
            }
          >
            <FaClock className="mb-2" />
            <span>Riwayat Presensi</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/history-permission"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center  md:text-md text-sm text-blue-500 font-bold"
                : "flex flex-col items-center  md:text-md text-sm font-light"
            }
          >
            <FaDatabase className="mb-2" />
            <span>Riwayat Ijin</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profil"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center  md:text-md text-sm text-blue-500 font-bold"
                : "flex flex-col items-center  md:text-md text-sm font-light"
            }
          >
            <FaUser className="mb-2" />
            <span>Profil</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
