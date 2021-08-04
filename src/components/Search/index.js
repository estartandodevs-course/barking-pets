import React from "react";

import { SearchIcon } from "../../assets/icons/index";

import "./styles.scss";

export const Search = () => {
  return (
    <div className="search">
      <div className="search__text">
        <p>Seja bem vindo, </p>

        <p> O que vamos fazer hoje?</p>
      </div>

      <form className="search__form">
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Digite aqui a sua busca"
          className="search__input"
        />
        <img src={SearchIcon} alt="lupa" className="search__form--icon" />
      </form>
    </div>
  );
};
