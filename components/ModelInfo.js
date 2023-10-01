import styles from "../styles/ModelInfo.module.css";
import Fade from "react-reveal/Fade";

function ModelInfo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <div className={styles.container}>
          <Fade bottom>
            <img
              src="Common/connect.png"
              className={styles.image}
            />
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Stay connected</h1>
              <p className={styles.text}>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </Fade>
        </div>

        <div className={styles.container}>
          <Fade bottom>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Relentless performance</h1>
              <p className={styles.text}>
                Performance wheels and tires keep the car planted, transferring
                even more power down to the road.
              </p>
            </div>
            <img
              src="Common/wheel.png"
              className={styles.image}
            />
          </Fade>
        </div>

        <div className={styles.container}>
          <Fade bottom>
            <img
              src="Common/room.png"
              className={styles.image}
            />
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Room for everything</h1>
              <p className={styles.text}>
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too.
              </p>
            </div>
          </Fade>
        </div>

        <div className={styles.container}>
          <Fade bottom>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Versatile driving modes</h1>
              <p className={styles.text}>
                Choose between multiple driving modes and stay in control: EV
                (Electric Vehicle) Mode, EV Auto Mode and HV (Hybrid Vehicle)
                Mode.
              </p>
            </div>
            <img
              src="Common/modes.png"
              className={styles.image}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default ModelInfo;
