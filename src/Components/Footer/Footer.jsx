import styles from "./Footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

let Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rental}>
        <h1>
          Rental <span>Car</span>
        </h1>
        <p>
          We offer a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs
        </p>
        <h3>
          <FaPhoneAlt style={{ marginRight: "10px" }} />
          {"(123)-456-7890"}
        </h3>
        <h3>
          <IoMail style={{ marginRight: "10px" }} />
          rentalcars@gamil.com
        </h3>
      </div>

      <div className={styles.company}>
        <h1>COMPANY</h1>
        <p>India</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>

      <div className={styles.working}>
        <h1>WORKING HOURS</h1>
        <p>Mon - Fri 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 7:00PM</p>
        <p>Sun: Closed</p>
      </div>

      <div className={styles.subscription}>
        <h1>SUBSCRIPTION</h1>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input type="text" placeholder="Enter Email Address" />
        <button>Submit</button>
      </div>
    </div>
  );
};
export default Footer;
