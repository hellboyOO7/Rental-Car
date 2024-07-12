import styles from "./Details.module.css";
import { IoIosArrowForward } from "react-icons/io";

let Details = () => {
  return (
    <section className={styles.detailContainer}>
      <div className={styles.imgConatiner}>
        <img src="src\assets\Details\details.png" alt="" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.leftContent}>
          <h4>Why Choose Us</h4>
          <h1>Best valued deals you will ever find</h1>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money.
            So you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience. so don't miss out on your chance to save big.
          </p>
          <button>
            Find Details
            <IoIosArrowForward />
          </button>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.section}>
            <span>
              <img src="src\assets\Details\crossCountry.png" alt="" />
            </span>
            <div className={styles.sectionContent}>
              <h2>Cross Country Drive</h2>
              <p>
                Take your driving experience to the next level with out
                top-notch vehicles fro your cross-country adventures.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>
              <img src="src\assets\Details\inclusiveprice.png" alt="" />
            </span>
            <div className={styles.sectionContent}>
              <h2>All Inclusive Pricing</h2>
              <p>
                Get everything you need in one convenient, transparent price
                with out all-inclusive pricing policy.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>
              <img src="src\assets\Details\hiddenCharge.png" alt="" />
            </span>
            <div className={styles.sectionContent}>
              <h2>No Hidden Charges</h2>
              <p>
                Enjoy peace of mind wiht our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
