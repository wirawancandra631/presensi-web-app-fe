import React from "react";
import { Navigate } from "react-router-dom";

function AuthMiddleware({ children }) {
  const token = localStorage.getItem("_token");
  if (token) {
    return children;
  }
  return <Navigate to={"/login"} />;
}

export default AuthMiddleware;
