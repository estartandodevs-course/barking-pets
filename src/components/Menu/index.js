import React from "react";
import { MenuIcon } from "../../assets/icons";
import "./styles.scss";

export function Menu() {
  return (
    <div className="menu">
      <img src={MenuIcon} alt="Menu" className="menu--hamburguer" />
    </div>
  );
}
