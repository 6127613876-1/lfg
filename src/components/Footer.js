import React from "react";
import "./Movies.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Sakthi Cinema's</h1>
          <p>
            "Movies are the memories of our lifetime. We need to keep them
            alive"
          </p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h1 style={{ color: "#fff" }}>Categories</h1>
          <a href="/">All</a>
          <a href="/">Horror</a>
          <a href="/">Action</a>
          <a href="/">Adventure</a>
          <a href="/">Comedy</a>
        </div>
        <div>
          <h1 style={{ color: "#fff" }}>Resources</h1>
          <a href="/">User guides</a>
          <a href="/">Help</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h1 style={{ color: "#fff" }}>Company</h1>
          <a href="/">About Us</a>
          <a href="/">Support</a>
          <a href="/">Join Us</a>
        </div>
      </div>
      <div className="copyright">
        <p>&#169; Sakthi Cinema's All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
