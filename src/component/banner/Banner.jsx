// import mobil from "../assets/images/img_car";
// import mobil from "../assets/images/img_car.png";
import mobil from "../../assets/images/img_car.png";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./App.module.css";
function Banner({ hiddenbtn = false }) {
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
          <Link to={"pencarian"}>
            {/* <Button hidden={props.test} variant="success"> */}
            {/* {hiddenbtn && <Button variant="success">Mulai Sewa Mobil</Button>} */}

            <Button hidden={hiddenbtn} variant="success">
              Mulai Sewa Mobil
            </Button>
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img src={mobil} alt="mobil" />
        </div>
      </div>
    </>
  );
}

export default Banner;
