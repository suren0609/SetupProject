import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAuth = ({ children, path }: { path: string; children: any }) => {
  const cookie = Cookies.get("token");
  if (path === "/") {
    if (cookie) return <Navigate to={path} replace />;
  } else if (path === "/login") {
    if (!cookie) return <Navigate to={path} replace />;
  }

  return children;
};

export default ProtectedAuth;
