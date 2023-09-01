import Board from "components/Board/Board";
import { ProtectedAuth } from "hoc/ProtectedAuth";
import { HomePage } from "pages/HomePage";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  const Home = ProtectedAuth(HomePage, "/login");
  const Login = ProtectedAuth(LoginPage, "/");
  const Register = ProtectedAuth(RegisterPage, "/");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board/:id" element={<Board />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesComponent;
