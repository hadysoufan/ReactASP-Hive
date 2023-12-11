import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import HomeNavBar from '../../components/HomeComponents/HomeNavBar/HomeNav.component';
import HomeFooter from '../../components/HomeComponents/HomeFooter/HomeFooter.component';
import SignUpSVG from '../../asset/img/illustrations/Sign up-rafiki.svg';

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    FullName: '',
    UserName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5181/Auth/register', formData);
      console.log(response.data);
      
      if(response.data.success){
        navigate("/hive")
      }

    }catch (error) {
      console.error('Error registering user:', error);
    }
  };



  return (
    <>
      {/* Navigation bar component */}
      <HomeNavBar />

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
                <span className="underline pb-1"><strong>Sign up</strong></span>
              </h2>

              {/* Sign-up form */}
              <form onSubmit={handleSubmit} data-bs-theme="light">

                {/* Full Name input */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="FullName"
                    value={formData.FullName}
                    onChange={handleInputChange}
                    className="form-control shadow-sm"
                    placeholder="Full Name"
                  />
                </div>

                {/* Username input */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="UserName"
                    value={formData.UserName}
                    onChange={handleInputChange}
                    className="form-control shadow-sm"
                    placeholder="Username"
                  />
                </div>

                {/* Email input */}
                <div className="mb-3">
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    className="form-control shadow-sm"
                    autoComplete="username"
                    aria-required="true"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Password input */}
                <div className="mb-3 input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="Password"
                    value={formData.Password}
                    onChange={handleInputChange}
                    className="form-control shadow-sm"
                    autoComplete="new-password"
                    aria-required="true"
                    placeholder="Password"
                  />
                  {/* Toggle password visibility */}
                  <span className="input-group-text" onClick={togglePasswordVisibility}>
                    <ion-icon name={passwordVisible ? "eye-off-outline" : "eye-outline"}></ion-icon>
                  </span>
                </div>

                {/* Confirm Password input */}
                <div className="mb-3 input-group">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="ConfirmPassword"
                    value={formData.ConfirmPassword}
                    onChange={handleInputChange}
                    className="form-control shadow-sm"
                    autoComplete="new-password"
                    placeholder="Confirm Password"
                  />
                  {/* Toggle confirm password visibility */}
                  <span className="input-group-text" onClick={toggleConfirmPasswordVisibility}>
                    <i className={`fas fa-eye${confirmPasswordVisible ? '-slash' : ''}`} id="eyeIcon"></i>
                  </span>
                </div>

                {/* Submit button */}
                <div className="mb-5">
                  <button type="submit" className="btn btn-primary shadow">Create account</button>
                </div>
              </form>

              {/* Login link */}
              <p className="text-muted">
                Have an account? <Link to='/login'>
                  Log in&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </Link>&nbsp;
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
