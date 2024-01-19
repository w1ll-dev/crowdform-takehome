import * as yup from "yup";
import {
  loginValidations,
  textValidations as loginTextsAndValidations,
} from "../LoginForm/textsAndValidations";

const onlyLettersRegex = /^[A-Za-z]+$/;

const texts = {
  createAnAccount: "Create an account",
  addYourPersonalDetails: "Add your personal details below",
  signUp: "Sign up",
  alreadyHaveAnAccount: "Already have an account?",
  logIn: "Log In",
  success: "✅ Success",
  nowPlease: "Now please, sign in with your credentials.",
  byCreating: "By creating an account your agree to our",
  termAndConditions: "Term and Conditions",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof RegisterFieldValues, string>
> = {
  errors: {
    firstName: "Please, provide your first name.",
    lastName: "Please, provide your last name.",
    email: loginTextsAndValidations.errors.email,
    password: loginTextsAndValidations.errors.password,
  },
  labels: {
    email: "Email",
    password: "Password",
    firstName: "First name",
    lastName: "Last name",
  },
  placeholders: {
    email: "Email",
    password: "Password (Min. 8 characters)",
    firstName: "First name",
    lastName: "Last name",
  },
};

const registerFieldValues: YupSchemaShape<RegisterFieldValues> = {
  ...loginValidations,
  firstName: yup
    .string()
    .required(textValidations.errors.firstName)
    .matches(new RegExp(onlyLettersRegex), textValidations.errors.firstName),
  lastName: yup
    .string()
    .required(textValidations.errors.lastName)
    .matches(new RegExp(onlyLettersRegex), textValidations.errors.lastName),
};

const yupRegisterSchema = yup.object(registerFieldValues);

export { textValidations, texts, yupRegisterSchema, loginValidations };
