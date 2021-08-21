import { createContext, useState } from "react";

export const FilteredBusinessContext = createContext({});

export function FiltredBusinessProvider({ children }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  return (
    <FilteredBusinessContext.Provider
      value={{ filteredSuggestions, setFilteredSuggestions }}
    >
      {children}
    </FilteredBusinessContext.Provider>
  );
}
