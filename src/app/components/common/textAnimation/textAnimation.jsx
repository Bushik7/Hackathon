import React from "react";
import "./textAnimation.css";

const TextAnimation = ({text}) => {
  
  const removeBorder = () => {
    const TextAnimation = document.querySelector(".typing-demo");
    TextAnimation.style.border = "none";
  };

  setTimeout(() => {
    removeBorder();
  }, 2500);

  const textLength = text.length;
  const styleAnimation = {
    width: `${textLength}ch`,
    animation: `typing 2s steps(${textLength}), blink .5s step-end alternate`,
    borderRight:"3px solid"
  };

  return (
    <div className="typing-demo mt-5" style={styleAnimation}>
      {text}
    </div>
  );
};

export default TextAnimation;