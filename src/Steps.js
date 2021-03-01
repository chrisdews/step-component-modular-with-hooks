import React from "react";
import "./App.css";
import Step from "./Step";
import PropTypes from "prop-types";

const propTypes = {
  activeIndex: PropTypes.number,
  steps: PropTypes.array
};

const Steps = ({activeIndex, steps}) => {

  const classNameHelper = (stepIndex) => {
    if (stepIndex > activeIndex) return "Inactive";
    if (stepIndex === activeIndex) return "Active";
    return "Completed";
  };

  return (
    <div className={"Steps-Container"}>
      {steps.map((step, index) => (
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

Steps.propTypes = propTypes
export default Steps;
