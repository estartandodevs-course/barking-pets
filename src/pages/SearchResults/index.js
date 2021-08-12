import { useState } from "react";
import * as C from "../../components/index";
import "./styles.scss";

const SearchResults = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <h3 className="search-title">
        {filter ? `Opções para ${filter}` : "  "}
      </h3>
      <C.Search />
      <C.Filter filter={filter} setFilter={setFilter} />
    </>
  );
};

export default SearchResults;
