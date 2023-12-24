/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../asset/css/hive.styles.scss";
import HiveoneyComb from "../../asset/img/hive/honeycomb.png";
import DefaultImg from "../../asset/img/hive/default.png";
import { NavBar } from "./HiveNav.component.style.jsx";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store.ts";
import { toast } from "react-toastify";

function HiveNav() {
  const { userStore } = useStore();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await userStore.logout();
      navigate("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
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
              <h2 className="logo">
                <a href="/">Hive</a>
              </h2>
            </div>

            {/* Search Bar */}
            <form method="get" action="">
              <div className="search-bar">
                <input
                  type="search"
                  name="q"
                  placeholder="search here"
                  autoComplete="off"
                />
              </div>
            </form>

            {/* Create Post and User Profile */}
            <div className="create">
              <Link to='/hive/create-post'>
              <a className="btn-hive btn-primary-hive create-post-btn"> Create </a>
              </Link>

              {/* User Profile Picture */}
              <div className="profile-picture">
                <Link to="/hive/user-profile">
                  <a href="/">
                    <img className="image" src={userStore.user?.image || DefaultImg} alt="avatar" />
                  </a>
                </Link>
              </div>

              {/* User Dropdown Menu */}
              <div className="dropdown">
                <button className="dropdown-btn">
                  <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </button>
                {/* Dropdown Content */}
                <div className="dropdown-content">
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                  <a href="/">Settings</a>
                  <Link to="/errors">
                    <a>Errors</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </NavBar>
    </>
  );
}

export default observer(HiveNav);
