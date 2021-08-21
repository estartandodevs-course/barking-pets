import React from "react";
import "./styles.scss";

export function Input({ placeholder, type, children, name }) {
  return (
    <div className="input-component">
      <label htmlFor={name} className="input-component__label">
        {children}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        className="input-component__input"
      />
    </div>
  );
}
