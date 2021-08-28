import React from "react";
import "./styles.scss";

export function Button({ children, classButton, onClick = () => {} }) {
  return (
    <button
      className={`button-component ${classButton} `}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
