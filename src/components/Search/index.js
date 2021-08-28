import React, { useEffect, useState, useContext } from "react";
import { SearchIcon } from "../../assets/icons/index";
import { getLocations, getAllBusinessFiltered } from "../../services/business";
import { AutoComplete } from "../AutoComplete";
import { FilteredBusinessContext } from "../../contexts/index";
import "./styles.scss";

export const Search = ({
  classSearch = "",
  filter,
  setUserInput,
  userInput,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const C = useContext(FilteredBusinessContext);

  useEffect(() => {
    const locations = getLocations(filter, userInput);
    const suggestions = getAllBusinessFiltered(filter, userInput);
    C.setFilteredSuggestions(suggestions);
    C.setFilteredLocations(locations);
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
          autoComplete="off"
        />
        <img src={SearchIcon} alt="lupa" className="search__form--icon" />
      </form>

      <AutoComplete
        setUserInput={setUserInput}
        userInput={userInput}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        filteredSuggestions={C.filteredLocations}
      />
    </div>
  );
};
