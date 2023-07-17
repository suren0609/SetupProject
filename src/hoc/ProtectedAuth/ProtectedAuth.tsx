import Cookies from "js-cookie";
import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

const ProtectedAuth = (Component: ComponentType, path: string) => {
  return () => {
    const cookie = Cookies.get("token");

    if (path === "/") {
      if (cookie) return <Navigate to={path} replace />;
    } else if (path === "/login") {
      if (!cookie) return <Navigate to={path} replace />;
    }

    return <Component />;
  };
};

export default ProtectedAuth;
