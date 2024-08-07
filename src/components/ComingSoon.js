import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Movies.css';
import img1 from "./img/c2.jpg"
import img2 from "./img/c6.jpg"
import img3 from "./img/c5.jpg"
import img4 from "./img/c1.jpg"
import img5 from "./img/c3.jpg"

const ComingSoon = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="coming" id="coming">
      <h2 style={{ marginLeft: '135px' }}>Coming Soon</h2>
      <Slider {...settings} className="coming-container">
      <div className="box">
          <div className="box-img">
            <img src={img1} alt="Despicable Me 4" />
          </div>
          <h3>Despicable Me 4</h3>
          <span>120 min | Action|Comedy</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img2} alt="Batman Dark Knight" />
          </div>
          <h3>Batman Dark Knight</h3>
          <span>120 min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img3} alt="Guardians of the Galaxy Vol.3" />
          </div>
          <h3>Guardians of the Galaxy Vol.3</h3>
          <span>120 min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img4} alt="Deadpool & Wolverine" />
          </div>
          <h3>Deadpool & Wolverine</h3>
          <span>120 min | Action|Comedy</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img5} alt="John Wick:Chapter 4" />
          </div>
          <h3>John Wick:Chapter 4</h3>
          <span>120 min | Action</span>
        </div>
      </Slider>
    </section>
  );
};

export default ComingSoon;
