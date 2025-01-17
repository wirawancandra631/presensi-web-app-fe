import React from "react";
import EmptyIcon from "../../public/img/empty.jpeg";
function EmptySkeleton() {
  return (
    <div className="w-full h-[200px] flex flex-col items-center justify-center">
      <img src={EmptyIcon} alt="" className="w-[100px] h-[100px] block mb-2" />
      <span>Tidak ada data untuk ditampilkan</span>
    </div>
  );
}

export default EmptySkeleton;
