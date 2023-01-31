import styles from "../styles/Section.module.css";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function Section({ backgroundImage, header, description }) {
  return (
    <div
      className={styles.wrap}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Fade bottom>
          <div className={styles.itemText}>
            <h1>{header}</h1>
            <p>{description}</p>
          </div>
      </Fade>

      {/* bottomContainer contains buttons and arrow */}
      <Fade bottom >
        <div className={styles.bottomContainer}>
          {/* buttonContainer contains the two buttons */}
          <div className={styles.buttonContainer}>
            <div className={styles.button + " " + styles.leftButton}>
              CUSTOM ORDER
            </div>
            <div className={styles.button + " " + styles.rightButton}>
              EXISTING INVENTORY
            </div>
          </div>

          {/* arrow contains the arrow */}
          <div className={styles.arrow}>
            <img src="down-arrow.png" height={44} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
