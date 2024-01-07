import React from "react";
import Select from "./component/Select";
import Background from "./component/Background";
// import bg from "../public/1445.png";
const options = [
  { value: "BAL", label: "baba" },
  { value: "XIXI", label: "xixi" },
  { value: "lu", label: "yoyo" },
  { value: "beb", label: "bili" },
  { value: "ik", label: "jack" },
  { value: "sha", label: "shax" },
  { value: "ji", label: "jiji" },
];
class SheckContainer extends React.Component {
  componentDidCatch(error) {
    alert(error);
  }
  render() {
    return (
      <div>
        this is Container
        {/* <div style={{ height: "300px", width: "100%", url: bg }}></div> */}
        <Background />
        <Select options={options} />
      </div>
    );
  }
}

export default SheckContainer;
