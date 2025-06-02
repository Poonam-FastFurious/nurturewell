import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="about-one">
        <div className="about-one__shape-11 float-bob-y">
          <img src="assets/images/shapes/about-one-shape-11.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div
                  className="about-one__img-box wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-one__big-text">nurtur</div>
                  <div className="about-one__shape-1">
                    <img
                      src="https://jaitratech.com/nurturewell/wp-content/uploads/2024/06/about-one-shape-1-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-2">
                    <img
                      src="assets/images/shapes/about-one-shape-2.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-3">
                    <img
                      src="assets/images/shapes/about-one-shape-3.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-4 float-bob-y">
                    <img
                      src="assets/images/shapes/about-one-shape-4.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-5 zoominout">
                    <img
                      src="assets/images/shapes/about-one-shape-5.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-6 float-bob-x">
                    <img
                      src="assets/images/shapes/about-one-shape-6.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-7 zoominout">
                    <img
                      src="assets/images/shapes/about-one-shape-7.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-8 float-bob-y">
                    <img
                      src="assets/images/shapes/about-one-shape-8.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-9">
                    <img
                      src="assets/images/shapes/about-one-shape-9.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-10 float-bob-x">
                    <img
                      src="assets/images/shapes/about-one-shape-10.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__img">
                    <img
                      src="assets/images/resources/about-one-img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__experience-box">
                    <div className="about-one__experience-icon">
                      <span className="icon-organic"></span>
                    </div>
                    <div className="about-one__experience-text">
                      <p>
                        <span>30</span>Years of experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    Welcome to Nurture Well Foods
                  </span>
                  <h2 className="section-title__title">
                    Organic & healthy fresh food provider
                  </h2>
                </div>
                <ul className="about-one__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="fa fa-check"></span>
                    </div>
                    <div className="text">
                      <p>The natural products</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fa fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Everyday fresh food</p>
                    </div>
                  </li>
                </ul>
                <p className="about-one__text-1">
                  M/s Nurture Well Foods  Limited is a Biscuits & Cookies
                  Manufacturing Company that was incorporated in 2023. The
                  company specializes in the production of biscuits and cookies,
                  offering a wide range of delicious and high-quality baked
                  goods to its customers.
                </p>
                <p className="about-one__text-2">
                  Nurture Well Foods  Limited takes pride in its
                  commitment to providing nutritious and wholesome products. The
                  company understands the importance of healthy snacking options
                  and focuses on using premium ingredients in its recipes. We
                  aim to cater to the varying tastes and preferences of their
                  customers by offering a diverse range of flavors and textures
                  in their biscuit and cookie offerings.
                </p>
                <div className="about-one__bottom">
                  <div className="about-one__bottom-icon">
                    <img src="assets/images/icon/about-one-icon-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h3>
                      Every day fresh and quality products <br /> for you
                      deliver at doorstep
                    </h3>
                  </div>
                </div>
                <div className="about-one__btn-box">
                  <Link to="/about-us" className="about-one__btn thm-btn">
                    Discover more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
