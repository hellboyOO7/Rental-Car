import styles from "./Download.module.css";

let Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Download our app to get most out of it</h1>
        <p>
          Experience seamless car rentals at your fingertips! Download our app
          for quick reservations, exclusive discounts, and real-time vehicle
          tracking. Whether you're planning a weekend getaway or a business
          trip, our app ensures you have the perfect ride ready when you need
          it. Click the buttons below to download now!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="Downloads/play.PNG" alt="" />
        <img src="Downloads/app.PNG" alt="" />
      </div>
    </div>
  );
};
export default Download;
