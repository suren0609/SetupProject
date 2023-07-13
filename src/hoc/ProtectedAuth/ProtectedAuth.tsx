import Cookies from "js-cookie";
import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedAuth {
  children: ReactNode;
}

const ProtectedAuth = (Component: any) => {
  const Header = () => {
    return <Component  />;
  };

  return Header;
};

export default ProtectedAuth;
