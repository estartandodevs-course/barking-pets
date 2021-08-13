import { useState } from "react";
import * as C from "../../components/index";
import { cards, hoteis } from "../../services/api";
import "./styles.scss";

const SearchResults = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <C.Header />
      <C.Menu />
      <C.MenuDesktop />
      <h3 className="search-title">
        {filter ? `Opções para ${filter}` : "  "}
      </h3>
      <C.Search />

      <C.Filter filter={filter} setFilter={setFilter} />
      <section id="cards-hoteis" className="card-overflow">
        <div className="title-section">
          <p className="title-section--text">Resultados da pesquisa</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {hoteis.map(({ id, name, image, nota }) => {
            return (
              <C.CardHotel key={id} name={name} image={image} nota={nota} />
            );
          })}
        </div>
      </section>

      <section id="cards-animais" className="card-overflow">
        <div className="title-section">
          <p className="title-section--text">Veja nossas dicas</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {cards.map(({ id, image, description }) => {
            return (
              <C.CardTips key={id} image={image} description={description} />
            );
          })}
        </div>
      </section>
      <C.Footer />
    </>
  );
};

export default SearchResults;
