import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Banner() {
  return (
    <section className="main-slider clearfix">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{
          el: ".main-slider-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".main-slider__swiper-button-next",
          prevEl: ".main-slider__swiper-button-prev",
        }}
        className="thm-swiper__slider"
      >
        <SwiperSlide>
          <div
            className="main-slider-bg-shape"
            style={{
              backgroundImage:
                "url(assets/images/shapes/main-slider-bg-shape.png)",
            }}
          ></div>
          <div
            className="main-slider-bg-shape-two"
            style={{
              backgroundImage:
                "url(assets/images/shapes/main-slider-bg-shape-two.png)",
            }}
          ></div>

          <div className="main-slider__shape-1 float-bob-y">
            <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="main-slider__shape-2 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
          </div>
          <div className="main-slider__shape-4 float-bob-y">
            <img src="assets/images/shapes/main-slider-shape-4.png" alt="" />
          </div>

          <div className="main-slider__shape-6 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-6.png" alt="" />
          </div>
          <div className="main-slider__shape-7 float-bob-y">
            <img src="assets/images/shapes/main-slider-shape-7.png" alt="" />
          </div>
          <div className="main-slider__shape-8 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-8.png" alt="" />
          </div>
          <div className="main-slider__img-one">
            <img
              src="assets/images/resources/main-slider-img-1.png"
              alt=""
              className="img-bounce"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <div className="main-slider__shape-9 float-bob-y">
                    <img
                      src="assets/images/shapes/main-slider-shape-9.png"
                      alt=""
                    />
                  </div>
                  <h4 className="main-slider__sub-title">
                    Select only Organic Products
                  </h4>
                  <h2 className="main-slider__title">
                    Trendy <br /> Biscuits for all
                  </h2>
                  <div className="main-slider__btn-box">
                    <a
                      href="products.html"
                      className="thm-btn main-slider__btn-two"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="main-slider__swiper-button-next">Next</div>
      <div className="main-slider__swiper-button-prev">Prev</div>
      <div className="main-slider-pagination"></div>
    </section>
  );
}

export default Banner;
