import Cookies from "js-cookie";
import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedAuth {
  children: ReactNode;
}

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
