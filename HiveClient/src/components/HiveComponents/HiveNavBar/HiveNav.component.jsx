import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import '../../../asset/css/hive.styles.scss';
import HiveoneyComb from '../../../asset/img/hive/honeycomb.png'; 
import DefaultImg from '../../../asset/img/hive/default.png'; 
import { NavBar } from './HiveNav.component.style';

function HiveNav() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token before API call:', token);
  
      const decodedToken = jwtDecode(token);
  
      const response = await axios.post('http://localhost:5181/Auth/logout', {
        userId: decodedToken.nameid,
        token,
      });
  
      if (response.data.success) {
        await localStorage.removeItem('token');
        console.log('Token after API call (removed):', localStorage.getItem('token'));
        navigate('/home');
      } else {
        console.error('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  

  return (
    <>
      {/* Navigation Bar Section */}
      <NavBar>
        <nav>
          <div className="container">
            {/* Logo and Brand */}
            <div className="logo-header">
              <img src={HiveoneyComb} className="logo-img" alt="Logo img" />
              <h2 className="logo"><a href="/">Hive</a></h2>
            </div>

            {/* Search Bar */}
            <form method="get" action="">
              <div className="search-bar">
                <input type="search" name="q" placeholder="search here" autoComplete="off" />
              </div>
            </form>

            {/* Create Post and User Profile */}
            <div className="create">
              <a className="btn btn-primary" data-toggle="modal" data-target="#createPostModal" href="/">
                Create
              </a>

              {/* User Profile Picture */}
              <div className="profile-picture">
                <a href="/">
                  <img className='image' src={DefaultImg} alt="avatar" />
                </a>
              </div>

              {/* User Dropdown Menu */}
              <div className="dropdown">
                <button className="dropdown-btn">
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </button>
                {/* Dropdown Content */}
                <div className="dropdown-content">
                  <a onClick={handleLogout}>Logout</a>
                  <a href="/">Settings</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </NavBar>
    </>
  );
}

export default HiveNav;