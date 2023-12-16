import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import '../../../asset/css/hive.styles.scss';
import './LeftSection.component.styles.jsx';
import DefaultImg from '../../../asset/img/hive/default.png';
import { Main, Left } from './LeftSection.component.styles.jsx';
import { Link } from 'react-router-dom';

function LeftSection() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');

      const decodedToken = jwtDecode(token);

      const userId = decodedToken.nameid;
      
      const response = await axios.get('http://localhost:5000/api/account');
      console.log(response);

      setUserData(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <Main>
      {/* Left screen side */}
      <Left>
        {/* Profile section */}
        {userData && (
          <a href='/hive/user-profile' className="profile">
            <div className="profile-picture">
            <img
                className="image"
                src={userData.profileImage ? userData.profileImage : DefaultImg}
                alt="avatar"
              />
              <div className="gradient"></div>
            </div>

            <div className="handle">
              <h4 className="user-name">{userData.fullName}</h4>
              <p className="text-muted">{userData.userName}</p>
            </div>
          </a>
        )}

        {/* Side bar */}
        <div className="sidebar">
          {/* Home link */}
          <Link to='/hive'>
          <a className="menu-item active">
            <span><ion-icon name="home"></ion-icon></span>
            <h3>Home</h3>
          </a>
          </Link>

          {/* Room link */}
          <a className="menu-item" href="/">
            <span><ion-icon name="planet"></ion-icon></span>
            <h3>Create Room</h3>
          </a>

          {/* Create Activity */}
          <Link to='/hive/activities'>
          <a className="menu-item" href="£">
            <span><ion-icon name="people-circle-outline"></ion-icon></span>
            <h3>Create Activity</h3>
          </a>
          </Link>

          {/* Notification link */}
          <a className="menu-item" id="notifications" href='/'>
            <span><ion-icon name="notifications-circle"></ion-icon></span>
            <h3>Notifications</h3>

            {/* Notification popup */}
            <div className="notification-popup">
              {/* Notification items */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                  {/* Notification user picture */}
                  <div className="profile-picture">
                    <img src={`~/img/hive/profile-${index + 1}.jpg`} alt="" />
                  </div>
                  {/* Notification body */}
                  <div className="notification-body">
                    <b>keke Benjamin</b> accepted your friend request
                    <small className="text-muted">2 Days Ago</small>
                  </div>
                </div>
              ))}
            </div>
            {/* End of notification */}
          </a>

          {/* Message link */}
          <a className="menu-item" id="messages-notifications" href='/'>
            <span><ion-icon name="chatbox"></ion-icon></span>
            <h3>Messages</h3>
          </a>

          {/* Bookmarks link */}
          <a className="menu-item" href='/'>
            <span><ion-icon name="bookmarks"></ion-icon></span>
            <h3>Bookmarks</h3>
          </a>

          {/* Analytics link */}
          <a className="menu-item" href='/'>
            <span><ion-icon name="analytics"></ion-icon></span>
            <h3>Analytics</h3>
          </a>

          {/* Theme link */}
          <a className="menu-item" href='/'>
            <span><ion-icon name="color-palette"></ion-icon></span>
            <h3>Theme</h3>
          </a>

          {/* Setting link */}
          <a className="menu-item" href='/'>
            <span><ion-icon name="settings"></ion-icon></span>
            <h3>Settings</h3>
          </a>
        </div>
        {/* End of side bar */}

        {/* Create post button */}
        <label htmlFor="create-post" className="btn-hive btn-primary-hive">
          Create post
        </label>
      </Left>
      {/* End of left section */}
    </Main>
  );
}

export default LeftSection;
