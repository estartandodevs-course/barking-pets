import { useState } from "react";
import * as C from "../../components/index";
import { hoteis } from "../../services/api";
import {
  SearchBar,
  searchTitle,
  searchTotal,
  searchTotalText,
  searchTotalCard,
  cardSearch,
  cardFooter,
  cardImage,
  cardText,
  cardLink,
  cardPaw,
} from "./search.module.scss";
import { states } from "../../services/mockLocations";

const SearchResults = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <C.Header />
      <C.Menu />
      <C.MenuDesktop />
      <h3 className={searchTitle}>{filter ? `Opções para ${filter}` : "  "}</h3>
      <C.Search classSearch={SearchBar} suggestions={states} />
      <C.Filter filter={filter} setFilter={setFilter} />
      <div className={searchTotal}>
        <p className={searchTotalText}>
          Resultados da pesquisa:
          {hoteis.length}
        </p>
      </div>
      <div className={searchTotalCard}>
        {hoteis.map(({ id, name, image, nota }) => {
          return (
            <C.CardHotel
              styles={{
                container: cardSearch,
                footer: cardFooter,
                picture: cardImage,
                text: cardText,
                link: cardLink,
                paw: cardPaw,
              }}
              key={id}
              name={name}
              image={image}
              nota={nota}
            >
              <C.Favorite />
            </C.CardHotel>
          );
        })}
      </div>

      <C.Pagination />
      <C.Footer />
    </>
  );
};

export default SearchResults;
