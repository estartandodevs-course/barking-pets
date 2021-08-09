import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export function MenuDesktop() {
  const menuLinks = [
    { title: "Home", path: "/" },
    { title: "Sobre nós", path: "/about" },
    { title: "Dicas", path: "/dicas" },
    { title: "Cadastre-se", path: "/entrar" },
    { title: "Entrar", path: "/entrar" },
  ];
  const pathname = "/";
  return (
    <div className="menu-desktop">
      {menuLinks.map((link) => {
        const isSelected = link.path === pathname;
        const aClass = isSelected
          ? "menu-desktop__text--selected"
          : "menu-desktop__text--not-selected";
        return (
          <Link
            href="#"
            key={link.title}
            className={`menu-desktop__text ${aClass}`}
            to={link.path}
          >
            <p>{link.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
