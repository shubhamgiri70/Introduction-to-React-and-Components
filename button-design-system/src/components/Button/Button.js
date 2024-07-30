import React from "react";
import "./Button.css";

function Button(props) {
  // Destructure props and provide default values
  const { label = "Button", type = "primary", size = "medium" } = props;

  function getStyles() {
    return `button button--${type} button--${size}`;
  }

  return <button className={getStyles()}>{label}</button>;
}

export default Button;
