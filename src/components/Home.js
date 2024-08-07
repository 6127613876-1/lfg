import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Movies.css';
import img1 from "./img/home1.png"
import img2 from "./img/home2.jpg"
import img3 from "./img/home3.jpg"
import img4 from "./img/home4.png"


const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  };

  return (
    <section className="home" id="home" style={{ marginTop: '10px' }}>
      <Slider {...settings}>
        <div className="container">
          <img src={img1} alt="Mankatha" />
          <div className="home-text" style={{ marginTop: '190px' }}>
            <span style={{ color: '#fff' }}>Thala Ajith In</span>
            <h1 style={{ color: '#fff' }}>Mankatha</h1>
            <a href="" className="btn">Book Now</a>
          </div>
        </div>
        <div className="container">
          <img src={img2} alt="Iron Man" />
          <div className="home-text">
            <span style={{ color: '#fff' }}>Marvel Universe</span>
            <h1 style={{ color: '#fff' }}>Iron Man</h1>
            <a href="#" className="btn">Book Now</a>
          </div>
        </div>
        <div className="container">
          <img src={img3} alt="Spider-Man No Way Home" />
          <div className="home-text">
            <span style={{ color: '#fff' }}>Marvel Universe</span>
            <h1 style={{ color: '#fff' }}>Spider-Man <br />No Way Home</h1>
            <a href="#" className="btn">Book Now</a>
          </div>
        </div>
        <div className="container">
          <img src={img4} alt="Avengers: End Game" />
          <div className="home-text">
            <span style={{ color: '#fff' }}>Marvel Universe</span>
            <h1 style={{ color: '#fff' }}>Avengers: <br />End Game</h1>
            <a href="#" className="btn">Book Now</a>
          </div>
          </div>
      </Slider>
    </section>
  );
};

export default Home;
