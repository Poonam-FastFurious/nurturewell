import "./App.css";
import "./assets/vendors/bootstrap/css/bootstrap.min.css";
import "./assets/vendors/animate/animate.min.css";
import "./assets/vendors/animate/custom-animate.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/jarallax/jarallax.css";
import "./assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "./assets/vendors/nouislider/nouislider.min.css";
import "./assets/vendors/nouislider/nouislider.pips.css";
import "./assets/vendors/odometer/odometer.min.css";
import "./assets/vendors/swiper/swiper.min.css";
import "./assets/vendors/ogenix-icons/style.css";
import "./assets/vendors/tiny-slider/tiny-slider.min.css";
import "./assets/vendors/reey-font/stylesheet.css";
import "./assets/vendors/owl-carousel/owl.carousel.min.css";
import "./assets/vendors/owl-carousel/owl.theme.default.min.css";
import "./assets/vendors/bxslider/jquery.bxslider.css";
import "./assets/vendors/bootstrap-select/css/bootstrap-select.min.css";
import "./assets/vendors/vegas/vegas.min.css";
import "./assets/vendors/jquery-ui/jquery-ui.css";
import "./assets/vendors/timepicker/timePicker.css";
import "./assets/vendors/nice-select/nice-select.css";
import "./assets/css/ogenix.css";
import "./assets/css/ogenix-responsive.css";
import Header from "./Componnets/Header";
import CustomCursor from "./Componnets/CustomCursor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Componnets/Footer";
import Product from "./Pages/Product";
import Newaletter from "./Pages/Home/Newaletter";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import Contactus from "./Pages/Contactus";
import Gallery from "./Pages/Gallery";
function App() {
  return (
    <>
      <div className="custom-cursor">
        <CustomCursor />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-products" element={<Product />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/picture-gallery" element={<Gallery />} />
           
          </Routes>
          <Newaletter />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
