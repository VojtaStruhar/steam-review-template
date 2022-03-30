import "./Option.css";
import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useWindowWidth } from "@react-hook/window-size";

export default function RadioOption(props) {
  const windowWidth = useWindowWidth();

  props = props.props;
  props.selectedState = "";

  const radioClicked = (event) => {
    props.selectedState = event.target.value;
    sessionStorage.setItem(props.title, event.target.value);
  };

  const choices = () => {
    var array = [];
    for (let i = 0; i < props.options.length; i++) {
      const element = props.options[i];
      array.push(
        <FormControlLabel
          value={element}
          control={<Radio color="primary" />}
          label={element}
        />
      );
    }
    return array;
  };

  return (
    <div
      className="radio-container"
      style={{ width: windowWidth < 1000 ? "90%" : "40%" }}
    >
      <h3 className="snug">{props.title}</h3>
      <RadioGroup onChange={radioClicked}>{choices()}</RadioGroup>
    </div>
  );
}
