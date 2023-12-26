import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavBar from "../components/HomeNav.component.jsx";
import HomeFooter from "../components/HomeFooter.component.jsx";
import SignUpSVG from "../asset/img/illustrations/Sign up-rafiki.svg";
import { useStore } from "../app/stores/store.ts";
import { ErrorMessage, Formik } from "formik";
import { Button, Form, Label, Loader } from "semantic-ui-react";
import MyTextInput from "../form/MyTextInput.tsx";
import * as Yup from "yup";
import ValidationErrors from "../features/errors/ValidationErrors.tsx";
import { error } from "jquery";

function SignUp() {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* Loader component */}
      {loading && <Loader />}

      {/* Navigation bar component */}
      {!loading && <HomeNavBar />}

      {/* Sign-up section */}
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            {/* Image column */}
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" src={SignUpSVG} alt="signup" />
            </div>

            {/* Sign-up form column */}
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              {/* Sign-up heading */}
              <h2 className="display-6 fw-bold mb-5">
                <span className="underline pb-1">
                  <strong>Sign up</strong>
                </span>
              </h2>

              {/* Sign-up form */}
              <Formik
                initialValues={{
                  displayName: "",
                  username: "",
                  email: "",
                  password: "",
                  error: null,
                }}
                onSubmit={async (values, { setErrors }) => {
                  setLoading(true);

                  try {
                    await userStore.register(values);
                    navigate("/hive");
                  } catch (error) {
                    setErrors({ error });
                  } finally {
                    setLoading(false);
                  }
                }}
                validateYupSchema={Yup.object({
                  displayName: Yup.string().required(),
                  username: Yup.string().required(),
                  email: Yup.string().required(),
                  password: Yup.string().required(),
                })}
              >
                {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                  <Form
                    className="error"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                  >
                    <MyTextInput placeholder="Full Name" name="displayname" />
                    <MyTextInput placeholder="Username" name="username" />
                    <MyTextInput placeholder="Email" name="email" />
                    <MyTextInput
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                    <ErrorMessage
                      name="error"
                      render={() => <ValidationErrors errors={errors} />}
                    />

                    <Button
                      loading={isSubmitting}
                      color="orange"
                      content="Sign Up"
                      type="submit"
                      fluid
                    />
                  </Form>
                )}
              </Formik>

              {/* Login link */}
              <p className="text-muted">
                Have an account?{" "}
                <Link to="/login">
                  Log in&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </Link>
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <HomeFooter />
    </>
  );
}

export default SignUp;
