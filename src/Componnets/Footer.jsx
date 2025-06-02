import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div
          className="site-footer__bg"
          style={{
            backgroundImage:
              'url("assets/images/backgrounds/site-footer-bg-img.png")',
          }}
        ></div>
        <div
          className="site-footer__ripped-paper"
          style={{
            backgroundImage:
              'url("assets/images/shapes/site-footer-ripped-paper.png")',
          }}
        ></div>
        <div className="container">
          <div className="site-footer__top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link to="/">
                      <img
                        src="https://jaitratech.com/nurturewell/wp-content/uploads/2023/02/Nurture-Logo-Final2.png"
                        alt=""
                        style={{ height: "100px" }}
                      />
                    </Link>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      We’re Providing Everyday Fresh <br /> and Quality
                      Products.
                    </p>
                  </div>
                  <div className="footer-widget__social-box">
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__explore">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Explore</h3>
                  </div>
                  <div className="footer-widget__explore-list-box">
                    <ul className="footer-widget__explore-list list-unstyled">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Company</Link>
                      </li>
                      <li>
                        <Link to="/our-products">Our Product</Link>
                      </li>
                      <li>
                        <Link to="/picture-gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/career">Carere</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Contact</h3>
                  </div>
                  <p className="footer-widget__contact-text">
                    B-16, Second Floor, Sector 2, Noida, Uttar Pradesh 201301,
                    India
                  </p>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="text">
                        <p>
                          <Link to="tel:928800688960">+91-9811060171</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="text">
                        <p>
                          <Link to="mailto:info@example.com ">
                            info@nurturewell.com
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__gallery">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Gallery</h3>
                  </div>
                  <ul className="footer-widget__gallery-list list-unstyled clearfix">
                    <li>
                      <div className="footer-widget__gallery-img">
                        <img
                          src="assets/images/resources/footer-widget-gallery-img-1.jpg"
                          alt=""
                        />
                        <Link to="#">
                          <span className="fa fa-link"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget__gallery-img">
                        <img
                          src="assets/images/resources/footer-widget-gallery-img-2.jpg"
                          alt=""
                        />
                        <Link to="#">
                          <span className="fa fa-link"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget__gallery-img">
                        <img
                          src="assets/images/resources/footer-widget-gallery-img-3.jpg"
                          alt=""
                        />
                        <Link to="#">
                          <span className="fa fa-link"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget__gallery-img">
                        <img
                          src="assets/images/resources/footer-widget-gallery-img-4.jpg"
                          alt=""
                        />
                        <Link to="#">
                          <span className="fa fa-link"></span>
                        </Link>
                      </div>
                    </li>{" "}
                    <li>
                      <div className="footer-widget__gallery-img">
                        <img
                          src="assets/images/resources/footer-widget-gallery-img-5.jpg"
                          alt=""
                        />
                        <Link to="#">
                          <span className="fa fa-link"></span>
                        </Link>
                      </div>
                    </li>{" "}
                    <li>
                      <div className="footer-widget__gallery-img">
                        <img
                          src="assets/images/resources/footer-widget-gallery-img-6.jpg"
                          alt=""
                        />
                        <Link to="#">
                          <span className="fa fa-link"></span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <div className="site-footer__bottom-left">
                    <p className="site-footer__bottom-text">
                      Copyright © 2025. All Rights Reserved. | Nurture Well
                      Foods Limited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
