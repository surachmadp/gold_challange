// import mobil from "../assets/images/img_car";
import icon_complete from "../../assets/images/icon_complete.png";
import icon_price from "../../assets/images/icon_price.png";
import icon_24hrs from "../../assets/images/icon_24hrs.png";
import icon_professional from "../../assets/images/icon_professional.png";

import styles from "./App.module.css";

function Whyus() {
  return (
    <>
      <div className={styles.whyUs}>
        <div className={styles.judul}>Why Us?</div>
        <div className={styles.subJudul}>
          Mengapa harus pilih Binar Car Rental?
        </div>
        <div className={styles.listItem}>
          <div className={styles.frame}>
            <div className={styles.iconComplete}>
              <img src={icon_complete} alt="icon_complete" />
            </div>
            <div className={styles.judulFrame}>Mobil Lengkap</div>
            <div className={styles.text}>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.iconComplete}>
              <img src={icon_price} alt="icon_price" />
            </div>
            <div className={styles.judulFrame}>Harga Murah</div>
            <div className={styles.text}>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.iconComplete}>
              <img src={icon_24hrs} alt="icon_24hrs" />
            </div>
            <div className={styles.judulFrame}>Layanan 24 Jam</div>
            <div className={styles.text}>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.iconComplete}>
              <img src={icon_professional} alt="icon_professional" />
            </div>
            <div className={styles.judulFrame}>Sopir Profesional</div>
            <div className={styles.text}>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyus;
