import {Component} from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./App.module.css";
import user1 from "../../assets/images/img_testi_1.webp";
import user2 from "../../assets/images/img_testi_2.webp";
import user3 from "../../assets/images/img_testi_3.png";
import star from "../../assets/images/star.svg";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.testimonial}>
        <div className={styles.judul}>Testimonial</div>
        <div className={styles.subJudul}>
          Berbagai review positif dari para pelanggan kami
        </div>
        <Slider {...settings}>
          <div className={styles.card}>
            <img src={user1} alt="user1" />
            <div className={styles.kalimat}>
              <div className={styles.star}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div className={styles.text}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </div>
              <div className={styles.alamat}>John Dee 32, Bromo</div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={user2} alt="user2" />
            <div className={styles.kalimat}>
              <div className={styles.star}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div className={styles.text}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </div>
              <div className={styles.alamat}>John Dee 32, Bromo</div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={user3} alt="user3" />
            <div className={styles.kalimat}>
              <div className={styles.star}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div className={styles.text}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </div>
              <div className={styles.alamat}>John Dee 32, Bromo</div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
