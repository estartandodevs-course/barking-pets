import React from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";

export function MenuDesktop() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const homeClass = isHome
    ? "menu-desktop__text--selected"
    : "menu-desktop__text--not-selected";

  return (
    <div className="menu-desktop">
      <a className={`menu-desktop__text ${homeClass}`} href="#">
        <p>Home</p>
      </a>
      <a className="menu-desktop__text" href="#">
        <p>Sobre nós</p>
      </a>
      <a className="menu-desktop__text" href="#">
        <p>Dicas</p>
      </a>
      <a className="menu-desktop__text" href="#">
        <p>Cadastre-se</p>
      </a>
      <a className="menu-desktop__text" href="#">
        <p>Entrar</p>
      </a>
    </div>
  );
}
