import Header from "./Header";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Header />
      <Section
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0015_V004-1?wid=2000&fmt=jpg&fit=crop"
        header="Prius Prime"
        description="Discover the all-new 2023 Prius Prime"
      />
      <Section
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0001_V002?wid=2000&fmt=jpg&fit=crop"
        header="Prius Prime"
        description="All new EV"
      />
    </>
  );
}
