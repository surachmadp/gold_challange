import mobil from "./assets/images/img_car.png";

import wanita from "./assets/images/img_service.png";

// import App from "./App.jsx";

import { Button } from "react-bootstrap";
function App() {
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
      <div className="ourServices">
        <div className="imageServices">
          <img src={wanita} alt="wanita" />
        </div>
        <div className="titleServices textSubtitle">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </div>
        <div className="textServices">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </div>
        <div className="listServices">
          <div className="check">
            <img src="assets/check.png" />
          </div>
          <div className="text">Sewa Mobil Dengan Supir di Bali 12 Jam</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src="assets/check.png" />
          </div>
          <div className="text">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src="assets/check.png" />
          </div>
          <div className="text">Sewa Mobil Jangka Panjang Bulanan</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src="assets/check.png" />
          </div>
          <div className="text">Gratis Antar - Jemput Mobil di Bandara</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src="assets/check.png" />
          </div>
          <div className="text">Layanan Airport Transfer / Drop In Out</div>
        </div>
      </div>

      <div className="whyUs">
        <div className="judul">Why Us?</div>
        <div className="subJudul">Mengapa harus pilih Binar Car Rental?</div>
        <div className="listItem">
          <div className="frame">
            <div className="iconComplete">
              <img src="assets/icon_complete.png" />
            </div>
            <div className="judulFrame">Mobil Lengkap</div>
            <div className="text">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </div>
          </div>
          <div className="frame">
            <div className="iconComplete">
              <img src="assets/icon_price.png" />
            </div>
            <div className="judulFrame">Harga Murah</div>
            <div className="text">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </div>
          </div>
          <div className="frame">
            <div className="iconComplete">
              <img src="assets/icon_24hrs.png" />
            </div>
            <div className="judulFrame">Layanan 24 Jam</div>
            <div className="text">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </div>
          </div>
          <div className="frame">
            <div className="iconComplete">
              <img src="assets/icon_professional.png" />
            </div>
            <div className="judulFrame">Sopir Profesional</div>
            <div className="text">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </div>
          </div>
        </div>
      </div>

      <div className="testimony"></div>

      <div className="cta">
        <div className="titleCta">Sewa Mobil di (Lokasimu) Sekarang</div>
        <div className="textCta">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="buttonCta">Mulai Sewa Mobil</div>
      </div>

      <div className="faq">
        <div className="titleFaq">Frequently Asked Question</div>
        <div className="textFaq">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="listFaq">
          <div className="holderFaq">
            <div className="textHolder">Apa saja syarat yang dibutuhkan?</div>
            <div className="dropdownHolder">
              <img src="assets/fi_chevron-down.svg" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">
              Berapa hari minimal sewa mobil lepas kunci?
            </div>
            <div className="dropdownHolder">
              <img src="assets/fi_chevron-down.svg" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </div>
            <div className="dropdownHolder">
              <img src="assets/fi_chevron-down.svg" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">Apakah Ada biaya antar-jemput?</div>
            <div className="dropdownHolder">
              <img src="assets/fi_chevron-down.svg" />
            </div>
          </div>
          <div className="holderFaq">
            <div className="textHolder">Bagaimana jika terjadi kecelakaan</div>
            <div className="dropdownHolder">
              <img src="assets/fi_chevron-down.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-section bold">
          <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
          <div>binarcarrental@gmail.com</div>
          <div>081-233-334-808</div>
        </div>
        <div className="footer-section navigation">
          <div>Our services</div>
          <div>Why Us</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>
        <div className="footer-section bold">
          <div>Connect with us</div>
          <div className="social-media">
            <img src="./assets/icon_facebook.png" alt="icon-facebook" />
            <img src="./assets/icon_instagram.png" alt="icon-instagram" />
            <img src="./assets/icon_twitter.png" alt="icon-twitter" />
            <img src="./assets/icon_mail.png" alt="icon-mail" />
            <img src="./assets/icon_twitch.png" alt="icon-twitch" />
          </div>
        </div>
        <div className="footer-section bold">
          <div>Copyright Binar 2022</div>
          <div className="kotak"></div>
        </div>
      </div>
    </>
  );
}

export default App;
