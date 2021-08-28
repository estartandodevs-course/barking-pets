/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, SairIcon } from "../../assets/icons";
import "./styles.scss";

export function Menu() {
  const menuLinks = [
    { title: "Home", path: "/" },
    { title: "Sobre nós", path: "/sobre_nos" },
    { title: "Dicas", path: "/dicas" },
    { title: "Cadastre-se", path: "/cadastrar" },
    { title: "Entrar", path: "/entrar" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="menu">
        <img
          src={MenuIcon}
          onClick={() => {
            setShowMenu(true);
          }}
          alt="Menu"
          className="menu--hamburguer"
        />
        {showMenu && (
          <div className="menu-open">
            <img
              src={SairIcon}
              onClick={() => {
                setShowMenu(false);
              }}
              alt="Sair"
              className="menu-desktop__sair"
            />
            {menuLinks.map((link) => {
              return (
                <>
                  <Link key={link.title} className="menu-mobile" to={link.path}>
                    <p>{link.title}</p>
                  </Link>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
