import React from "react";
import "./style.scss";

export function MenuDesktop() {
  const menuLinks = [
    { title: "Home", path: "/" },
    { title: "Sobre nós", path: "/about" },
    { title: "Dicas", path: "/dicas" },
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
          <a href="#" className={`menu-desktop__text ${aClass}`}>
            <p>{link.title}</p>
          </a>
        );
      })}
    </div>
  );
}
