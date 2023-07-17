import { passwordRegex } from "utils/regexPassword";
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(38)
    .required()
    .matches(passwordRegex, "Is not in correct format"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null as any], "Passwords must match")
    .required(),
  age: yup.string().required(),
  gender: yup.string().required(),
});
