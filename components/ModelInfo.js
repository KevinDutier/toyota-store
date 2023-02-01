import styles from "../styles/ModelInfo.module.css";
import Fade from "react-reveal/Fade";

function ModelInfo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>

        <div className={styles.container}>
          <Fade bottom>
            <img src="https://preview1.assetsadobe.com/is/image/toyota/HLD_MY23_0002_V001?wid=1296&fmt=jpg&fit=crop&qlt=90" className={styles.image} />
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Stay connected</h1>
              <p className={styles.text}>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
          </Fade>
        </div>
        
        <div className={styles.container}>
          <Fade bottom>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Versatile driving modes</h1>
              <p className={styles.text}>Choose between multiple driving modes and stay in control: EV (Electric Vehicle) Mode, EV Auto Mode and HV (Hybrid Vehicle) Mode. </p>
            </div>
            <img src="https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0040_V001-1?wid=1296&fmt=jpg&fit=crop&qlt=90" className={styles.image} />
          </Fade>
        </div>

        <div className={styles.container}>
          <Fade bottom>
            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop" className={styles.image} />
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Room for everything</h1>
              <p className={styles.text}>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default ModelInfo;
