import Navbarbaru from "../component/header/Navbarbaru";

import Banner from "../component/banner/Banner";
import Services from "../component/services/Services";
import Whyus from "../component/whyus/Whyus";
import Ctabanner from "../component/ctaBanner/Ctabanner";
import Faq from "../component/faq/Faq";
import Fotter from "../component/fotter/Fotter";
// import Slidernew from "./component/Slidernew";

const Landingpage = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Slidernew /> */}
      <Navbarbaru />
      <Banner />
      <Services />
      <Whyus />
      {/* <Testimonial /> */}
      <Ctabanner />
      <Faq />
      <Fotter />
    </>
  );
};
export default Landingpage;
