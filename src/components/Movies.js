import React from "react";
import "./Movies.css";

const Movies = () => {
  return (
    <div className="movies" id="movies">
      <h2 style={{ color: "#f26198", marginLeft: "135px" }}>
        Recommended Movies
      </h2>
      <div className="movies-container">
        <div className="box">
          <div className="box-img">
            <img src="./img/m1.jpg" alt="" />
          </div>
          <h3>Demon Slayer: Kimetsu no Yaiba</h3>
          <span>120 min | Adventure Dark fantasy</span>
        </div>
        {/* Add other movie boxes similarly */}
      </div>
    </div>
  );
};

export default Movies;
