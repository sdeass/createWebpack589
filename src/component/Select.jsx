import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 30rem;
  cursor: pointer;
  position: relative;
  .paginationSelectContainer-warrper {
    padding: 0.4rem;
    line-height: 2.5rem;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .paginationSelectContainer-optionsList {
    position: absolute;
    color: #fff;
    background: #e66628;
    width: 100%;
    margin-top: 0.2rem;
    overflow-y: auto;
    transition: 0.3s ease-in-out;
    max-height: 6rem;
    line-height: 3rem;
    z-index: 9999;
  }
  .paginationSelectContainer-optionsList::-webkit-scrollbar {
    width: 0.4rem;
    background-color: #eee;
  }
  .paginationSelectContainer-optionsList::-webkit-scrollbar-thumb {
    background-color: rgba(27, 232, 59, 0.64);
  }
  .paginationSelectContainer-option {
    padding: 0 0.2rem;
  }
  .paginationSelectContainer-option:hover {
    background-color: rgba(27, 232, 59, 0.64);
  }
  .poActive {
    background-color: rgba(27, 232, 59, 0.64);
  }
`;
const Select = forwardRef((props, ref) => {
  const {
    listStyle,
    containerStyle,
    placeHolder,
    options = [],
    defalutTitle,
    onChange,
    activeClassNameProps = "poActive",
    ...rest
  } = props;
  const ol = useMemo(() => options, [props]);
  const [normarlHeight, setNormarlHeight] = useState(0);
  const [isShow, updateIsShow] = useState(false);
  const [title, updateTitle] = useState(defalutTitle ?? "--Select--");
  const [selectKey, updateSelected] = useState(0);
  const activeClassName = useMemo(() => activeClassNameProps, [props]);
  const optionsListRef = useRef();
  const onOptionShowEvent = useCallback(
    (e) => {
      if (isShow) {
        setNormarlHeight(0);
        updateIsShow(!isShow);
      } else {
        setNormarlHeight("6.8rem");
        updateIsShow(true);
      }
    },
    [normarlHeight, isShow]
  );
  const onSelectEvent = useCallback(
    (_, v, i) => {
      updateTitle(v.label);
      onOptionShowEvent(_);
      updateSelected(i);
    },
    [title, selectKey, onOptionShowEvent]
  );
  useImperativeHandle(
    ref,
    () => {
      normarlHeight;
      title;
    },
    []
  );
  return (
    <SelectContainer
      className="paginationSelectContainer"
      style={containerStyle}
      {...rest}
    >
      <div
        className="paginationSelectContainer-warrper"
        ref={optionsListRef}
        onClick={(e) => onOptionShowEvent(e)}
        {...rest}
      >
        <span aria-placeholder={placeHolder}>
          {options.length > 0 ? title : "--Select--"}
        </span>
      </div>
      <div
        className="paginationSelectContainer-optionsList"
        style={{ height: normarlHeight, ...listStyle }}
      >
        {Array.isArray(ol) &&
          ol.length > 0 &&
          ol.map((item, i) => {
            const classOption = selectKey === i ? activeClassName : "";
            return (
              <div
                key={"__innerOptions" + i}
                className={"paginationSelectContainer-option " + classOption}
                onClick={(e) => onSelectEvent(e, item, i)}
                onChange={(e) => onChange(e, item, i)}
              >
                {item?.label}
              </div>
            );
          })}
      </div>
    </SelectContainer>
  );
});

export default Select;
