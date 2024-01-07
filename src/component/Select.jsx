import React, { forwardRef } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 3rem;
  border: 1px solid;
`;
const Select = forwardRef((props, ref) => {
  return (
    <SelectContainer className="paginationSelectContainer">
      <div className="paginationSelectContainer-warrper">
        <span>select</span>
      </div>
      <div className="paginationSelectContainer-optionsList">
        <div className="paginationSelectContainer-option">baba</div>
        <div className="paginationSelectContainer-option">xixi</div>
      </div>
    </SelectContainer>
  );
});

export default Select;
