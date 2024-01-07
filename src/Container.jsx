import React from "react";
import Select from "./component/Select";
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
        <Select options={options} />
      </div>
    );
  }
}

export default SheckContainer;
