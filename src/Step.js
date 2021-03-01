import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  num: PropTypes.number,
  title: PropTypes.string,
};

const Step = ({className, num, title}) => {


  return (
    <>
      <div className={"Step"}>
        <span className={`Number ${className}`}>{num}</span>
        {title}
      </div>
    </>
  );
};

Step.propTypes = propTypes;
export default Step;
