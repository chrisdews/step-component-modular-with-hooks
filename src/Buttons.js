import React from "react";
import Button from "./Button";
import "./App.css";

const Buttons = (props) => {
  return (
    <div className={"Button-Container"}>
      {!!props.activeIndex && (
        <Button
          buttonName={"Previous"}
          onClick={() => {
            props.previousClick();
          }}
        />
      )}
      {props.activeIndex === props.stepsLength - 1 ? (
        <Button buttonName={"Done"} onClick={() => {window.alert('you done')}} />
      ) : (
        <Button
          buttonName={"Next"}
          onClick={() => {
            props.nextClick();
          }}
        />
      )}
    </div>
  );
};

export default Buttons;
