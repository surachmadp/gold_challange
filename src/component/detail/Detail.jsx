import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HEADERS } from "./constants";
import { formatCurrency } from "./helpers";
import styles from "./App.module.css";
import "./Accordion.css";
// accordian untuk show text
import Accordion from "react-bootstrap/Accordion";

import tombolbawah from "../../assets/images/fi_users.svg";

const DETAIL_URL = "https://api-car-rental.binaracademy.org/admin/car";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${DETAIL_URL}/${id}`, {
        headers: HEADERS,
      })
      .then((response) => {
        setData(response.data);
      });
  }, [id]);

  console.log(data);

  return (
    <div className={styles.detail}>
      <div className={styles.cardDetail}>
        <div className={styles.textBold}>Tentang Paket</div>
        <div className={styles.kalimat}>
          <div className={styles.textBold}>Inlcude</div>
          <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
        </div>
        <div className={styles.kalimat}>
          <div className={styles.textBold}>Exclude</div>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className={styles.dropdown}>
          <Accordion defaultActiveKey="0" Border-0>
            <Accordion.Item eventKey="0" Border-0>
              {/* <Accordion.Header className={styles.textBold} Border-0> */}
              <Accordion.Header>Refund, Reschedule, Overtime</Accordion.Header>
              <Accordion.Body>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className={styles.cardGambar}>
        <img src={data.image} alt={data.name} />

        <div className={styles.textBold}>{data.name}</div>
        <div className={styles.frame}>
          <img src={tombolbawah} alt="tombolbawah" /> 6-8 Orang
        </div>

        <div className={styles.frameHarga}>
          <div className={styles.textBold}>Total</div>
          <div className={styles.textBold}>{formatCurrency(data.price)}</div>
        </div>
      </div>
      {/* Hello World <Link to="/">balik</Link> */}
    </div>
  );
};

export default Detail;
