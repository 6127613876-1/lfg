import React from "react";
import "./Movies.css";

const Events = () => {
  return (
    <section>
      <h1 style={{ marginLeft: "50px" }}>Upcoming Events</h1>
      <div style={{ display: "flex", marginLeft: "30px" }}>
        <div>
          <img
            src="./img/VJA.png"
            style={{ width: "450px", height: "258px", marginRight: "60px" }}
            alt=""
          />
          <h4 style={{ color: "black", fontWeight: 500 }}>Vijay Antony Live</h4>
          <p>Monday, June 06 | 6:00 PM</p>
          <p style={{ color: "black", fontWeight: 500 }}>Chennai</p>
        </div>
        {/* Add other events similarly */}
      </div>
    </section>
  );
};

export default Events;
