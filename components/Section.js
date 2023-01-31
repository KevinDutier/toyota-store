import styles from "../styles/Section.module.css";

export default function Section({ backgroundImage, header, description }) {
  return (
    <div
      className={styles.wrap}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <div className={styles.itemText}>
          <h1>{header}</h1>
          <p>{description}</p>
        </div>
      </div>

      {/* bottomContainer contains buttons and arrow */}
      <div className={styles.bottomContainer}>
        {/* buttonContainer contains the two buttons */}
        <div className={styles.buttonContainer}>
          <div className={styles.button + " " + styles.leftButton}>
            Custom order
          </div>
          <div className={styles.button + " " + styles.rightButton}>
            Existing inventory
          </div>
        </div>

        {/* arrow contains the arrow */}
        <div className={styles.arrow}>
          <img src="down-arrow.png" height={44} />
        </div>
      </div>
    </div>
  );
}
