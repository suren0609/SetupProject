import React from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "store/types";
import { registerUser } from "services/register";
import "react-toastify/dist/ReactToastify.css";
import { toastParameters } from "helpers/toastAlertParams";
import { toast } from "react-toastify";
import styles from "./RegisterPage.module.scss";
import { registerSchema } from "./registerSchema";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    const res = await registerUser(data);
    if (res.statusText === "OK") {
      toast.success(res.data, toastParameters);
      navigate("/login");
    } else {
      toast.error(res, toastParameters);
    }
  };

  return (
    <div className={styles.RegisterPage}>
      <div className={styles.container}>
        <div className={styles.formBlock}>
          <div className={styles.formTitle}>
            <h3>Registration Form</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, (errors) => {
              toast.error(
                `${errors.age?.message ? errors.age?.message + "," : ""}
              ${
                errors.firstname?.message ? errors.firstname?.message + "," : ""
              }
              ${errors.lastname?.message ? errors.lastname?.message + "," : ""}
              ${errors.email?.message ? errors.email?.message + "," : ""}
              ${errors.gender?.message ? errors.gender?.message + "," : ""}
              ${errors.password?.message ? errors.password?.message + "," : ""}
              ${
                errors.confirmPassword?.message
                  ? errors.confirmPassword?.message + ","
                  : ""
              }`,
                toastParameters,
              );
            })}
          >
            <input
              {...register("firstname")}
              type="text"
              name="firstname"
              placeholder="First Name"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.firstname?.message}</p>
            <input
              {...register("lastname")}
              type="text"
              name="lastname"
              placeholder="Last Name"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.lastname?.message}</p>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="Password"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.password?.message}</p>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.confirmPassword?.message as string}</p>
            <input
              {...register("age")}
              type="date"
              name="age"
              placeholder="Age"
              className={errors.email?.message ? styles.errBorder : ""}
            />
            <p>{errors.age?.message}</p>
            <div className={styles.gender}>
              <input
                {...register("gender")}
                id="male"
                type="radio"
                name="gender"
                value="Male"
              />
              <label htmlFor="male">Male</label>
              <input
                {...register("gender")}
                id="female"
                type="radio"
                name="gender"
                value="Female"
              />
              <label htmlFor="femal">Female</label>
            </div>
            <p>{errors.gender?.message}</p>
            <input className={styles.regBtn} type="submit" value="Register" />
            <div className={styles.loginRoute}>
              <p className={styles.route}>Already have an accaunt?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
