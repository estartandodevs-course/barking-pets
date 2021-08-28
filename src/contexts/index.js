import { createContext, useState } from "react";

export const FilteredBusinessContext = createContext({});

export function FiltredBusinessProvider({ children }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <FilteredBusinessContext.Provider
      value={{
        filteredSuggestions,
        setFilteredSuggestions,
        filteredLocations,
        setFilteredLocations,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </FilteredBusinessContext.Provider>
  );
}
