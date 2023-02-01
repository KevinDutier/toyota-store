import styles from "../styles/Section.module.css";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

function ModelImage({ model }) {
  const [backgroundImage, setBackgroundImage] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    // on page load, change background image and description according to the car model
    if (model === "Prius") {
      setBackgroundImage(
        "https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0009_V001-1?wid=2000&fmt=jpg&fit=crop"
      );
      setDescription("Take charge of your day.");
    } else if (model === "Supra") {
      setBackgroundImage(
        "https://toyotaassets.scene7.com/is/image/toyota/SUP_MY23_0012_V001-1?wid=2000&fmt=jpg&fit=crop"
      );
      setDescription("Street legal, cuircuit ready.");
    } else if (model === "C-HR") {
      setBackgroundImage(
        "https://toyotaassets.scene7.com/is/image/toyota/CHR_MY21_0002_V001?wid=2000&fmt=jpg&fit=crop"
      );
      setDescription("Look sharper than ever.");
    } else if (model === "Highlander") {
      setBackgroundImage(
        "https://preview1.assetsadobe.com/is/image/toyota/HLD_MY23_0018_V001-1?wid=2000&fmt=jpg&fit=crop"
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
