import React from "react";
import PageTop from "../Componnets/PageTop";

function Gallery() {
  const imageGallery = [
    "/assets/images/blog/img.jpeg",
    "/assets/images/blog/img2.jpeg",
    "/assets/images/blog/img3.jpeg",
    "/assets/images/blog/img4.jpeg",
    "/assets/images/blog/img5.jpeg",
    "/assets/images/blog/img6.jpeg",
    "/assets/images/blog/img7.jpeg",
    "/assets/images/blog/img8.jpeg",
    "/assets/images/blog/img9.jpeg",
    "/assets/images/blog/img10.jpeg",
    "/assets/images/blog/img11.jpeg",
    "/assets/images/blog/img12.jpeg",
    "/assets/images/blog/img13.jpeg",
    "/assets/images/blog/img14.jpeg",
    "/assets/images/blog/img15.jpeg",
    "/assets/images/blog/img16.jpeg",
    "/assets/images/blog/img17.jpeg",
    "/assets/images/blog/img18.jpeg",
    "/assets/images/blog/img19.jpeg",
    "/assets/images/blog/img20.jpeg",
    "/assets/images/blog/img21.jpeg",
  ];

  return (
    <>
      <PageTop Heading={"Gallery"} />{" "}
      <section className="news-page">
        <div className="container">
          <div className="row">
            {imageGallery.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img-box">
                    <div className="news-one__img">
                      <img src={item} alt="" />
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

export default Gallery;
