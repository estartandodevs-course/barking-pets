import React from "react";
import { PatinhaAvaliar } from "../../assets/icons";

import "./styles.scss";

export function Comment() {
  return (
    <div>
      <div className="comment">
        <p className="comment--text">
          Já esteve no Ibis Copacabana Posto? Publique aqui sua avaliação:
        </p>
        <input
          placeholder="Digite seu comentário aqui..."
          className="comment--container"
        />
        <div className="comment--icon">
          <img src={PatinhaAvaliar} alt="comment--icon" />
          <img src={PatinhaAvaliar} alt="comment--icon" />
          <img src={PatinhaAvaliar} alt="comment--icon" />
          <img src={PatinhaAvaliar} alt="comment--icon" />
          <img src={PatinhaAvaliar} alt="comment--icon" />
        </div>
      </div>
      <div className="comment--boton">
        <button type="submit" className="button">
          Publicar
        </button>
      </div>
    </div>
  );
}
