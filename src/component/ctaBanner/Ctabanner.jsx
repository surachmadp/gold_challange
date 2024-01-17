import {Button} from "react-bootstrap";
import styles from "./App.module.css";

function Ctabanner() {
  return (
    <>
      <div className={styles.cta}>
        <div className={styles.titleCta}>Sewa Mobil di (Lokasimu) Sekarang</div>
        <div className={styles.textCta}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className={styles.heroButton1}>
          <Button variant="success">Mulai Sewa Mobil</Button>
        </div>
      </div>
    </>
  );
}

export default Ctabanner;
