import styles from "./BookCar.module.css";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

let BookCar = () => {
  return (
    <section className={styles.bookContainer}>
      <h1>Book a car</h1>
      <div>
        <div className={styles.firstRow}>
          <div className={styles.selectionContainer}>
            <label>
              <FaCar />
              Select Your Car Type
            </label>
            <select>
              <option value="select">Select Your Car Type</option>
              <option value="saab">Mini</option>
              <option value="opel">Hatch back</option>
              <option value="audi">Sedan</option>
              <option value="Compact">Compact SUV</option>
              <option value="SUV">SUV</option>
              <option value="MUV">MUV</option>
            </select>
          </div>
          <div className={styles.selectionContainer}>
            <label htmlFor="pickUp">
              <FaLocationDot />
              Pick-Up
            </label>
            <input
              id="pickUp"
              type="text"
              placeholder="Enter Your Pick-Up Point"
            />
          </div>
          <div className={styles.selectionContainer}>
            <label htmlFor="dropOf">
              <FaLocationDot />
              Drop-Of
            </label>
            <input
              id="dropOf"
              type="text"
              placeholder="Enter Your Drop-Of Point"
            />
          </div>
          <div className={styles.selectionContainer}>
            <label htmlFor="pointUp">
              <MdDateRange />
              Pick-Up Date
            </label>
            <input type="pointUp" placeholder="Enter Your Pick-Up Point" />
          </div>
          <div className={styles.selectionContainer}>
            <label htmlFor="pointDown">
              <MdDateRange />
              Drop-Of Date
            </label>
            <input type="pointDown" placeholder="Enter Your Pick-Up Point" />
          </div>
          <div className={styles.selectionBtn}>
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookCar;
