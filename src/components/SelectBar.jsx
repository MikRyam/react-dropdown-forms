import React, { useState } from "react";
import "../styles/SelectBar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const SelectBar = ({
  placeholder,
  data,
  item,
  customWidth,
  zIndex1,
  zIndex2,
}) => {
  const [value, setValue] = useState("");
  const [expanded, setExpanded] = useState(false);

  const expand = () => setExpanded(true);

  const close = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 200);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const getSelectedItem = (color) => {
    setValue(color.name);
    close();
    // our api to fetch the select result
    console.log(`Selected ${item} ID: ${color.id}`);
  };

  return (
    <div className="select" onBlur={close}>
      <div
        className="selectInputs"
        onFocus={expand}
        style={{ width: customWidth, zIndex: zIndex1 }} 
      >
        <input
          readOnly="readonly"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="expandIcon">
          {expanded ? (
            <ExpandLessIcon onClick={close} />
          ) : (
            <ExpandMoreIcon onClick={expand} />
          )}
        </div>
      </div>
      {expanded && (
        <div
          className="dropdownboxColors-wrapper"
          style={{ width: customWidth, zIndex: zIndex2 }}
        >
          <div className="dropdownboxColors">
            {data.map((color) => {
              return (
                <p
                  key={color.id}
                  className="dataItem"
                  onClick={() => getSelectedItem(color)}
                >
                  {color.name}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectBar;
