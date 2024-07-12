import { useState } from "react";
import styles from "./Testimonial.module.css";
import Comment from "./Comment/Comment";

let Testimonial = () => {
  let [user, setUser] = useState([
    {
      name: "Joe Doel",
      image: "Testimonial/user.PNG",
      city: "Belgrade",
      comment: `"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."`,
    },
    {
      name: "Lisa Amilia",
      image: "Testimonial/user.PNG",
      city: "Novi Sad",
      comment: `"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"`,
    },
  ]);
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Reviewed by People</h3>
        <h1> Client's Testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients have
          experienced our service and results, and they are eager to share their
          positive experience with you.
        </p>
      </div>
      <div className={styles.reviewContainer}>
        <Comment user={user} />
      </div>
    </section>
  );
};

export default Testimonial;
