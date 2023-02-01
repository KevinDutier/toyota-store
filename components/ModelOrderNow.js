import styles from "../styles/ModelOrderNow.module.css";

function ModelOrderNow({ model }) {
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
        <img src="prius/prius-order-now.png" />
      </div>
    </div>
  );
}

export default ModelOrderNow;
