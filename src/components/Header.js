import React from 'react';
import './Movies.css';
import Logbtn from './Logbtn';
import Logout from './Logout';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <header>
      <a href="#home" className="logo">
        <i className='bx bxs-movie'></i>Sakthi Cinema's
      </a>
      <ul className="navbar">
        <li><a href="#home" className="home-active">Home</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#coming">Coming</a></li> 
      </ul>
      {isAuthenticated ? <Logout /> : <Logbtn />}
    </header>
  );
}

export default Header;
