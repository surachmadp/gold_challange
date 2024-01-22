import Navbarbaru from "../component/header/Navbarbaru";
// import Banner from "../component/banner/Banner";
import Searchmobil from "../component/searchmobil/Searchmobil";
import Detail from "../component/detail/Detail";
import Fotter from "../component/fotter/Fotter";
import "../component/header/detail.css";

const Detailmobil = () => {
  // const headerTinggi = `<div> mantap </div>`;
  const HeaderTinggi = () => {
    return <div className="headerBaru"></div>;
  };
  return (
    <>
      <Navbarbaru HeaderTinggi={<HeaderTinggi />} />
      {/* <Navbarbaru headerTinggi={headerTinggi} /> */}
      {/* <Banner /> */}
      <Searchmobil />
      <Detail />

      <Fotter />
    </>
  );
};
export default Detailmobil;
