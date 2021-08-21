import React, { useEffect, useState, useContext } from "react";
import { SearchIcon } from "../../assets/icons/index";
import { getAllBusinessFiltered } from "../../services/business";
import { AutoComplete } from "../AutoComplete";
import { FilteredBusinessContext } from "../../contexts/index";
import "./styles.scss";

export const Search = ({ classSearch = "", filter }) => {
  const [userInput, setUserInput] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);

  const context = useContext(FilteredBusinessContext);
  const { filteredSuggestions, setFilteredSuggestions } = context;

  useEffect(() => {
    const filteredResults = getAllBusinessFiltered(filter, userInput);
    setFilteredSuggestions(filteredResults);
  }, [userInput, filter]);

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
