import React from "react";
import "./styles.scss";

export function ButtonContact({ children, classButton }) {
  return (
    <button className={`button-component ${classButton} `} type="button">
      {children}
    </button>
  );
}
