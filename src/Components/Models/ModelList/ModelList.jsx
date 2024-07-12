import { useState } from "react";
import styles from "./ModelList.module.css";
import { PiLineVerticalBold } from "react-icons/pi";

let ModelList = ({ carModels }) => {
  let [image, setImage] = useState("Models/elentra.PNG");
  let [details, setDetails] = useState({
    rent: "1100",
    brand: "Hyundai",
    model: "Elantra",
    mark: "A1",
    year: 2016,
    doors: "4 / 5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Petrol",
  });

  let handlebtn = (
    img,
    rent,
    brand,
    model,
    mark,
    year,
    doors,
    ac,
    transmission,
    fuel
  ) => {
    setImage(img);
    setDetails({
      rent,
      brand,
      model,
      mark,
      year,
      doors,
      ac,
      transmission,
      fuel,
    });
  };

  return (
    <div className={styles.modelContainer}>
      <div className={styles.modelName}>
        {carModels.map((item, idx) => {
          return (
            <button
              className={styles.modelBtn}
              onClick={() =>
                handlebtn(
                  item.img,
                  item.rent,
                  item.brand,
                  item.model,
                  item.mark,
                  item.year,
                  item.doors,
                  item.ac,
                  item.transmission,
                  item.fuel
                )
              }
              key={idx}
            >
              {item.brand} {item.model}
            </button>
          );
        })}
      </div>
      <div className={styles.modelImg}>
        <img src={image} />
      </div>
      <div className={styles.modelDetails}>
        <table>
          <tbody>
            <tr>
              <td className={styles.topHead}>
                Rs. {details.rent} / rent per day
              </td>
              <td>
                <span>Model</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.model}</span>
              </td>
              <td>
                <span>Mark</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.mark}</span>
              </td>
              <td>
                <span>Year</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.year}</span>
              </td>
              <td>
                <span>Doors</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.doors}</span>
              </td>
              <td>
                <span>AC</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.ac}</span>
              </td>
              <td>
                <span>Gear</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.transmission}</span>
              </td>
              <td>
                <span>Fuel</span>
                <span>
                  <PiLineVerticalBold />
                </span>
                <span>{details.fuel}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Reserve Now</button>
      </div>
    </div>
  );
};
export default ModelList;
