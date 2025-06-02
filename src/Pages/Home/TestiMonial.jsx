import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel"; // make sure to install it
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function TestiMonial() {
  const owlOptions = {
    loop: true,
    autoplay: false,
    margin: 30,
    nav: true,
    dots: false,
    smartSpeed: 500,
    autoplayTimeout: 10000,
    navText: [
      '<span class="icon-up-arrow"></span>',
      '<span class="icon-down-arrow"></span>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 1 },
      1200: { items: 1 },
    },
  };
  return (
    <>
      <section className="testimonial-one">
        <div
          className="testimonial-one__bg-img"
          style={{
            backgroundImage:
              'url("assets/images/backgrounds/testimonial-one__bg-img.jpg")',
          }}
        ></div>
        <div className="testimonial-one__bg-img-2">
          <img
            src="assets/images/backgrounds/testimonial-one__bg-img-2.png"
            alt=""
          />
        </div>
        <div className="testimonial-one__bg-shape">
          <img src="assets/images/shapes/testimonial-one-shape-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="testimonial-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Our Feedbacks</span>
                  <h2 className="section-title__title">
                    What they’re talking about our company?
                  </h2>
                </div>
                <p className="testimonial-one__text">
                  Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
                  Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh
                  tempus turpis.
                </p>
                <div className="testimonial-one__btn-box">
                  <Link to="/contact" className="testimonial-one__btn thm-btn">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="testimonial-one__right">
                <div className="testimonial-one__img-2">
                  <img
                    src="assets/images/testimonial/testimonial-1-2.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-one__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/testimonial-one-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="testimonial-one__shape-2 float-bob-x">
                  <img
                    src="assets/images/shapes/testimonial-one-shape-2.png"
                    alt=""
                  />
                </div>
                <OwlCarousel
                  className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
                  {...owlOptions}
                >
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__content-box">
                        <div className="testimonial-one__shape-4">
                          <img
                            src="assets/images/shapes/testimonial-one-shape-4.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text-2">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal simply the touch.
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Aleesha brown{" "}
                          </h3>
                          <p className="testimonial-one__client-subtitle">
                            <span>.</span>CEO 
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-client-1-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__content-box">
                        <div className="testimonial-one__shape-4">
                          <img
                            src="assets/images/shapes/testimonial-one-shape-4.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text-2">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal simply the touch.
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Strive rods
                          </h3>
                          <p className="testimonial-one__client-subtitle">
                            <span>.</span>CEO 
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-client-1-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__content-box">
                        <div className="testimonial-one__shape-4">
                          <img
                            src="assets/images/shapes/testimonial-one-shape-4.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text-2">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal simply the touch.
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Kevin martin
                          </h3>
                          <p className="testimonial-one__client-subtitle">
                            <span>.</span>CEO 
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-client-1-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestiMonial;
