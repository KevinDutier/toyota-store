import styles from "../styles/Section.module.css";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";

// popup imports
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Section(props) {
  const router = useRouter();

  const toModelPage = (props) => {
    router.push({ pathname: "./model", query: { param: props.header } });
  };

  return (
    <div
      className={styles.wrap}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      id={props.id}
    >
      <Fade bottom>
        <div className={styles.itemText}>
          <h1 style={{ color: "#f1f1f1" }}>{props.header}</h1>
          <p style={{ color: "#f1f1f1" }}>{props.description}</p>
        </div>
      </Fade>

      {/* bottomContainer contains buttons and arrow */}
      <Fade bottom>
        <div className={styles.bottomContainer}>
          {/* buttonContainer contains the two buttons */}
          <div className={styles.buttonContainer}>
            <Popup
              trigger={() => (
                <div className={styles.button}>Demo Drive</div>
              )}
              position="top center"
              closeOnDocumentClick
            >
              <p style={{ textAlign: "center" }}>Coming soon !</p>
            </Popup>

            <div
              className={styles.button + " " + styles.rightButton}
              onClick={() => toModelPage(props)}
            >
              Learn More
            </div>
          </div>

          <div className={styles.arrow}>
            <img src="down-arrow.png" height={44} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
