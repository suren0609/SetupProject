import Board from "components/Board/Board";
import Loading from "components/Loading/Loading";
import { ProtectedAuth } from "hoc/ProtectedAuth";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));

const RoutesComponent = () => {
  useEffect(() => {
    console.log("RoutesComponent");
  }, []);
  const Home = ProtectedAuth(HomePage, "/login");
  const Login = ProtectedAuth(LoginPage, "/");
  const Register = ProtectedAuth(RegisterPage, "/");
  const { id } = useParams();
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
