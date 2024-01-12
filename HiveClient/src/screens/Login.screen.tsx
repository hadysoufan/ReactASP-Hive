import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBro from "../asset/img/illustrations/login-bro.svg";
import HomeNavBar from "../components/HomeNav.component.jsx";
import HomeFooter from "../components/HomeFooter.component.jsx";
import { useStore } from "../app/stores/store.ts";
import { observer } from "mobx-react-lite";
import Loader from "../components/Loader/Loader.component.jsx";
import { ErrorMessage, Formik } from "formik";
import { Button, Form, Label } from "semantic-ui-react";
import MyTextInput from "../form/MyTextInput.tsx";
import { toast } from "react-toastify";

function Login() {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* Loader component */}
      {loading && <Loader />}

      {/* Navigation bar component */}
      {!loading && <HomeNavBar />}

      {/* Login section */}
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" src={LoginBro} alt="Login SVG" />
            </div>

            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5">
                <span className="underline pb-1">
                  <strong>Login</strong>
                  <br />
                </span>
              </h2>

              <Formik
            initialValues={{ email: "", password: "", error: null }}
            onSubmit={async (values, { setErrors }) => {
              setLoading(true);

              try {
                await userStore.login(values);
                toast.success("Logged in successfully!");
                navigate('/hive'); 
              } catch (error) {
                toast.error("Cannot Log in successfully!");
                setErrors({ error: "Invalid email or password" });
              } finally {
                setLoading(false);
              }
            }}
          >
                {({ handleSubmit, isSubmitting, errors }) => (
                  <Form onSubmit={handleSubmit} autoComplete="off">
                    <MyTextInput placeholder="Email" name="email" />
                    <MyTextInput
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                    <ErrorMessage
                      name="error"
                      render={() => (
                        <Label
                          style={{ marginBottom: 10 }}
                          basic
                          color="red"
                          content={errors.error}
                        />
                      )}
                    />
                    <Button
                      loading={isSubmitting}
                      color="orange"
                      content="Login"
                      type="submit"
                      fluid
                    />
                  </Form>
                )}
              </Formik>

              {/* Forgot password link */}
              <p className="text-muted">
                <a href="forgotten-password.html">Forgot your password?</a>
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

export default observer(Login);
