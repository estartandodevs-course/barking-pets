import React, { useState } from "react";

export function AutoComplete(props) {
  const [complete, setComplete] = useState({
    activeSuggestions: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  const {
    // activeSuggestions,
    filteredSuggestions,
    showSuggestions,
    userInput,
  } = complete;

  function onChangeHandle(event) {
    const { suggestions } = props;
    const inputValue = event.target.value;

    const filteredSuggestion = suggestions.filter(({ estado }) => {
      return (estado.toLowerCase().includes(inputValue.toLowerCase()));
    });

    setComplete({
      activeSuggestions: 0,
      filteredSuggestions: filteredSuggestion,
      showSuggestions: true,
      userInput: event.target.value,
    });
  }

  function onClick(event) {
    setComplete({
      activeSuggestions: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.target.innerText,
    });
  }

  function onKeyDownHandle(event) {
    setComplete({
      activeSuggestions: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.target.innerText,
    });
  }

  let suggestionsList;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsList = (
        <ul className="">
          {filteredSuggestions.map(({ estado, id }) => {
            return (
              <li key={id} onClick={onClick} onKeyDown={onKeyDownHandle}>
                {estado}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsList = (
        <div>
          <strong>Item Não Encontrado</strong>
        </div>
      );
    }
  }

  console.log(filteredSuggestions);

  return (
    <>
      <input
        type="text"
        onChange={onChangeHandle}
        value={userInput}
        className="search-input"
      />
      {suggestionsList}
    </>
  );
}
