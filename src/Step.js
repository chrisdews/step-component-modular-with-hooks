import React from "react";
import "./App.css";

const Step = (props) => {
  console.log(props);
  return (
    <>
      <div className={"Step"}>
        <span className={`Number ${props.className}`}>{props.num}</span>
        {props.title}
      </div>
    </>
  );
};

export default Step;
