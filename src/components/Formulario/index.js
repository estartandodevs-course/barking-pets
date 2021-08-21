import React from "react";
import "./styles.scss";

export function Formulario({ placeholder, type, children }) {
  return (
    <div className="formulario">
      <label htmlFor="form" className="formulatio__text">
        {children}
      </label>
      <input
        id="form"
        placeholder={placeholder}
        type={type}
        className="formulario__input"
      />
    </div>
  );
}
