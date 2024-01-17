// import mobil from "../assets/images/img_car";
import wanita from "../assets/images/img_service.png";
import checklist from "../assets/images/check.png";

function Services() {
  return (
    <>
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
            <img src={checklist} alt="check" />
          </div>
          <div className="text">Sewa Mobil Dengan Supir di Bali 12 Jam</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src={checklist} alt="check" />
          </div>
          <div className="text">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src={checklist} alt="check" />
          </div>
          <div className="text">Sewa Mobil Jangka Panjang Bulanan</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src={checklist} alt="check" />
          </div>
          <div className="text">Gratis Antar - Jemput Mobil di Bandara</div>
        </div>
        <div className="listServices">
          <div className="check">
            <img src={checklist} alt="check" />
          </div>
          <div className="text">Layanan Airport Transfer / Drop In Out</div>
        </div>
      </div>
    </>
  );
}

export default Services;
