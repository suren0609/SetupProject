import React from "react";
import styles from "./RegisterPage.module.scss";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "store/types";
import { registerUser } from "services/register";

import "react-toastify/dist/ReactToastify.css";
import { toastParameters } from "helpers/toastAlertParams";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(38)
    .required()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\S+$/,
      "Is not in correct format",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null as any], "Passwords must match")
    .required(),
  age: yup.string().required(),
  gender: yup.string().required(),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
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
              console.log("errors -> ", errors);
            })}
          >
            <input
              {...register("firstname")}
              type="text"
              name="firstname"
              placeholder="First Name"
              style={{
                border: errors.firstname?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.firstname?.message}</p>
            <input
              {...register("lastname")}
              type="text"
              name="lastname"
              placeholder="Last Name"
              style={{
                border: errors.lastname?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.lastname?.message}</p>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
              style={{
                border: errors.email?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="Password"
              style={{
                border: errors.password?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.password?.message}</p>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              style={{
                border: errors.confirmPassword?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
            />
            <p>{errors.confirmPassword?.message as string}</p>
            <input
              {...register("age")}
              type="date"
              name="age"
              placeholder="Age"
              style={{
                border: errors.age?.message
                  ? ".5px solid red"
                  : ".5px solid transparent",
              }}
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
