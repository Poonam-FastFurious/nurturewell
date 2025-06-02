import React, { useEffect, useState } from "react";
import PageTop from "../Componnets/PageTop";
import { Link, useSearchParams } from "react-router-dom";
const tabData = [
  {
    key: "about",
    label: "AboutUs",
    content: (
      <>
        <p className="service-details__text-1">
          Welcome to M/s Nurture Well Foods  Limited— a Biscuit & Cookies
          Manufacturing Company Dedicated to Crafting Delectable Treats that
          Bring Joy and Delight to People’s Lives. With a Passion for Quality,
          Innovation, and Customer Satisfaction, We take Pride in Creating
          Biscuits & Cookies that Exceed Expectations and Become Cherished
          Moments of Indulgence.
        </p>
        <p className="service-details__text-2">
          Nurture Well Food  Limited Manufactures Biscuits & Cookies
          Under the Brand Name RICHLITE, FUNTREAT and CANBERRA at the
          State-of-the-art Production Facilities in Neemarana Rajasthan.
        </p>
        <p className="service-details__text-1">
          RICHLITE Biscuits and Cookies are Available at All Major Retail
          Outlets in Neighborhoods across North India. The Distribution Network
          of Richfield is Supported by Large Number of Super Stockiest and
          Distributors Who Share the Brand’s Ethos And Are Brand Ambassadors For
          RICHLITE.
        </p>
        <p className="service-details__text-2">
          We Have A Strong Network Of 150+ Business Partner Through Them We
          Distribute Our Product In The Complete North Indian Marker Covering J
          & K, Himachal, Punjab, Rajasthan, Uttrakhand, Delhi NCR And Uttar
          Pradesh. Along With Domestic Market Our Product Has Extremely Good
          Acceptability In Overseas Market Such As UAE, Somalia, Tanzania,
          Kuwait, Afghanistan, Congo, Kenya, Rwanda & Seychelles.
        </p>
      </>
    ),
  },
  {
    key: "vision",
    label: "Our Vision",
    content: (
      <>
        <p className="service-details__text-1">
          Our Vision is to be a leading and innovative biscuit manufacturing
          company, recognized globally for our exceptional quality, diverse
          product range, and commitment to customer satisfaction. We strive to
          delight consumers with delicious and wholesome biscuits that become
          their preferred choice for indulgence, comfort and everyday snacking.
        </p>
        <ul className="service-details__text-1 p-4">
          <li className="service-details__text-1 ">
            We envision crafting biscuits that surpass expectations, setting new
            benchmarks for taste, texture, and nutritional value. Our products
            will be synonymous with uncompromising quality, using premium
            ingredients and innovative recipes to deliver an exceptional sensory
            experience.
          </li>{" "}
          <li className="service-details__text-1 ">
            At the core of our vision is our commitment to understanding and
            satisfying the evolving preferences and needs of our customers. We
            aim to create a strong emotional connection with our consumers,
            building trust and loyalty through exceptional products and
            personalized service.
          </li>{" "}
          <li>
            We aspire to be at the forefront of innovation in the biscuit
            industry. Continuously exploring new flavors, ingredients, and
            manufacturing techniques, we will introduce exciting and diverse
            product lines that cater to a wide range of tastes and dietary
            requirements, ensuring everyone can find their perfect biscuit
          </li>{" "}
          <li>
            We are dedicated to promoting sustainable business practices
            throughout our entire value chain. From sourcing ethically and
            responsibly produced ingredients to implementing environmentally
            friendly manufacturing processes, we aim to minimize our ecological
            footprint and contribute to a healthier planet.
          </li>{" "}
          <li>
            Our vision extends beyond borders. We aspire to establish a strong
            global presence, gaining recognition as a trusted and sought-after
            brand in the biscuit industry. Through strategic partnerships,
            international expansion, and consistent quality, we aim to bring joy
            to consumers worldwide.
          </li>{" "}
          <li>
            We believe in nurturing a passionate and diverse team that shares
            our values and vision. By providing a supportive and inclusive work
            environment, fostering professional growth, and encouraging
            innovation, we will empower our employees to contribute their best
            and drive the success of our company.
          </li>{" "}
          <li>
            As a responsible corporate citizen, we envision actively
            contributing to the betterment of society. We will engage in
            community initiatives, support local charities, and promote healthy
            lifestyles and education, making a positive impact on the lives of
            individuals and communities we serve.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "mission",
    label: "Our Mission",
    content: (
      <>
        <p className="service-details__text-1 ">
          Through relentless dedication to craftsmanship, innovation, and
          sustainable practices, Our Mission is to be a trusted provider of
          delightful biscuit experiences, contributing to the happiness and
          well-being of individuals and communities we serve.
        </p>
        <ul className="service-details__text-1 p-4">
          <li className="service-details__text-1 ">
            We are committed to the art of biscuit-making, combining traditional
            craftsmanship with modern techniques to produce biscuits that
            exemplify excellence. Our mission is to maintain the highest
            standards of quality throughout every step of the manufacturing
            process, ensuring that each biscuit embodies our unwavering
            commitment to superior taste, texture, and freshness.
          </li>{" "}
          <li className="service-details__text-1 ">
            Our mission is centered around fulfilling the desires and
            expectations of our valued customers. We strive to create biscuits
            that evoke joy, comfort, and indulgence, paying careful attention to
            their preferences and feedback. By continuously engaging with our
            customers, we aim to exceed their expectations, build lasting
            relationships, and become their trusted choice for delicious
            biscuits.
          </li>{" "}
          <li>
            We embrace a culture of innovation, constantly seeking new flavors,
            unique combinations, and innovative techniques in biscuit
            manufacturing. Our mission is to surprise and delight our customers
            with exciting and distinctive biscuit offerings, ensuring that every
            bite is a delightful experience that surpasses their expectations.
          </li>{" "}
          <li>
            We recognize our responsibility towards the environment and society.
            Our mission is to integrate sustainable practices throughout our
            operations, from responsibly sourcing ingredients to optimizing
            energy usage and minimizing waste. By promoting eco-friendly
            packaging and supporting local communities, we aim to contribute
            positively to the well-being of the planet and the people we serve.
          </li>{" "}
          <li>
            Our mission extends to nurturing a passionate and skilled team. We
            strive to create a work environment that fosters growth, learning,
            and innovation, empowering our employees to contribute their best.
            By recognizing their contributions, encouraging collaboration, and
            providing opportunities for personal and professional development,
            we aim to build a team that is dedicated to our mission and shares
            our commitment to excellence.
          </li>{" "}
          <li>
            We are dedicated to making a positive impact on society. Our mission
            involves actively engaging in initiatives that promote education,
            well-being, and sustainability. Through partnerships with local
            organizations and active community involvement, we aim to contribute
            to the betterment of society and create a lasting legacy beyond our
            biscuits.
          </li>{" "}
        </ul>
        <p className="service-details__text-1 ">
          By diligently pursuing this mission, we aim to become a benchmark for
          quality, innovation, and customer satisfaction in the biscuit
          manufacturing industry, enriching the lives of individuals and
          communities through our delightful creations.
        </p>
      </>
    ),
  },
  {
    key: "value",
    label: "Our Values",
    content: (
      <>
        <p className="service-details__text-1 ">
          We are committed to upholding the highest standards of quality in
          every aspect of our biscuit manufacturing process. We believe that
          quality is the foundation of our success and strive to deliver
          products that consistently exceed customer expectations.
        </p>
        <ul className="service-details__text-1 ">
          <li>
            We conduct our business with honesty, transparency, and ethical
            practices. We believe in building trust with our customers,
            suppliers, and employees by maintaining the highest levels of
            integrity in all our interactions and business operations.
          </li>
          <li>
            We foster a culture of innovation and creativity, continuously
            seeking new ideas, flavors, and manufacturing techniques to stay
            ahead of market trends. We encourage our employees to think outside
            the box, explore new possibilities, and drive innovation in biscuit
            manufacturing.
          </li>
          <li>
            Our customers are at the heart of everything we do. We listen
            attentively to their needs, preferences, and feedback, and strive to
            provide them with products that delight and satisfy. We are
            dedicated to delivering exceptional customer experiences and
            building long-term relationships.
          </li>
          <li>
            We are committed to promoting sustainable practices throughout our
            operations. From responsibly sourcing ingredients to reducing waste
            and implementing energy-efficient processes, we prioritize
            environmental stewardship and strive to minimize our ecological
            footprint.
          </li>{" "}
          <li>
            We value collaboration, respect, and open communication within our
            organization. We foster a supportive and inclusive work environment
            that encourages teamwork and empowers our employees to contribute
            their unique skills and perspectives towards our collective success.
          </li>{" "}
          <li>
            We embrace a culture of continuous improvement and learning. We
            actively seek feedback, analyze data, and adapt our processes to
            enhance efficiency, product quality, and customer satisfaction. We
            believe that there is always room for growth and strive to
            constantly evolve and innovate.
          </li>{" "}
          <li>
            We believe in giving back to the community and being responsible
            corporate citizens. We actively participate in social initiatives,
            support local charities, and contribute to causes that promote
            education, health, and well-being in the communities where we
            operate.
          </li>{" "}
          <li>
            The safety of our employees, customers, and partners is of utmost
            importance. We maintain strict safety protocols and provide a secure
            work environment that prioritizes the well-being of everyone
            involved in our operations.
          </li>{" "}
          <li>
            We are passionate about what we do. Our enthusiasm for creating
            delicious biscuits and delighting our customers is evident in every
            aspect of our work. We take pride in our craft and are dedicated to
            bringing joy and satisfaction to biscuit lovers around the world.
          </li>
        </ul>
      </>
    ),
  },
];

function AboutUs() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const activeIndex = tabData.findIndex((tab) => tab.key === activeTab);
  return (
    <>
      <PageTop Heading={"AboutUs"} />
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__left">
                <ul className="service-details__category-list list-unstyled">
                  {tabData.map((tab, index) => (
                    <li
                      key={index}
                      className={index === activeIndex ? "active" : ""}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      <Link to="#">
                        {tab.label}
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
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
                      <Link to="tel:9811060171">+91-9811060171</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <p className="service-details__text-1">
                  {tabData[activeIndex]?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
