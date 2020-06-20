import React from "react";

const ProgressBar = ({ children, value, progress, label }) => {
  return (
    <div className="progress">
      <div className="progress-bar">
        <Filler progress={progress} />
      </div>
    </div>
  );
};

const Filler = (props) => {
  return (
    <div className="progress-filler" style={{ width: `${props.progress}%` }} />
  );
};

export default ProgressBar;
