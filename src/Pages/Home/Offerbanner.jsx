import React from 'react'
import { Link } from 'react-router-dom'

function Offerbanner() {
  return (
    <>
       <section className="banner-one py-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div
                    className="banner-one__left wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="banner-one__inner">
                      <div className="banner-one__img-1">
                        <img
                          src="assets/images/resources/banner-img-1.png"
                          alt=""
                        />
                      </div>
                      <div className="banner-one__shape-1">
                        <img
                          src="assets/images/shapes/banner-shape-1.png"
                          alt=""
                        />
                      </div>
                      <div className="banner-one__shape-2">
                        <img
                          src="assets/images/shapes/banner-shape-2.png"
                          alt=""
                        />
                      </div>
                      <div className="banner-one__shape-3">
                        <img
                          src="assets/images/shapes/banner-shape-3.png"
                          alt=""
                        />
                      </div>
                      <p className="banner-one__tagline">100% Organic</p>
                      <h3 className="banner-one__title">
                      Premium Quality 
                        <br />  Biscuits
                      </h3>
                      <div className="banner-one__btn-box">
                        <Link
                          to="/our-products"
                          className="banner-one__btn thm-btn"
                        >
                         Explore now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div
                    className="banner-one__right wow slideInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="banner-one__inner banner-one__inner-2">
                      <div className="banner-one__img-2">
                        <img
                          src="assets/images/resources/banner-img-2.png"
                          alt=""
                        />
                      </div>
                      <div className="banner-one__shape-1">
                        <img
                          src="assets/images/shapes/banner-shape-4.png"
                          alt=""
                        />
                      </div>
                      <div className="banner-one__shape-5">
                        <img
                          src="assets/images/shapes/banner-shape-5.png"
                          alt=""
                        />
                      </div>
                      <div className="banner-one__shape-6">
                        <img
                          src="assets/images/shapes/banner-shape-6.png"
                          alt=""
                        />
                      </div>
                      <p className="banner-one__tagline">100% Organic</p>
                      <h3 className="banner-one__title">
                      Premium Quality 
                        <br />  Cookies
                      </h3>
                      <div className="banner-one__btn-box">
                        <Link
                          to="/our-products"
                          className="banner-one__btn thm-btn"
                        >
                          Explore now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Offerbanner
