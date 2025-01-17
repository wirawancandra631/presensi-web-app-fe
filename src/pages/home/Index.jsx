import React, { useContext } from "react";
import { ProfilContext } from "@/context/ProfilContext";
import HeaderInfo from "@/components/HeaderInfo";
import BottomNavbar from "@/components/BottomNavbar";
import {
  CardActionPresensiIn,
  CardActionPresensiOut,
} from "@/pages/home/components/CardActionPresensi";
import CardActionPermission from "@/pages/home/components/CardActionPermission";
import TableHistoryPresensiToday from "@/pages/home/components/TableHistoryPresensiToday";

function HomePage() {
  const { profil } = useContext(ProfilContext);
  return (
    <>
      <section className="w-full">
        <HeaderInfo />
        <div className="w-full flex flex-wrap px-2 py-4">
          <CardActionPresensiIn profil={profil} />
          <CardActionPresensiOut profil={profil} />
          <CardActionPermission />
        </div>
        <div className="my-4 px-2 mb-4">
          <p>Riwayat Presensi Hari Ini</p>
          <TableHistoryPresensiToday />
        </div>
      </section>
      <BottomNavbar />
    </>
  );
}

export default HomePage;
