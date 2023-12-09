import React from "react";
class SheckContainer extends React.Component {
  componentDidCatch(error) {
    alert(error);
  }
  render() {
    return <div>this is Container</div>;
  }
}

export default SheckContainer;
