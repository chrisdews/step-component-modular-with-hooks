import "./App.css";
import Steps from "./Steps";
import Buttons from "./Buttons";
import ContentContainer from "./ContentContainer";
import { useState } from "react";

function App() {
  const steps = [
    { title: "First", content: "First content" },
    { title: "Second", content: "Second Content" },
    { title: "Third", content: "Third Content" },
    { title: "Forth", content: "n+1!"}
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const nextClick = () => {
    setActiveIndex(activeIndex + 1);
  };
  const previousClick = () => {
    setActiveIndex(activeIndex - 1);
  };

  return steps ? (
    <div className="App">
      <Steps
        steps={steps}
        activeIndex={activeIndex}
        stepsLength={steps.length}
      />
      <ContentContainer activeContent={steps[activeIndex].content} />
      <Buttons
        activeIndex={activeIndex}
        stepsLength={steps.length}
        nextClick={nextClick}
        previousClick={previousClick}
      />
    </div>
  ) : (
    "content error"
  );
}

export default App;
