import React from "react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("Incorrect email").required("Email is Required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min 6 symbols")
    .max(16, "Max 16 symbols")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
      "Latin alphabet symbols, upperCase and italic, numbers"
    ),
});

const funcMessage = (errorMessage) => {
  return <span className='errorMessage'>{errorMessage}</span>;
};

export { funcMessage, validationSchema };

const ErrorValidation = ({ touched, message }) => {
  return <>{!touched ? message && <div>{message}</div> : <div>&nbsp;</div>}</>;
};

export default ErrorValidation;
