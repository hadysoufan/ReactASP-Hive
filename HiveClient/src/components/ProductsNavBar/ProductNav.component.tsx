import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useStore } from '../../app/stores/store.ts';
import HiveoneyComb from "../../asset/img/hive/honeycomb.png";
import DefaultImg from "../../asset/img/hive/default.png";
import { NavBar } from "../HiveNavBar/HiveNav.component.style.jsx";


interface Props {
  totalQuantity: number;
}


function ProductNav({totalQuantity}: Props) {
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
                  <a href="/hive">Hive</a>
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
              <Link to='/hive/product/basket'>
              <ion-icon name="cart-outline"></ion-icon> 
              {totalQuantity > 0 && (
            <span className="cart-quantity">{totalQuantity}</span>
          )}
              </Link>
                <Link to='/hive/products' className="btn-hive btn-primary-hive create-post-btn">
                  Catalog
                </Link>
  
                {/* User Profile Picture */}
                <div className="profile-picture">
                  <Link to={`/hive/user-profile/${userStore.user?.username}`}>
                      <img className="image" src={userStore.user?.image || DefaultImg} alt="avatar" />
                  </Link>
                </div>
  
                {/* User Dropdown Menu */}
                <div className="dropdown">
                  <button className="dropdown-btn">
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                  </button>
                  {/* Dropdown Content */}
                  <div className="dropdown-content">
                    <Link to='' onClick={handleLogout}>
                      Logout
                    </Link>
                    <Link to="/errors">
                      Errors
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

export default ProductNav
