import Banner from "./Banner";
import Offerbanner from "./Offerbanner";
import About from "./About";
import Category from "./Category";
import Whychooseus from "./Whychooseus";
import TestiMonial from "./TestiMonial";

function Home() {
  return (
    <>
      <div className="page-wrapper">
       
        <Banner />
        <Offerbanner />
        <About />
        <Category />
        <Whychooseus />
        <TestiMonial />
      </div>
    </>
  );
}

export default Home;
