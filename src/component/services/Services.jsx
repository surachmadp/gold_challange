// import mobil from "../assets/images/img_car";
import wanita from "../../assets/images/img_service.png";
import checklist from "../../assets/images/check.png";
import styles from "./App.module.css";

function Services() {
  return (
    <>
      <div className={styles.ourServices}>
        <div className={styles.imageServices}>
          <img src={wanita} alt="wanita" />
        </div>
        <div className={styles.titleServices + " " + styles.textSubtitle}>
          Best Car Rental for any kind of trip in (Lokasimu)!
        </div>
        <div className={styles.textServices}>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </div>
        <div className={styles.listServices}>
          <div className={styles.check}>
            <img src={checklist} alt="check" />
          </div>
          <div className={styles.text}>
            Sewa Mobil Dengan Supir di Bali 12 Jam
          </div>
        </div>
        <div className={styles.listServices}>
          <div className={styles.check}>
            <img src={checklist} alt="check" />
          </div>
          <div className={styles.text}>
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </div>
        </div>
        <div className={styles.listServices}>
          <div className={styles.check}>
            <img src={checklist} alt="check" />
          </div>
          <div className={styles.text}>Sewa Mobil Jangka Panjang Bulanan</div>
        </div>
        <div className={styles.listServices}>
          <div className={styles.check}>
            <img src={checklist} alt="check" />
          </div>
          <div className={styles.text}>
            Gratis Antar - Jemput Mobil di Bandara
          </div>
        </div>
        <div className={styles.listServices}>
          <div className={styles.check}>
            <img src={checklist} alt="check" />
          </div>
          <div className={styles.text}>
            Layanan Airport Transfer / Drop In Out
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
