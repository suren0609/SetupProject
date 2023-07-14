import React from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin, statusText } from "store/types";
import { loginUser } from "services/login";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { toastParameters } from "helpers/toastAlertParams";
import styles from "./LoginPage.module.scss";
import { loginSchema } from "./loginSchema";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const res = await loginUser(data);
    Cookies.set("token", res?.data?.token);
    if (res.statusText === statusText.ok) {
      toast.success(res.data.message, toastParameters);
      navigate("/");
    } else {
      toast.error(res, toastParameters);
    }
  };

  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <div className={styles.formBlock}>
          <div className={styles.formTitle}>
            <h3>Login Form</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, (errors) => {
              toast.error(
                `${errors.email?.message ? errors.email?.message + "," : ""}
            ${errors.password?.message ? errors.password?.message + "," : ""}`,
                toastParameters,
              );
            })}
          >
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Email"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="Password"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.password?.message}</p>
            <input className={styles.regBtn} type="submit" value="Login" />
            <div className={styles.loginRoute}>
              <p>Don`t have an accaunt?</p>
              <Link to="/Register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
