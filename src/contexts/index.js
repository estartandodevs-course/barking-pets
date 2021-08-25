import { createContext, useState } from "react";

export const FilteredBusinessContext = createContext({});

export function FiltredBusinessProvider({ children }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  return (
    <FilteredBusinessContext.Provider
      value={{
        filteredSuggestions,
        setFilteredSuggestions,
        filteredLocations,
        setFilteredLocations,
      }}
    >
      {children}
    </FilteredBusinessContext.Provider>
  );
}
