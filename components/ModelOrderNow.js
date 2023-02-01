import styles from "../styles/ModelOrderNow.module.css";
import { useEffect, useState } from "react";

function ModelOrderNow({ model }) {
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    // sets the car image according to the model selected by the user
    setImage(<img src={`${model}/order-now.png`} />)
  }, [])
  
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <div className={styles.modelAndButtons}>
          <h1 className={styles.model}>{model}</h1>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>Order now</div>
            <div className={styles.button + " " + styles.buttonGrey}>
              View inventory
            </div>
          </div>
        </div>
        {image}
      </div>
    </div>
  );
}

export default ModelOrderNow;
