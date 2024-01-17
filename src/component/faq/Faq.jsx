// import tombolbawah from "../assets/fi_chevron-down.svg";
import tombolbawah from "../../assets/images/fi_chevron-down.svg";
// import mobil from "../assets/images/img_car.png";
import styles from "./App.module.css";

function Faq() {
  return (
    <>
      <div className={styles.faq}>
        <div className={styles.titleFaq}>Frequently Asked Question</div>
        <div className={styles.textFaq}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className={styles.listFaq}>
          <div className={styles.holderFaq}>
            <div className={styles.textHolder}>
              Apa saja syarat yang dibutuhkan?
            </div>
            <div className={styles.dropdownHolder}>
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className={styles.holderFaq}>
            <div className={styles.textHolder}>
              Berapa hari minimal sewa mobil lepas kunci?
            </div>
            <div className={styles.dropdownHolder}>
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className={styles.holderFaq}>
            <div className={styles.textHolder}>
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </div>
            <div className={styles.dropdownHolder}>
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className={styles.holderFaq}>
            <div className={styles.textHolder}>
              Apakah Ada biaya antar-jemput?
            </div>
            <div className={styles.dropdownHolder}>
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
          <div className={styles.holderFaq}>
            <div className={styles.textHolder}>
              Bagaimana jika terjadi kecelakaan
            </div>
            <div className={styles.dropdownHolder}>
              <img src={tombolbawah} alt="tombolbawah" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
