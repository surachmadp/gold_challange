// import tombolbawah from "../assets/fi_chevron-down.svg";
import tombolbawah from "../assets/images/fi_chevron-down.svg";
// import mobil from "../assets/images/img_car.png";

function Faq() {
  return (
    <>
      <div className="faq">
        <div className="titleFaq">Frequently Asked Question</div>
        <div className="textFaq">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="listFaq">
          <div className="holderFaq">
            <div className="textHolder">Apa saja syarat yang dibutuhkan?</div>
            <div className="dropdownHolder">
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">
              Berapa hari minimal sewa mobil lepas kunci?
            </div>
            <div className="dropdownHolder">
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </div>
            <div className="dropdownHolder">
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">Apakah Ada biaya antar-jemput?</div>
            <div className="dropdownHolder">
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">Bagaimana jika terjadi kecelakaan</div>
            <div className="dropdownHolder">
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
