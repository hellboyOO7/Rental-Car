import styles from "./Comment.module.css";

let Comment = ({ user }) => {
  return (
    <>
      {user.map((item, idx) => {
        return (
          <div key={idx} className={styles.container}>
            <div className={styles.textContainer}>{item.comment}</div>
            <div className={styles.userContainer}>
              <div className={styles.userInfo}>
                <div className={styles.imgContainer}>
                  <img src={item.image} />
                </div>
                <div className={styles.nameCity}>
                  <h3>{item.name}</h3>
                  <p>{item.city}</p>
                </div>
              </div>
              <img className={styles.commentIcon} src="Testimonial/coma.png" />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Comment;
