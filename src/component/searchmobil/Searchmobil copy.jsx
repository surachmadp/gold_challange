import {useState} from "react";
import axios from "axios";

import {Button} from "react-bootstrap";

import styles from "./App.module.css";

function Searchmobil() {
  const [input, setInput] = useState("");
  const [categoryMobil, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [cars, setCars] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/car",
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
          params: {
            name: input,
            minPrice: price,
            category: categoryMobil,
          },
        }
      );
      setCars(response.data.cars);
      console.log(response.data.cars);
      console.log(input);
    } catch (e) {
      console.error("Failed to fetch");
    }
  };
  return (
    <>
      <div className={styles.cariMobil}>
        {/* nama mobil */}
        <div className={styles.frame}>
          <div className={styles.input}>
            <div className={styles.label + " " + styles.text}>Nama Mobil</div>
            <div className={styles.isi}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.textIsi}
                placeholder="Ketik nama/tipe mobil"
              />
            </div>
          </div>

          {/* kategori */}
          <div className={styles.input}>
            <div className={styles.label + " " + styles.text}>Kategori</div>
            <div className={styles.isi}>
              <input
                className={styles.textIsi}
                value={categoryMobil}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Masukan Kapasitas Mobil"
              />
            </div>
          </div>

          {/* harga min price */}
          <div className={styles.input}>
            <div className={styles.label + " " + styles.text}>Harga</div>
            <div className={styles.isi}>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className={styles.textIsi}
                placeholder="Masukan Harga Sewa per Hari"
              />
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.label + " " + styles.text}>Status</div>
            <div className={styles.isi}>
              <input
                name="myInput"
                className={styles.textIsi}
                placeholder="Disewa"
              />
            </div>
          </div>

          <div className={styles.buttonCari}>
            <Button variant="success" onClick={handleClick}>
              Cari Mobil
            </Button>
          </div>
        </div>
      </div>

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
              <div className={styles.heroButton1}>
                <Button variant="success" onClick={() => console.log(car.id)}>
                  Pilih Mobil
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* belajar */}
      {/* <div>
        {cars.map((car) => (
          // <span key={car.id} style={{background: "red"}}>
          //   {car.name} - {car.category} - {car.price} -{" "}
          //   {"|-------------------| "}
          // </span>
          <div key={car.id}>
            <div>{car.name}</div>
            <div>{car.category}</div>
            <div>{car.price}</div>
            <div>
              <img src={car.image} alt="mobil" />
            </div>

            <div>------------</div>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Searchmobil;
