import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../assets/icons/index";
import { AutoComplete } from "../AutoComplete";
import "./styles.scss";

export const Search = ({ suggestions, classSearch = "" }) => {
  const [userInput, setUserInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  function matches(local) {
    return local.toLowerCase().includes(userInput.toLowerCase());
  }

  useEffect(() => {
    setFilteredSuggestions(() => {
      return suggestions.filter(({ municipio, uf }) => {
        return matches(`${uf} - ${municipio} `);
      });
    });
  }, [userInput]);

  function onChangeHandle(event) {
    setUserInput(event.target.value);
    setShowSuggestions(true);
  }

  return (
    <div className="search">
      <form className={`${classSearch} search__form`}>
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Digite aqui a sua busca"
          className="search__input"
          onChange={onChangeHandle}
          value={userInput}
        />
        <img src={SearchIcon} alt="lupa" className="search__form--icon" />
      </form>

      <AutoComplete
        setUserInput={setUserInput}
        userInput={userInput}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        filteredSuggestions={filteredSuggestions}
      />
    </div>
  );
};
