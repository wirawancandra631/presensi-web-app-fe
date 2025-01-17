import React, { useContext, useEffect, useState } from "react";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import { ProfilContext } from "@/context/ProfilContext";
import { clockShow, dateShow } from "@/lib/util/date";
import { BASEURL } from "@/lib/fetch/baseURL";
import ProfilImage from "/public/img/profil.png";

function HeaderInfoSkeleton() {
  return (
    <header className="w-full px-8 py-4 border-2 border-slate-200 flex justify-between bg-slate-50  ">
      <div className="flex items-center">
        <div className="w-[80px] h-[80px] bg-slate-200 rounded-full "></div>
        <div className="ml-2">
          <span className="block font-bold w-[100px] p-1.5 bg-slate-200 "></span>
          <span className="block font-bold w-[100px] p-1.5 bg-slate-200 my-2"></span>
          <p className="flex items-center">
            <FaLocationArrow className="text-sm mr-2" />
            <span className="block font-bold w-[100px] p-1.5 bg-slate-200"></span>
          </p>
        </div>
      </div>
      <div className="flex items-center text-sm font-light">
        <FaCalendar />
        <span className="ml-2">{dateShow()}</span>
      </div>
    </header>
  );
}
function HeaderInfo() {
  const { profil } = useContext(ProfilContext);
  const [time, setTime] = useState(clockShow());
  const intervalTime = setInterval(() => {
    setTime(clockShow());
  }, 100);
  useEffect(() => {
    intervalTime;
    return () => clearInterval(intervalTime);
  }, []);
  if (profil) {
    return (
      <header className="w-full px-8 py-4 border-2 border-slate-200 flex justify-between bg-slate-50  ">
        <div className="flex items-center">
          <img
            src={`${
              profil.image_profil ? BASEURL + profil.image_profil : ProfilImage
            }`}
            className="w-[80px] h-[80px] rounded-full border-2 border-slate-200 p-1.5"
          />
          <div className="ml-2">
            <span className="block font-bold">{profil.username}</span>
            <span className="text-sm font-light">Role : user</span>
            <p className="flex items-center">
              <FaLocationArrow className="text-sm mr-2" />
              <span className="text-sm">{profil.name_location}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center text-sm font-light">
          <FaCalendar />
          <span className="ml-2">
            {dateShow()} / {time}
          </span>
        </div>
      </header>
    );
  } else {
    return <HeaderInfoSkeleton />;
  }
}

export default HeaderInfo;
