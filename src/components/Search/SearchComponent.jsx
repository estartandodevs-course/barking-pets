import React from "react";
import { lupaIcon } from "../../assets/icons/index";

import "./SearchComponentStyle.scss";

export const SearchComponent = () => {
  return (
    <div className="search">
      <div className="search__text">
        <p>Seja bem vindo, </p>
        <p>  O que vamos fazer hoje?</p>
      </div>

      <form className="search__form">
        <input type="text" name="input" id="input" placeholder="Digite aqui a sua busca" className="search__input" />
        <img src={lupaIcon} alt="lupa" className="search__form--icon" />
      </form>
    </div>
  );
};
