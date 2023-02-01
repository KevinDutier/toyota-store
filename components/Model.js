import Header from "./Header";
import ModelImage from "./ModelImage";
import ModelInfo from "./ModelInfo";
import ModelOrderNow from "./ModelOrderNow";

function Model(props) {
  return (
    <>
      <Header />
      <ModelImage model={props.model} />
      <ModelInfo />
      <ModelOrderNow model={props.model} />
    </>
  );
}

export default Model;
