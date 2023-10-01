import Header from "./Header";
import Section from "./Section";
import About from "./About";

export default function Home() {
  return (
    <>
      <Header />
      <Section
        id="prius"
        backgroundImage="Prius/home.png"
        header="Prius"
        description="The hybrid reinvented."
      />
      <Section
        id="supra"
        backgroundImage="Supra/home.png"
        header="Supra"
        description="Shift it up a notch."
      />
      <Section
        id="highlander"
        backgroundImage="Highlander/home.png"
        header="Highlander"
        description="Venture ahead."
      />
      <Section
        id="c-hr"
        backgroundImage="C-HR/home.png"
        header="C-HR"
        description="Drive with purpose."
      />
      <About />
    </>
  );
}
