import styles from "./Plan.module.css";

let Plan = () => {
  return (
    <section className={styles.planContainer}>
      <div className={styles.plan1}>
        <h3>Plan your trip now</h3>
        <h1>Quick and easy rental cars</h1>
      </div>
      <div className={styles.plan2}>
        <div className={styles.sections}>
          <img src="src\assets\plan\select.png" alt="" />
          <h2>Select Car</h2>
          <p>
            We offers a big range of vehicles for all your driving needs. we
            have the perfect car to meet your needs
          </p>
        </div>
        <div className={styles.sections}>
          <img src="src\assets\plan\contact.png" alt="" />
          <h2>Contact Operator</h2>
          <p>
            Our knowledgeable and friendly opertors are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className={styles.sections}>
          <img src="src\assets\plan\trip.png" alt="" />
          <h2>Let's Drive</h2>
          <p>
            Wheather you're hitting the open road, we've got you covered with
            our wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};
export default Plan;
