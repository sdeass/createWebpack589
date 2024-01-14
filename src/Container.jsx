import React from "react";
import Select from "./component/Select";
import Background from "./component/Background";
import Background2 from "./component/Background2";
import bg from "./static/1445.png";
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
      <div style={{ height: "100%", width: "100%", position: "absolute" }}>
        this is Container
        <div
          style={{
            height: "20%",
            width: "39%",
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "100%",
            position: "absolute",
            top: "30%",
            left: "8%",
          }}
        >
          <Select options={options} />
        </div>
        <Background2 />
        <Background />
      </div>
    );
  }
}

export default SheckContainer;
