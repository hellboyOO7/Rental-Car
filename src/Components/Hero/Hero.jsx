import styles from "./Hero.module.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";

let Hero = () => {
  return (
    <section className={styles.heroContainer} id="hero">
      <div className={styles.leftContainer}>
        <h3>Plan your trip now</h3>
        <h1>
          Save <span>big</span> with our car rental
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className={styles.btnContainer}>
          <button className={`${styles.btns} ${styles.bookRide}`}>
            Book Ride
            <MdCheckCircle />
          </button>
          <button className={`${styles.btns} ${styles.learnMore}`}>
            Learm more <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img
          className={styles.heroImage}
          src="src\assets\Hero\download.jpg"
          alt="Hero Image"
        />
      </div>
    </section>
  );
};
export default Hero;
