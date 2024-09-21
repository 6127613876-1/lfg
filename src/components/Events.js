import React from "react";
import "./Movies.css";
import img1 from "./img/VJA.png"
import img2 from "./img/yuvan.png"
import img3 from "./img/arr.jpg"

const Events = () => {
  return (
    <section>
      <h1 style={{ marginLeft: "50px" }}>Upcoming Events</h1>
      <div style={{ display: "flex", marginLeft: "30px" }}>
        <div>
          <img
            src={img1}
            style={{ width: "450px", height: "258px", marginRight: "60px" }}
            alt=""
          />
          <h4 style={{ color: "black", fontWeight: 500 }}>Vijay Antony Live</h4>
          <p>Monday, June 06 | 6:00 PM</p>
          <p style={{ color: "black", fontWeight: 500 }}>Chennai</p>
        </div>
        <div className="event">
          <img src={img2} alt="Yuvan Live" style={{ width: '450px', height: '258px', marginRight: '60px' }} />
          <h4 style={{ color: 'black', fontWeight: '500' }}>YUVAN Live</h4>
          <p>Monday, March 14 | 4:00 PM</p>
          <p style={{ color: 'black', fontWeight: '500' }}>Singapore</p>
        </div> 
        <div className="event">
          <img src={img3} alt="AR Rahman Live" style={{ width: '450px', height: '258px' }} />
          <h4 style={{ color: 'black', fontWeight: '500' }}>AR RAHMAN LIVE</h4>
          <p>Monday, July 24 | 8:00 PM</p>
          <p style={{ color: 'black', fontWeight: '500' }}>Dubai</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
