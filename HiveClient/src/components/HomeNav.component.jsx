import React from 'react';
import { NavLink } from 'react-router-dom';

function HomeNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light" id="mainNav">
        <div className="container">
          {/* Home link with active class */}
          <NavLink to="/" className="navbar-brand d-flex align-items-center" activeClassName="active">
            <span>Hive</span>
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              {/* Home link with active class */}
              <li className="nav-item"><NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink></li>

              {/* Contacts link with active class */}
              <li className="nav-item"><NavLink to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink></li>

              {/* Login link with active class */}
              <li className="nav-item"><NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink></li>
            </ul>

            {/* Sign up link */}
            <a href='/signup' className="btn btn-primary shadow" role="button">Sign up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavBar;
