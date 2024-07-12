import styles from "./Banner.module.css";

let Banner = () => {
  return (
    <section className={styles.banner}>
      <h1>Save big with our cheap rental cars</h1>
      <h3>
        Top Airports. Local Supplier. <span>24/7</span> Support
      </h3>
    </section>
  );
};
export default Banner;
