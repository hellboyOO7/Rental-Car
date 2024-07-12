import { useState } from "react";
import styles from "./Models.module.css";
import ModelList from "./ModelList/ModelList";

let Models = () => {
  let [carModels, setCarModels] = useState([
    {
      rent: "1100",
      img: "../src/assets/Models/elentra.PNG",
      brand: "Hyundai",
      model: "Elantra",
      mark: "A1",
      year: 2016,
      doors: "4 / 5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Petrol",
    },
    {
      rent: "850",
      img: "../src/assets/Models/swift.PNG",
      brand: "Suzuki",
      model: "Swift",
      mark: "A2",
      year: 2014,
      doors: "4 / 5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      rent: "1899",
      img: "../src/assets/Models/fortuner.PNG",
      brand: "Toyota",
      model: "Fortuner",
      mark: "A1",
      year: 2020,
      doors: "4 / 5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      rent: "1499",
      img: "../src/assets/Models/harrier.PNG",
      brand: "Tata",
      model: "Harrier",
      mark: "A1",
      year: 2018,
      doors: "4 / 5",
      ac: "Yes",
      transmission: "CVT",
      fuel: "Diesel",
    },
    {
      rent: "1250",
      img: "../src/assets/Models/thar.PNG",
      brand: "Mahindra",
      model: "Thar",
      mark: "A1",
      year: 2020,
      doors: "2 / 5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      rent: "1499",
      img: "../src/assets/Models/nexon.PNG",
      brand: "Tata",
      model: "Nexon",
      mark: "A1",
      year: 2021,
      doors: "4 / 5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Electric",
    },
  ]);

  return (
    <section className={styles.modelContainer}>
      <div className={styles.modeltext}>
        <h3>Vehicle Model</h3>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className={styles.modelDetailsContainer}>
        <ModelList carModels={carModels} />
      </div>
    </section>
  );
};
export default Models;
