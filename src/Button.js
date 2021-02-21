import React from "react";
import "./App.css";

const Button = (props) => {
  return (
    <div className={`Button ${props.buttonName}`} onClick={props.onClick}>
      {props.buttonName}
    </div>
  );
};

export default Button;
