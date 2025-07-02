import React from "react";
import PageTop from "../Componnets/PageTop";

function Career() {
  return (
    <>
      <PageTop Heading={"Career"} />
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__left">
                <div className="we-sell">
                  <div
                    className="we-sell__bg-img"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/we-sell-bg-img.jpg)",
                    }}
                  ></div>
                  <h3 className="we-sell__title">
                    We’re Selling, Premium Quality Biscuits & Cookies
                  </h3>
                  <div className="we-sell__icon">
                    <span className="icon-phone-ringing"></span>
                  </div>
                  <div className="we-sell__help-line">
                    <p className="we-sell__help-line-text">Call us</p>
                    <h5 className="we-sell__help-line-number">
                      <a href="tel:918094014378">+91-8094014378</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <p className="service-details__text-1">
                  Browse through our latest vacancies below.For specific roles
                  or departments, please send your resume on this mail id
                  info@nurturewell.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
