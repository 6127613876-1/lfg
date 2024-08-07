import React from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import './Home.css';

const Home = () => {
  React.useEffect(() => {
    new Swiper('.home', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="home swiper" id="home" style={{ marginTop: '70px' }}>
      <div className="swiper-wrapper">
        <div className="swiper-slide container">
          <img src="./img/home1.png" alt=""/>
          <div className="home-text" style={{ marginTop: '190px' }}>
            <span style={{ color: '#fff' }}>Thala Ajith In</span>
            <h1 style={{ color: '#fff' }}>Mankatha</h1>
            <a href="" className="btn">Book Now</a>
          </div>
        </div>
        {/* Add other slides similarly */}
      </div>
    </section>
  );
}

export default Home;
