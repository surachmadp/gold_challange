// import mobil from "../assets/images/img_car";
// import mobil from "../assets/images/img_car.png";
import mobil from "../../assets/images/img_car.png";

import {Button} from "react-bootstrap";

import styles from "./App.module.css";
function Banner() {
  return (
    <>
      <div className={styles.heroCar}>
        <div className={styles.heroTitle}>
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>
        <div className={styles.heroText}>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </div>
        <div className={styles.heroButton}>
          <Button variant="success">Mulai Sewa Mobil</Button>
        </div>
        <div className={styles.heroImage}>
          <img src={mobil} alt="mobil" />
        </div>
      </div>
    </>
  );
}

export default Banner;
