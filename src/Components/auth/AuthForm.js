import React from "react";
import { AuthFormStyled } from "./AuthFormStyled";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "./validation/Validator";

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <AuthFormStyled>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (location.pathname === "/signup") {
            // dispatch(signUpOperation(values));
          } else {
            // dispatch(signInOperation(values));
          }
        }}>
        {({ values, errors, touched, handleBlur }) => (
          <Form className='authForm'>
            <label className='authFormLabel'>
              Email
              <Field
                type='text'
                name='email'
                placeholder='Andrii@gmail.com'
                value={values.email}
                className={
                  !values.email.length && touched.email && errors.email
                    ? "invalidInput"
                    : "authFormInput"
                }
              />
              {errors.email && touched.email ? (
                <p className='error'>{errors.email}</p>
              ) : null}
            </label>
            <label className='authFormLabel'>
              Password
              <Field
                type='password'
                name='password'
                value={values.password}
                placeholder='Qwerty123'
                onBlur={handleBlur}
                className={
                  !values.password.length && touched.password && errors.password
                    ? "invalidInput"
                    : "authFormInput"
                }
              />
              {errors.password && touched.password ? (
                <p className='error'>{errors.password}</p>
              ) : null}
            </label>

            {location.pathname === "/signin" ? (
              <button type='submit' className='authFormButton'>
                Sign in
              </button>
            ) : (
              <button type='submit' className='authFormButton'>
                Sign up
              </button>
            )}
          </Form>
        )}
      </Formik>
    </AuthFormStyled>
  );
};

export default AuthForm;

