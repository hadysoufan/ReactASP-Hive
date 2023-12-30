import React, {useState, useEffect} from 'react';
import '../../asset/css/hive.styles.scss';
import './LeftSection.component.styles.jsx';
import DefaultImg from '../../asset/img/hive/default.png';
import { Main, Left } from './LeftSection.component.styles.jsx';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../../app/stores/store.ts';

function LeftSection() {

  const { userStore } = useStore();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await userStore.getUser();
        setUserData(userStore.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [userStore]);
  


  return (
    <Main>
    {/* Left screen side */}
    <Left>
      {/* Profile section */}
      {userData && (
        <Link to={`/hive/user-profile/${userData.username}`} className="profile">
          <div className="profile-picture">
          <img
              className="image"
              src={userData.image ? userData.image : DefaultImg}
              alt="avatar"
            />
            <div className="gradient"></div>
          </div>

          <div className="handle">
            <h4 className="user-name">{userData.displayName}</h4>
            <p className="text-muted">{userData.username}</p>
          </div>
        </Link>
      )}

      {/* Side bar */}
      <div className="sidebar">
        {/* Home link */}
        <NavLink to='/hive' className="menu-item">
          <span><ion-icon name="home"></ion-icon></span>
          <h3>Home</h3>
        </NavLink>

        {/* Room link */}
        <Link to='' className="menu-item">
          <span><ion-icon name="planet"></ion-icon></span>
          <h3>Create Room</h3>
        </Link>

        {/* Create Activity */}
        <NavLink to='/hive/activities' className="menu-item">
          <span><ion-icon name="people-circle-outline"></ion-icon></span>
          <h3>Activities</h3>
        </NavLink>

        {/* Notification link */}
        <Link to='/hive/products' className="menu-item" id="notifications">
          <span><ion-icon name="storefront-outline"></ion-icon></span>
          <h3>Market Store</h3>
        </Link>

        {/* Message link */}
        <Link to='' className="menu-item" id="messages-notifications">
          <span><ion-icon name="chatbox"></ion-icon></span>
          <h3>Messages</h3>
        </Link>

        {/* Bookmarks link */}
        <Link to='' className="menu-item">
          <span><ion-icon name="bookmarks"></ion-icon></span>
          <h3>Bookmarks</h3>
        </Link>

        {/* Analytics link */}
        <Link to='' className="menu-item">
          <span><ion-icon name="analytics"></ion-icon></span>
          <h3>Analytics</h3>
        </Link>

        {/* Theme link */}
        <Link to='' className="menu-item">
          <span><ion-icon name="color-palette"></ion-icon></span>
          <h3>Theme</h3>
        </Link>

        {/* Setting link */}
        <Link to='' className="menu-item">
          <span><ion-icon name="settings"></ion-icon></span>
          <h3>Settings</h3>
        </Link>
      </div>
      {/* End of side bar */}

      {/* Create post button */}
      <label className="btn-hive btn-primary-hive">
        Create post
      </label>
    </Left>
    {/* End of left section */}
  </Main>
);
}

export default LeftSection;