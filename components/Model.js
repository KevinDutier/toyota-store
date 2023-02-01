// import styles from "../styles/Section.module.css";
import ModelImage from "./ModelImage";
import ModelInfo from "./ModelInfo";
import ModelOrderNow from "./ModelOrderNow";

function Model() {
  return (
    <>
      <ModelImage
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0009_V001-1?wid=2000&fmt=jpg&fit=crop"
        header="Prius"
        description="All-new EV"
      />
      <ModelInfo />
      <ModelImage
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0016_V002-1?wid=2000&fmt=jpg&fit=crop"
        header="Prius"
        description="All-new EV"
      />
      <ModelOrderNow model="Prius" />
    </>
  );
}

export default Model;
