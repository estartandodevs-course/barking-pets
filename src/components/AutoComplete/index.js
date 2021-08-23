import { Link } from "react-router-dom";
import { locationHeart } from "../../assets/icons/index";
import "./styles.scss";

export function AutoComplete({
  setUserInput,
  showSuggestions,
  setShowSuggestions,
  userInput,
  filteredSuggestions,
}) {
  function onClick(event) {
    setUserInput(event.target.innerText);
    setShowSuggestions(false);
  }

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      return (
        <ul className="autocomplete__suggestion">
          {filteredSuggestions.map(({ municipio, uf, id }) => {
            return (
              <li
                key={id}
                className="autocomplete__suggestion__box-text"
                onClick={onClick}
                aria-hidden="true"
              >
                <Link
                  to={`/resultado_busca/?q=${uf} - ${municipio}`}
                  className="autocomplete__suggestion__box-link"
                >
                  <img
                    src={locationHeart}
                    alt=""
                    className="autocomplete__suggestion--coracao"
                  />
                  {`${uf} - ${municipio}`}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <div className="autocomplete__erro">
        <strong>Local Não Encontrado</strong>
      </div>
    );
  }
  return null;
}
