import { useState } from "react";
import * as C from "../../components/index";
import { states } from "../../services/mockLocations";
import "./styles.scss";

const SearchResults = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <h3 className="search-title">
        {filter ? `Opções para ${filter}` : "  "}
      </h3>
      <C.Search suggestions={states} />
      <C.Filter filter={filter} setFilter={setFilter} />
    </>
  );
};

export default SearchResults;
