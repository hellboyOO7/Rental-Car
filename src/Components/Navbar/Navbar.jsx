import { useState } from "react";
import styles from "../Navbar/Navbar.module.css";

let Navbar = () => {
  let [handleHam, setHandleHam] = useState(false);

  let handleToggle = () => {
    if (!handleHam) {
      setHandleHam(true);
    } else {
      setHandleHam(false);
    }
  };
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.navlogo}
          src="src\assets\navbar\logo.png"
          alt="logo-image"
        />
        <h1 className={styles.navHeading}>Rental Car</h1>
      </div>
      <div className={`${styles.ulContainer} ${handleHam && styles.handleHam}`}>
        <ul className={styles.ulSection} onClick={() => setHandleHam(false)}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#models">Vehicle Models</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.userInput}>
        <div className={styles.btnContainer}>
          <button className={`${styles.btn} ${styles.signIn}`}>Sign In</button>
          <button className={`${styles.btn} ${styles.register}`}>
            Register
          </button>
        </div>
        <img
          className={styles.hamIcon}
          src={
            handleHam ? "src/assets/nav/close.png" : "src/assets/nav/menu.png"
          }
          alt="menu-button"
          onClick={handleToggle}
        />
      </div>
    </nav>
  );
};
export default Navbar;
