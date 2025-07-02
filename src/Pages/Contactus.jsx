import React from "react";
import PageTop from "../Componnets/PageTop";

function Contactus() {
  return (
    <>
      <PageTop Heading={"Contact Us"} />{" "}
      <section className="contact-details">
        <div className="container">
          <div className="contact-details__inner">
            <ul className="contact-details__contact-list list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-help"></span>
                </div>
                <div className="content">
                  <p>Have question?</p>
                  <h4>
                    <a href="tel:923076806860">+918094014378</a>
                  </h4>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-mailbox"></span>
                </div>
                <div className="content">
                  <p>Write email</p>
                  <h4>
                    <a href="mailto:info@nurturewell.com">
                      info@nurturewell.com
                    </a>
                  </h4>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-mailbox"></span>
                </div>
                <div className="content">
                  <p>Export Query? </p>
                  <h4>
                    <a href="mailto:export@nurturewell.com">
                      export@nurturewell.com
                    </a>
                  </h4>{" "}
                  <h4>
                    <a href="mailto:export@nurturewell.com">+91-9871520806</a>
                  </h4>
                </div>
              </li>
            </ul>
            <div className="contact-details__social-box">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-details">
        <div className="container">
          <div className="contact-details__inner">
            <ul className="contact-details__contact-list list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-help"></span>
                </div>
                <div className="content">
                  <p>Registered Office</p>
                  <h4>
                    <a href="tel:923076806860">
                      B-16, Second Floor, Sector 2, Noida, Uttar Pradesh 201301,
                      India
                    </a>
                  </h4>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-mailbox"></span>
                </div>
                <div className="content">
                  <p>Factory Address</p>
                  <h4>
                    <a href="mailto:needhelp@company.com">
                      Plot No.- A-144, Situated at E.P.I.P, Neemrana Tech.
                      Neemrana Dist. Alwar, Rajasthan 301705, India
                    </a>
                  </h4>
                </div>
              </li>   
            </ul>
          </div>
        </div>
      </section>{" "}
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <span className="section-title__tagline">Write a Message</span>
                <h2 className="section-title__title">
                  We’re always here to
                  <br /> help you
                </h2>
              </div>
              <div className="contact-page__content">
                <form
                  action="assets/inc/sendemail.php"
                  className="contact-page__form contact-form-validated"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-page__form-input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Write a massage"
                      ></textarea>
                    </div>
                    <div className="contact-page__btn-box">
                      <button
                        type="submit"
                        className="thm-btn contact-page__btn"
                      >
                        Send a message
                      </button>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="google-map">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4310.904517379064!2d77.31157847613603!3d28.58581608619936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce528b33e582d%3A0x52e1b3e1296c2c84!2sNurtureWell!5e1!3m2!1sen!2sin!4v1746704654051!5m2!1sen!2sin"
            className="google-map__one"
            allowfullscreen=""
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contactus;
