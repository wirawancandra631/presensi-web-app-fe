import React, { useContext, useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import HeaderInfo from "@/components/HeaderInfo";
import { dateShow } from "@/lib/util/date";
import TablePresensiDetail from "@/pages/presensi_detail/components/TablePresensiDetail";
function PresensiDetail() {
  return (
    <>
      <HeaderInfo />
      <section className="w-full px-2 py-4">
        <p>Detail data presensi</p>
        <small>Tanggal {dateShow()} </small>
        <TablePresensiDetail />
      </section>
      <BottomNavbar />
    </>
  );
}

export default PresensiDetail;
