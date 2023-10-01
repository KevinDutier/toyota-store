import styles from "../styles/Section.module.css";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

function ModelImage({ model }) {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    // on page load, change background image and description depending on the car model
    if (model === "Prius") {
      setBackgroundImage(
        "Prius/more.png"
      );
      setDescription("Take charge of your day.");
    } else if (model === "Supra") {
      setBackgroundImage(
        "Supra/more.png"
      );
      setDescription("Street legal, circuit ready.");
    } else if (model === "C-HR") {
      setBackgroundImage(
        "C-HR/more.png"
      );
      setDescription("Look sharper than ever.");
    } else if (model === "Highlander") {
      setBackgroundImage(
        "Highlander/more.png"
      );
      setDescription("Upgrade your adventures.");
    }
  }, [model]);

  return (
    <div
      className={styles.wrap}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Fade bottom>
        <div className={styles.itemText}>
          <h1 style={{ color: "#f1f1f1" }}>{model}</h1>
          <p style={{ color: "#f1f1f1" }}>{description}</p>
        </div>
      </Fade>

      <div className={styles.arrow}>
        <img src="down-arrow.png" height={44} />
      </div>
    </div>
  );
}

export default ModelImage;
