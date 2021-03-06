import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import * as C from "../../components/index";
import { patinhaBrown, pontoBrown } from "../../assets/icons";

import * as S from "./search.module.scss";
import { FilteredBusinessContext } from "../../contexts/index";
import { states } from "../../services/mockLocations";

const totalPerPage = 6;

const SearchResults = () => {
  const [page, setPage] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [filter, setFilter] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    const busca = new URLSearchParams(search);
    setUserInput(busca.get("q"));
  }, []);

  const context = useContext(FilteredBusinessContext);
  const { filteredSuggestions } = context;

  return (
    <>
      <C.Header />
      <C.Menu />
      <C.MenuDesktop />
      <h3 className={S.searchTitle}>
        {filter ? `Opções para ${filter}` : "  "}
      </h3>
      <C.Search
        classSearch={S.SearchBar}
        suggestions={states}
        filter={filter}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <C.Filter filter={filter} setFilter={setFilter} />
      <div className={S.searchTotal}>
        <p className={S.searchTotalText}>
          {`Resultados da pesquisa: ${filteredSuggestions.length}`}
        </p>
      </div>
      <div className={S.searchContainer}>
        <div className={S.searchTotalCard}>
          {filteredSuggestions
            .slice(totalPerPage * page, (page + 1) * totalPerPage)
            .map(({ id, name, images, nota, valor }) => {
              return (
                <C.CardHotel
                  styles={{
                    container: S.cardSearch,
                    footer: S.cardFooter,
                    picture: S.cardImage,
                    text: S.cardText,
                    link: S.cardLink,
                    paw: S.cardPaw,
                  }}
                  key={id}
                  image={images[0]}
                >
                  <p className={S.cardText}>{name}</p>
                  <div className={S.searchNota}>
                    <img
                      src={patinhaBrown}
                      className={S.cardPaw}
                      alt="patinha"
                    />
                    <img src={pontoBrown} alt="ponto" />
                    <p className={S.cardGrade}>{nota}</p>
                  </div>
                  <div className={S.searchPrice}>
                    <p>{valor}</p>
                    <Link
                      to={`/description_hotel/${id}`}
                      className="card__footer--link"
                    >
                      Ver mais...
                    </Link>
                  </div>
                  <C.Favorite classFavorite={S.cardFavorite} />
                </C.CardHotel>
              );
            })}
        </div>
      </div>

      <C.Pagination
        pageCount={Math.ceil(filteredSuggestions.length / totalPerPage)}
        onPageChange={({ selected }) => {
          setPage(selected);
        }}
      />
      <p className={S.searchTotalText}>
        {`${page * totalPerPage + 1} - ${
          (page + 1) * totalPerPage > filteredSuggestions.length
            ? filteredSuggestions.length
            : (page + 1) * totalPerPage
        } de
        ${filteredSuggestions.length}
        resultados`}
      </p>
      <C.Footer classFooter={S.searchFooter} />
    </>
  );
};

export default SearchResults;
