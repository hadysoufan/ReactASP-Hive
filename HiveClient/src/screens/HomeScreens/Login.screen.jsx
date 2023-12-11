import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginBro from '../../asset/img/illustrations/Computer login-bro.svg';
import HomeNavBar from '../../components/HomeComponents/HomeNavBar/HomeNav.component';
import HomeFooter from '../../components/HomeComponents/HomeFooter/HomeFooter.component';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

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
      const response = await axios.post('http://localhost:5181/Auth/login', formData);
      console.log(response.data);
      if (response.data.success && response.data.data) {
        localStorage.setItem('token', response.data.data);
        navigate("/hive");
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
                <span className="underline pb-1"><strong>Login</strong><br /></span>
              </h2>

              <form onSubmit={handleSubmit} id="account" method="post" data-bs-theme="light">
                {/* Email input */}
                <div className="mb-3">
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className="shadow form-control"
                    autoComplete="username"
                    aria-required="true"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Password input with visibility toggle */}
                <div className="input-group mb-3">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    name="Password"
                    value={formData.Password}
                    onChange={handleInputChange}
                    className="shadow form-control"
                    autoComplete="current-password"
                    aria-required="true"
                    placeholder="Password"
                    id="passwordField"
                  />
                  {/* Password visibility toggle icon */}
                  <span className="input-group-text" id="togglePassword" onClick={togglePasswordVisibility}>
                    {/* Eye icon */}
                    <ion-icon name={passwordVisible ? "eye-off-outline" : "eye-outline"}></ion-icon>
                  </span>
                </div>

                {/* Submit button */}
                <div className="mb-5">
                  <button id="login-submit" className="btn btn-primary shadow" type="submit">Log in</button>
                </div>
              </form>

              {/* Forgot password link */}
              <p className="text-muted"><a href="forgotten-password.html">Forgot your password?</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <HomeFooter />
    </>
  );
}

export default Login;
