import {useState} from "react";
import styles from "./App.module.css";

// get id from link href
import {useParams} from "react-router-dom";

import axios from "axios";

function Detail() {
  // pengembalian paramnya
  const params = useParams();
  const {id} = params;
  // console.log(params);
  const [cars, setCars] = useState([]);
  async () => {
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/car",
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
          params: {
            id: {id},
          },
        }
      );
      setCars(response.data.cars);
      console.log(params);
      // console.log(params);
    } catch (e) {
      console.error("Failed to fetch");
    }
  };

  return (
    <>
      <div className={styles.coba}>id = {id}</div>

      <div className={styles.pencarian}>
        {cars.map((car) => (
          <div key={car.id}>
            <div className={styles.card}>
              <img src={car.image} alt="mobil" className={styles.img} />
              <div className={styles.judul}>{car.name}</div>
              <div className={styles.harga}>Rp {car.price} / hari</div>
              <div className={styles.deskripsi}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className={styles.heroButton1}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Detail;
