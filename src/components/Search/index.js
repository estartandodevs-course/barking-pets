import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../assets/icons/index";
import { getAllBusinessFiltered } from "../../services/business";
import { AutoComplete } from "../AutoComplete";
import "./styles.scss";

export const Search = ({ classSearch = "", filter }) => {
  const [userInput, setUserInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const filteredResults = getAllBusinessFiltered(filter, userInput);
    setFilteredSuggestions(filteredResults);
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
