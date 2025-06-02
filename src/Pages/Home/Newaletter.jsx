import React from "react";

function Newaletter() {
  return (
    <>
      <section className="subscribe-one">
        <div className="container">
          <div className="subscribe-one__inner">
            <div className="subscribe-one__shape-1 float-bob-x">
              <img
                src="assets/images/shapes/subscribe-one-shape-1.png"
                alt=""
              />
            </div>
            <div className="subscribe-one__shape-2 float-bob-y">
              <img
                src="assets/images/shapes/subscribe-one-shape-2.png"
                alt=""
              />
            </div>
            <div className="subscribe-one__shape-4 float-bob-y">
              <img
                src="assets/images/shapes/subscribe-one-shape-4.png"
                alt=""
              />
            </div>
            <div className="subscribe-one__shape-5 zoominout">
              <img
                src="assets/images/shapes/subscribe-one-shape-5.png"
                alt=""
              />
            </div>
            <div className="subscribe-one__inner-content">
              <div className="subscribe-one__shape-3 float-bob-x">
                <img
                  src="assets/images/shapes/subscribe-one-shape-3.png"
                  alt=""
                />
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="subscribe-one__left">
                    <div className="icon">
                      <span className="icon-folder"></span>
                    </div>
                    <div className="subscribe-one__title-box">
                      <span className="subscribe-one__tagline">
                        Quisque vel ortor
                      </span>
                      <h2 className="subscribe-one__title">
                        Subscribe to newsletter
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="subscribe-one__right">
                    <div className="subscribe-one__shape-6 float-bob-x">
                      <img
                        src="assets/images/shapes/subscribe-one-shape-6.png"
                        alt=""
                      />
                    </div>
                    <div className="subscribe-one__form-box">
                      <form
                        className="subscribe-one__form mc-form"
                        data-url="MC_FORM_URL"
                      >
                        <div className="subscribe-one__input-box">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                          />
                          <button type="submit" className="subscribe-one__btn">
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </div>
                      </form>
                      <div className="mc-form__response"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newaletter;
