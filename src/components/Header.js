import React from 'react';
import './Movies.css'; // Include CSS for the header

const Header = () => {
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
      <a className="btn" style={{ marginLeft: '550px' }}>Sign In</a>
      <a  className="btn">Sign Up</a>
    </header>
  );
}

export default Header;
