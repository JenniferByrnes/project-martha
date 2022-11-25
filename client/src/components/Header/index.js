import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import Auth from '../../utils/auth';
import "./nav.css";

const Header = () => {

  const [nav, setNav] = useState(false);
  const userClick = () => setNav(!nav);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {/* link to home */}
        <Link to="/">
          <h1>Martha's Musings</h1>
        </Link>

        {/* Nav Menu */}
        <Link to="/photos">
          <h1>Photos</h1>
        </Link>
  
          {Auth.loggedIn() ? (
            <ul className="hidden md:flex nav-bar-menu mx-auto space-x-20">
            <li className="nav-link">
              {/* <Link to="/profile">My Posts</Link> */}
              <a href="/" onClick={logout}>
                Logout
              </a>
            </li>
            </ul>
          ) : (
            <ul className="hidden md:flex nav-bar-menu mx-auto space-x-20">
            <li className="nav-link">
              <Link to="/login">Login</Link>
              </li>
              <li className="nav-link">
              <Link to="/signup">Signup</Link>
              </li>
              </ul>
          )}

        {/* Nav Hamburger Menu */}
        <div onClick={userClick} className="md:hidden z-10 justify-items-end">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Nav Menu */}
        <ul className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#dae8e3] text-black flex flex-col justify-center items-center"
        }>
          {Auth.loggedIn() ? (
            <li className="nav-link py-6 text-3xl">
              {/* <Link to="/profile">My Posts</Link> */}
              <a href="/" onClick={logout}>
                Logout
              </a>
            </li>
          ) : (
            <li className="nav-link py-6 text-3xl">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
