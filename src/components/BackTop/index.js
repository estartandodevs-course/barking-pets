import React from "react";
import { backTop } from "../../assets/icons";
import "./styles.scss";

export function BackTop() {
  function backTopPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="backtop" onClick={backTopPage} aria-hidden="true">
      <p className="backtop__text">Voltar ao topo</p>
      <img className="backtop__image" src={backTop} alt="Voltar ao topo" />
    </div>
  );
}
