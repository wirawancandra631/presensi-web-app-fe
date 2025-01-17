import React from "react";
import Spiner from "./Spiner";
function SpinnerLoading() {
  return (
    <div className="w-full h-screen flex items-center  flex-col">
      <Spiner />
      <p>Sedang mengambi data</p>
    </div>
  );
}

export default SpinnerLoading;
