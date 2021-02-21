import React from "react";
import "./App.css";
import Step from "./Step";

const Steps = (props) => {
  const classNameHelper = (stepIndex) => {
    if (stepIndex > props.activeIndex) return "Inactive";
    if (stepIndex === props.activeIndex) return "Active";
    return "Completed";
  };

  return (
    <div className={"Steps-Container"}>
      {props.steps.map((step, index) => (
        <Step
          title={step.title}
          status={step.status}
          key={index}
          num={index + 1}
          className={classNameHelper(index)}
        />
      ))}
    </div>
  );
};

export default Steps;
