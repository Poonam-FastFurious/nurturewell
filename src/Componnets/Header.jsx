import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 130);
      setShowScrollTop(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileNav = () => {
    setIsNavExpanded(!isNavExpanded);
    document.body.classList.toggle("locked", !isNavExpanded);
  };
  return (
    <>
      <div
        className={`stricky-header stricked-menu main-menu ${
          isSticky ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content"></div>
      </div>
      <header className="main-header-two">
        <div className="main-header-two__top">
          <div className="container">
            <div className="main-header-two__top-inner">
              <div className="main-header-two__logo">
                <Link to="/">
                  <img src="assets/images/resources/logo-1.jpg" alt="" />
                </Link>
              </div>
              <div className="main-header-two__right">
                <ul className="list-unstyled main-header-two__contact-list">
                  <li>
                    <div className="icon">
                      <i className="fas fa-mobile"></i>
                    </div>
                    <div className="text">
                      <p>
                        <Link to="tel:918094014378">+91-8094014378</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                    <div className="text">
                      <p>
                        <Link to="mailto:info@nurturewell.com">
                          info@nurturewell.com
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="main-header-two__search-cart-box">
                  <div className="main-header-two__search-form-box">
                    <form
                      className="main-header-two__search-form mc-form"
                      data-url="MC_FORM_URL"
                    >
                      <div className="main-header-two__search-input-box">
                        <div className="main-header-two__search-icon">
                          <span className="icon-magnifying-glass"></span>
                        </div>
                        <input
                          type="search"
                          placeholder="Search here"
                          name="search"
                        />
                        <button
                          type="submit"
                          className="main-header-two__search-btn thm-btn"
                        >
                          Search
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
        <nav
          className={`main-menu main-menu-two ${
            isSticky ? "stricky-fixed" : ""
          }`}
        >
          <div className="main-menu-two__wrapper">
            <div className="container">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-header-two__social">
                  <Link to="https://x.com/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.facebook.com" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="https://www.pinterest.com" target="_blank">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link to="https://www.instagram.com" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
                <div className="main-menu-two__main-menu-box">
                  <Link
                    to="#"
                    className="mobile-nav__toggler"
                    onClick={toggleMobileNav}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <ul className="main-menu__list">
                    <li className="current">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/about-us">About Us</Link>
                      <ul>
                        <li>
                          <Link to="/about-us?tab=about">
                            About Nurture Well
                          </Link>
                        </li>
                        <li>
                          <Link to="/about-us?tab=vision">Our Vision</Link>
                        </li>
                        <li>
                          <Link to="/about-us?tab=mission">Our Mission</Link>
                        </li>
                        <li>
                          <Link to="/about-us?tab=value">Our Value</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/our-products">Our Products</Link>
                    </li>
                    <li>
                      <Link to="/picture-gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/career">Career</Link>
                    </li>
                    <li>
                      <Link to="/export-query">Export Query</Link>
                    </li>
                    <li className="">
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={`mobile-nav__wrapper ${isNavExpanded ? "expanded" : ""}`}>
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={toggleMobileNav}
        ></div>

        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={toggleMobileNav}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img
                src="assets/images/resources/logo-1.png"
                width="104"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="dropdown current megamenu">
                <Link to="/">
                  Home
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/about-us">
                  About Us
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/our-products">
                  Our Products
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/picture-gallery">
                  Gallery
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/career">
                  Career
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact Us
                  <button aria-label="dropdown toggler">
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:info@nurturewell.com">info@nurturewell.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:919811060171">+91-9811060171</Link>
            </li>
          </ul>
        </div>
      </div>
      {showScrollTop && (
        <Link
          to="#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="icon-up-arrow"></i>
        </Link>
      )}
    </>
  );
}

export default Header;
