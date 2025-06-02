import React from "react";

function Whychooseus() {
  return (
    <>
      <section className="hot-products">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Explore My Video</span>
            <h2 className="section-title__title">Our Company Tours</h2>
          </div>
        </div>
      </section>
      <section className="why-choose-one">
        <div
          className="why-choose-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/why-choose-one-bg.jpg)",
          }}
        ></div>
        <div className="why-choose-one__shape-1 float-bob-y">
          <img src="assets/images/shapes/why-choose-one-shape-1.png" alt="" />
        </div>
        <div className="why-choose-one__shape-2 float-bob-x">
          <img src="assets/images/shapes/why-choose-one-shape-2.png" alt="" />
        </div>
        <div className="why-choose-one__shape-3">
          <img src="assets/images/shapes/why-choose-one-shape-3.png" alt="" />
        </div>
        <div className="why-choose-one__shape-4">
          <img src="assets/images/shapes/why-choose-one-shape-4.png" alt="" />
        </div>
        <div
          className="why-choose-one__img-1 wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <img src="assets/images/resources/why-choose-one-img-1.png" alt="" />
        </div>
        <div
          className="why-choose-one__img-2 wow fadeInDown"
          data-wow-duration="1500ms"
        >
          <img src="assets/images/resources/why-choose-one-img-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                    Few reasons for <br />
                    people choosing <br />
                    Nurture Well Foods
                  </h2>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-organic-food"></span>
                      </div>
                      <h4 className="why-choose-one__title">Organic products</h4>
                      <p className="why-choose-one__text">
                        Lorem ipsum dolor sit amet, sectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-apple"></span>
                      </div>
                      <h4 className="why-choose-one__title">Organic fruit</h4>
                      <p className="why-choose-one__text">
                        Lorem ipsum dolor sit amet, sectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-diet"></span>
                      </div>
                      <h4 className="why-choose-one__title">Daily fresh</h4>
                      <p className="why-choose-one__text">
                        Lorem ipsum dolor sit amet, sectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-salad"></span>
                      </div>
                      <h4 className="why-choose-one__title">Natural items</h4>
                      <p className="why-choose-one__text">
                        Lorem ipsum dolor sit amet, sectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whychooseus;
