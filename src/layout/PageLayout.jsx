import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
function PageLayout() {
  return (
    <main className="w-full bg-purple-500 md:py-4">
      <main className="relative md:w-[567px]  md:border-1 md:border-slate-800  mx-auto md:shadow-xl w-full min-h-screen  pb-16 bg-white rounded-md overflow-y-auto">
        <Outlet />
      </main>
    </main>
  );
}

export default PageLayout;
