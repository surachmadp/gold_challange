import Navbarbaru from "../component/header/Navbarbaru";

import Banner from "../component/banner/Banner";
import Services from "../component/services/Services";
import Whyus from "../component/whyus/Whyus";
import Ctabanner from "../component/ctaBanner/Ctabanner";
import Faq from "../component/faq/Faq";
import Fotter from "../component/fotter/Fotter";
// import Slidernew from "./component/Slidernew";
import Caroseal from "../component/caroseal/Caroseal";
// import Testimonial from "../component/testimonial/Testimonial";
const Landingpage = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Slidernew /> */}
      <Navbarbaru />
      <Banner />
      <Services />
      <Whyus />
      <Caroseal />
      {/* <Testimonial /> */}
      <Ctabanner />
      <Faq />
      <Fotter />
    </>
  );
};
export default Landingpage;
