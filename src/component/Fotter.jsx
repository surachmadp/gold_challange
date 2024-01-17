import facebook from "../assets/images/icon_facebook.png";
import icon_instagram from "../assets/images/icon_instagram.png";
import icon_twitter from "../assets/images/icon_twitter.png";
import icon_mail from "../assets/images/icon_mail.png";
import icon_twitch from "../assets/images/icon_twitch.png";

function Fotter() {
  return (
    <>
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
            <img src={facebook} alt="facebook" />
            <img src={icon_instagram} alt="icon_instagram" />
            <img src={icon_twitter} alt="icon_twitter" />
            <img src={icon_mail} alt="icon_mail" />
            <img src={icon_twitch} alt="icon_twitch" />
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

export default Fotter;
