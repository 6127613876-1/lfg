import React from "react";
import "./Movies.css";
import img1 from "./img/m1.jpg"
import img2 from "./img/billa.jpg"
import img3 from "./img/m3.jpg"
import img4 from "././img/m4.jpg"
const Movies = () => {
  return (
    <div className="movies" id="movies">
      <h2 style={{ color: "#f26198", marginLeft: "135px" }}>
        Recommended Movies
      </h2>
      <div className="movies-container">
        <div className="box">
          <div className="box-img"> 
            <img src={img1} alt="" />
          </div>
          <h3>Demon Slayer: Kimetsu no Yaiba</h3>
          <span>120 min | Adventure Dark fantasy</span>
        </div>
        <div class="box">
                <div class="box-img">
                    <img src={img2} alt="" />
                </div>
                <h3>Billa 2</h3>
                <span>120 min | Action|Crime</span>
            </div>
            <div class="box">
                <div class="box-img">
                    <img src={img3} alt="" />
                </div>
                <h3>Batman vs Superman</h3>
                <span>120 min | Action|Fiction</span>
            </div>
            <div class="box">
                <div class="box-img">
                    <img src={img4} alt="" />
                </div>
                <h3>John Wick 2</h3>
                <span>120 min | Action|Crime|Thriller</span>
            </div>
      </div>
    </div>
  );
};

export default Movies;
