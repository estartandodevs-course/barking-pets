import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../assets/icons/index";
import "./styles.scss";

export const Search = () => {
  const [text, setText] = useState("");
  const [Suggestions, setSuggestions] = useState([]);

  const states = [
    {
      id: 1,
      UF: "RJ",
      Estado: "Rio De Jnaeiro",
      País: "Brasil",
    },
    {
      id: 2,
      UF: "RJ",
      Estado: "Rio De Jnaeiro",
      País: "Brasil",
    },
    {
      id: 3,
      UF: "RJ",
      Estado: "Rio De Jnaeiro",
      País: "Brasil",
    },
    {
      id: 4,
      UF: "RJ",
      Estado: "Rio De Jnaeiro",
      País: "Brasil",
    },
  ];

  const onChageHandle = (valueText) => {
    setText(valueText);
  };

  console.log(Suggestions);

  return (
    <div className="search">
      <h1>{text}</h1>

      <form className="search__form">
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Digite aqui a sua busca"
          className="search__input"
          onChange={(e) => onChageHandle(e.target.value)}
          value={text}
        />
        <img src={SearchIcon} alt="lupa" className="search__form--icon" />
      </form>
    </div>
  );
};
