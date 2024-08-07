import React from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";
import "./Movies.css";

const ComingSoon = () => {
  React.useEffect(() => {
    new Swiper(".coming-container", {
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        568: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        968: {
          slidesPerView: 5,
        },
      },
    });
  }, []);

  return (
    <section className="coming" id="coming">
      <h2 style={{ marginLeft: "135px" }}>Coming Soon</h2>
      <div className="coming-container swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="box-img">
              <img src="./img/c2.jpg" alt="" />
            </div>
            <h3>Despicable Me 4</h3>
            <span>120 min | Action|Comedy</span>
          </div>
          {/* Add other coming soon boxes similarly */}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
