import React from "react";
import Select from "./component/Select";
class SheckContainer extends React.Component {
  componentDidCatch(error) {
    alert(error);
  }
  render() {
    return (
      <div>
        this is Container
        <Select />
      </div>
    );
  }
}

export default SheckContainer;
