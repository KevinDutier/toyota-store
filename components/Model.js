import Header from "./Header";
import ModelImage from "./ModelImage";
import ModelInfo from "./ModelInfo";
// import ModelOrderNow from "./ModelOrderNow";
import About from "./About";

function Model(props) {
  return (
    <>
      <Header />
      <ModelImage model={props.model} />
      <ModelInfo />
      <About />
    </>
  );
}

export default Model;
