// import mobil from "../assets/images/img_car";
import icon_complete from "../assets/images/icon_complete.png";
import icon_price from "../assets/images/icon_price.png";
import icon_24hrs from "../assets/images/icon_24hrs.png";
import icon_professional from "../assets/images/icon_professional.png";

function Whyus() {
  return (
    <>
      <div className="whyUs">
        <div className="judul">Why Us?</div>
        <div className="subJudul">Mengapa harus pilih Binar Car Rental?</div>
        <div className="listItem">
          <div className="frame">
            <div className="iconComplete">
              <img src={icon_complete} alt="icon_complete" />
            </div>
            <div className="judulFrame">Mobil Lengkap</div>
            <div className="text">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </div>
          </div>
          <div className="frame">
            <div className="iconComplete">
              <img src={icon_price} alt="icon_price" />
            </div>
            <div className="judulFrame">Harga Murah</div>
            <div className="text">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </div>
          </div>
          <div className="frame">
            <div className="iconComplete">
              <img src={icon_24hrs} alt="icon_24hrs" />
            </div>
            <div className="judulFrame">Layanan 24 Jam</div>
            <div className="text">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </div>
          </div>
          <div className="frame">
            <div className="iconComplete">
              <img src={icon_professional} alt="icon_professional" />
            </div>
            <div className="judulFrame">Sopir Profesional</div>
            <div className="text">
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
