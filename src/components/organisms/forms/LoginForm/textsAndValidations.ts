import * as yup from "yup";
import { MIN_PASSWORD_CHAR } from "../constants";

const texts = {
  login: "Login",
  invalidCredentials: "😔 Invalid credentials",
  pleaseTryAgain: "Please, try again.",
  forgotYourPassword: "Forgot your password ?",
  dontHaveAnAccount: "Don't have an account?",
  signUp: "Sign Up",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof LoginFieldValues, string>
> = {
  errors: {
    email: "Please, provide a valid email address.",
    password: `Please, provide a password of at least ${MIN_PASSWORD_CHAR} characters.`,
  },
  labels: {
    email: "Email",
    password: "Password",
  },
  placeholders: {
    email: "Email",
    password: "Password",
  },
};

const loginValidations: YupSchemaShape<LoginFieldValues> = {
  email: yup
    .string()
    .email(textValidations.errors.email)
    .required(textValidations.errors.email),
  password: yup
    .string()
    .min(MIN_PASSWORD_CHAR, textValidations.errors.password)
    .required(textValidations.errors.password),
};

const yupLoginSchema = yup.object(loginValidations);

export { textValidations, texts, yupLoginSchema, loginValidations };
