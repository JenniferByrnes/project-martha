import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    // Header - Title and Nav
    <header className="w-full bg-stone-200 text-black">
      {/* Container for Nav elements - title and nav */}
      <div className="container flex justify-between md:items-center max-w-6xl mx-auto px-6 py-1">
        <div>
          {/* title - link to home */}
          <Link to="/"
            className="hover:text-pcCoral">
            <h1>Martha's Musings</h1>
          </Link>
        </div>
        <div>
          {/* Nav Menu */}
          {/* Logged in user sees Logout option, otherwise Login/Signin option */}

          <ul className="hidden md:flex md:space-x-5 items-center justify-around py-2">
            <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
              <Link to="/photos">Photos</Link>
            </li>
            <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
              <Link to="/blog">Blog</Link>
            </li>
            {Auth.loggedIn() ? (
              <>
                <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
                  {/* <Link to="/profile">My Posts</Link> */}
                  <Link to="/" onClick={logout}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
                  <Link to="/login">Login</Link>
                </li>
                <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
                  <Link to="/signup">Signup</Link>
                </li>
              </>)}
          </ul>

          {/* Nav Hamburger Menu */}
          {/* This does animation! */}
          <div onClick={userClick} className="md:hidden z-10 justify-items-end  hover:text-pcCoral hover:text-xl">
            {!nav ? <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div> : <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none open"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>}
          </div>

          {/* Mobile Nav Menu */}
          <ul className={
            !nav
              ? "hidden"
              : "top-0 bottom-0 left-0 flex flex-col py-2 text-lg  justify-evenly items-start"
          }>
            <Link to="/photos"
              className="hover:text-pcCoral hover:text-xl"
            >Photos</Link>
            <Link to=""               className="hover:text-pcCoral hover:text-xl" >Blog</Link>
            {/* Logged in user sees Logout option, otherwise Login/Signin option */}
            {Auth.loggedIn() ? (
              <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
                {/* <Link to="/profile">My Posts</Link> */}
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <Link to="/login" className="hover:text-pcCoral hover:text-xl" >Login</Link>
                <Link to="/signup" className="hover:text-pcCoral hover:text-xl" >Sign Up</Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
