import React from 'react';
import './Movies.css';
import img from "./img/maa.png"
const Highlight = () => {
  return (
    <section>
      <div style={{ marginLeft: '195px' }}>
        <h1>Highlight This Week</h1>
        <img src={img} alt=""/>
      </div>
    </section>
  );
}

export default Highlight;
