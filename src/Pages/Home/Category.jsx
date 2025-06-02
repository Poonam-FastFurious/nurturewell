import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <section className="categories-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Categories</span>
            <h2 className="section-title__title">
              What we’re offering to
              <br /> customers
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="categories-one__single categories-one__single-1">
                <div className="categories-one__img-box">
                  <div className="categories-one__img">
                    <img
                      src="assets/images/resources/categories-one-img-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="categories-one__content">
                  <div
                    className="categories-one__content-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/categories-one-content-shape-1.png)",
                    }}
                  ></div>
                  <h3 className="categories-one__title">
                    <Link to="/">
                      CAREFULLY CREATED
                    </Link>
                  </h3>
                  <p className="categories-one__text">
                    We’ve grown into a global brand by consistently delivering
                    quality
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="categories-one__single categories-one__single-2">
                <div className="categories-one__img-box">
                  <div className="categories-one__img">
                    <img
                      src="assets/images/resources/categories-one-img-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="categories-one__content">
                  <div
                    className="categories-one__content-shape-1"
                    style={{
                      backgroundImage:
                        'url("assets/images/shapes/categories-one-content-shape-2.png")',
                    }}
                  ></div>
                  <h3 className="categories-one__title">
                    <Link to="/">MODERN MACHINERY</Link>
                  </h3>
                  <p className="categories-one__text">
                    Our expert staff use advanced production techniques and
                    equipment
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="categories-one__single categories-one__single-3">
                <div className="categories-one__img-box">
                  <div className="categories-one__img">
                    <img
                      src="assets/images/resources/categories-one-img-3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="categories-one__content">
                  <div
                    className="categories-one__content-shape-1"
                    style={{
                      backgroundImage:
                        'url("assets/images/shapes/categories-one-content-shape-3.png")',
                    }}
                  ></div>
                  <h3 className="categories-one__title">
                    <Link to="/">
                      INTERNATIONAL ACCLAIM
                    </Link>
                  </h3>
                  <p className="categories-one__text">
                    Our scrumptious sweet and savoury items are appreciated
                    globally
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="categories-one__single categories-one__single-4">
                <div className="categories-one__img-box">
                  <div className="categories-one__img">
                    <img
                      src="assets/images/resources/categories-one-img-4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="categories-one__content">
                  <div
                    className="categories-one__content-shape-1"
                    style={{
                      backgroundImage:
                        'url("assets/images/shapes/categories-one-content-shape-4.png")',
                    }}
                  ></div>
                  <h3 className="categories-one__title">
                    <Link to="/">CAREFULLY CREATED</Link>
                  </h3>
                  <p className="categories-one__text">
                    We’ve grown into a global brand by consistently delivering
                    quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
