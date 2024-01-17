// import mobil from "../assets/images/img_car";
import mobil from "../assets/images/img_car.png";

import {Button} from "react-bootstrap";
function Banner() {
  return (
    <>
      <div className="heroCar">
        <div className="heroTitle">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>
        <div className="heroText">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </div>
        <div className="heroButton1">
          <Button variant="success">Mulai Sewa Mobil</Button>
        </div>
        <div className="heroImage">
          <img src={mobil} alt="mobil" />
        </div>
      </div>
    </>
  );
}

export default Banner;
