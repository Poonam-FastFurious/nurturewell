import React from "react";
import PageTop from "../../Componnets/PageTop";

function ExportQuery() {
  return (
    <>
      <PageTop Heading={"Export Query"} />
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
                    You have query regarding export?
                  </h3>
                  <div className="we-sell__icon">
                    <span className="icon-phone-ringing"></span>
                  </div>
                  <div className="we-sell__help-line">
                    <p className="we-sell__help-line-text">Call us</p>
                    <h5 className="we-sell__help-line-number">
                      <a href="tel:9871520806">+91-9871520806</a>
                    </h5>
                  </div>
                  <div className="we-sell__help-line">
                    <p className="we-sell__help-line-text">Email </p>
                    <h5 className="we-sell__help-line-number">
                      <a href="mailto:export@nurturewell.com">
                        export@nurturewell.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <p className="service-details__text-1">
                  At Nurture Well, we welcome export inquiries from
                  distributors, wholesalers, and businesses across the globe.
                  Whether you're looking to import our products, collaborate on
                  international trade opportunities, or need custom packaging
                  and bulk quantities, our export team is here to assist you.
                </p>
                <p className="service-details__text-1">
                  Kindly reach out to us with your specific requirements,
                  business details, and destination country. You can contact us
                  via email at
                  <a
                    href="mailto:export@nurturewell.com"
                    style={{ fontWeight: "bold", color: "#e91e63" }}
                  >
                    export@nurturewell.com
                  </a>
                  or call us at{" "}
                  <a
                    href="tel:+919871520806"
                    style={{ fontWeight: "bold", color: "#3f51b5" }}
                  >
                    +91-9871520806
                  </a>
                  .
                </p>
                <p className="service-details__text-1">
                  Our team will review your request and get back to you with all
                  the necessary details including product catalog, pricing,
                  shipping options, and compliance documents. We look forward to
                  building strong and lasting partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExportQuery;
