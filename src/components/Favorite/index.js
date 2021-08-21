/* eslint-disable */
import React, { useState } from "react";
import Favoritar from "../../assets/icons/favoritar.svg";
import Favoritado from "../../assets/icons/favoritado.svg";
import "./styles.scss";

export function Favorite({ classFavorite = "" }) {
  const [focus, setFocus] = useState(true);
  function changeImage() {
    setFocus(!focus);
  }
  return (
    <img
      onClick={changeImage}
      className={`Favorite ${classFavorite}`}
      src={focus ? Favoritar : Favoritado}
      alt="favoritar"
    />
  );
}
