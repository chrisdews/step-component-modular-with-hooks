import React from "react";
import "./App.css";

const ContentContainer = (props) => {
  return <div className={"Content-Container"}>{props.activeContent}</div>;
};

export default ContentContainer;
