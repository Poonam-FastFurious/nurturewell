import React from "react";

function PageTop({ Heading, }) {
  return (
    <>
      <section class="page-header">
        <div
          class="page-header-bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div
          class="page-header__ripped-paper"
          style={{
            backgroundImage: "url(assets/images/shapes/page-header-ripped-paper.png)",
          }}
        ></div>
        <div class="container">
          <div class="page-header__inner">
            <ul class="thm-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>{Heading}</li>
            </ul>
            <h2>{Heading}</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageTop;
