import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function HeaderNavbar() {
  return (
    <nav class="w-full p-4 bg-blue-500 text-white">
      <Link to="/">
        <FaArrowCircleLeft />
      </Link>
    </nav>
  );
}

export default HeaderNavbar;
