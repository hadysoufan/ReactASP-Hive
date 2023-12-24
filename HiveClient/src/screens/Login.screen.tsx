/// <reference types="@ionic/react" />
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBro from "../asset/img/illustrations/Computer login-bro.svg";
import HomeNavBar from "../components/HomeNav.component.jsx";
import HomeFooter from "../components/HomeFooter.component.jsx";
import { useStore } from "../app/stores/store.ts";
import { observer } from "mobx-react-lite";

function Login() {
  const { userStore } = useStore();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userStore.login({
        email: formData.Email,
        password: formData.Password,
      });

      console.log(userStore.user);
      navigate("/hive");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data;
        if (errorMessage === "Email not found") {
          setEmailError("Email not found");
          setPasswordError("");
        } else if (errorMessage === "Incorrect password") {
          setPasswordError("Incorrect password");
          setEmailError(""); 
        } else {
          setEmailError("Validation error");
          setPasswordError("Validation error");
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <>
      {/* Navigation bar component */}
      <HomeNavBar />

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

              <form
                onSubmit={handleSubmit}
                id="account"
                method="post"
                data-bs-theme="light"
              >
                {/* Email input */}
                <div className="mb-3">
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className={`shadow form-control ${
                      emailError ? "is-invalid" : ""
                    }`}
                    autoComplete="username"
                    aria-required="true"
                    placeholder="name@example.com"
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>

                {/* Password input with visibility toggle */}
                <div className="input-group mb-3">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="Password"
                    value={formData.Password}
                    onChange={handleInputChange}
                    className={`shadow form-control ${
                      passwordError ? "is-invalid" : ""
                    }`}
                    autoComplete="current-password"
                    aria-required="true"
                    placeholder="Password"
                    id="passwordField"
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                  {/* Password visibility toggle icon */}
                  <span
                    className="input-group-text"
                    id="togglePassword"
                    onClick={togglePasswordVisibility}
                  >
                    {/* Eye icon */}
                    <ion-icon
                      name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                    ></ion-icon>
                  </span>
                </div>

                {/* Submit button */}
                <div className="mb-5">
                  <button
                    id="login-submit"
                    className="btn btn-primary shadow"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              </form>

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
