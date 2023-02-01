import Header from "./Header";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Header />
      <Section
        id="prius"
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/PRP_MY20_0015_V004-1?wid=2000&fmt=jpg&fit=crop"
        header="Prius"
        description="The hybrid reinvented."
      />
      <Section
        id="supra"
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/SUP_MY23_0003_V001_desktop_new?wid=2000&resMode=bisharp&qlt=90"
        header="Supra"
        description="Shift it up a notch."
      />
      <Section
        id="highlander"
        backgroundImage="https://preview1.assetsadobe.com/is/image/toyota/HLD_MY23_0003_V001?wid=2000&fmt=jpg&fit=crop"
        header="Highlander"
        description="Venture ahead."
      />
      <Section
        id="c-hr"
        backgroundImage="https://toyotaassets.scene7.com/is/image/toyota/CHR_MY22_0005_V001?wid=2000&fmt=jpg&fit=crop"
        header="C-HR"
        description="Drive with purpose."
      />
    </>
  );
}
