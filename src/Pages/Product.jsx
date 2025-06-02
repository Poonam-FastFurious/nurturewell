import React from "react";
import PageTop from "../Componnets/PageTop";
import { Link } from "react-router-dom";

function Product() {
  const products = [
    {
      name: "Bourbon",
      category: "Biscuits",
      img: "assets/images/resources/pro1.jpg",
    },
    {
      name: "Coco Orange ",
      category: "Cookies",
      img: "assets/images/resources/pro2.jpg",
    },
    {
      name: "Butter Rich Cookies",
      category: "Available in 32g, 64g and 128g Packs",
      img: "assets/images/resources/pro3.jpg",
    },
    {
      name: "Choco Coco",
      category: "Available in 60g and 66g Packs",
      img: "assets/images/resources/pro4.jpg",
    },

    {
      name: "Coconut",
      category: "Cookies",
      img: "assets/images/resources/pro5.jpg",
    },
    {
      name: "Glucobite",
      category: "Biscuits",
      img: "assets/images/resources/pro6.jpg",
    },
    {
      name: "Creamrich",
      category: "Biscuits",
      img: "assets/images/resources/pro7.jpg",
    },
    {
      name: "Creamrich",
      category: "Biscuits",
      img: "assets/images/resources/pro8.jpg",
    },
    {
      name: "Creamrich",
      category: "Biscuits",
      img: "assets/images/resources/pro9.jpg",
    },
  ];

  return (
    <>
      <PageTop Heading={"Product"} />
      <section className="portfolio-page">
        <div className="container">
          <div className="row">
            {products.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="gallery-one__content-box">
                      <div className="gallery-one__content">
                        <div className="gallery-one__shape-1">
                          <img
                            src="assets/images/shapes/gallery-one-shape-1.png"
                            alt=""
                          />
                        </div>
                        <div className="gallery-one__title-box">
                          <h3 className="gallery-one__title">
                            <Link to="/contact">{item.name}</Link>
                          </h3>
                          <p className="gallery-one__sub-title">
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <div className="gallery-one__arrow-box">
                        <Link to="/contact" className="gallery-one__arrow">
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
