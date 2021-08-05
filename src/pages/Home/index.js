import React from "react";
import { patinhaBlack, ponto } from "../../assets/icons";

import { Card, Header, SearchComponent } from "../../components";

import { cards, hoteis } from "../../services/api";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <SearchComponent />
      <section id="cards-hoteis">
        <div className="title__card-section">
          <p className="title__card-section--text">Hotéis mais avaliados</p>
          <div className="title__card-section--linha" />
        </div>
        <div className="card-section">
          {hoteis.map(({ id, name, image, nota }) => {
            return (
              <Card key={id} className="home__card--hotel">
                <img src={image} alt="cachorro" className="home__card--image" />
                <div className="home__card__footer__hotel">
                  <p className="home__card__footer__hotel--text">
                    {name}
                    <a
                      href="top"
                      className="home__card__footer__hotel--text--link"
                    >
                      Saiba mais...
                    </a>
                  </p>
                  <div className="home__card__footer__hotel--patinha-black-and-nota">
                    <img
                      src={patinhaBlack}
                      alt="patinha"
                      className="home__card__footer__hotel--patinha-black"
                    />
                    <img src={ponto} alt="ponto" />
                    <p>{nota}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="cards-animais">
        <div className="title__card-section">
          <p className="title__card-section--text">Veja nossas dicas</p>
          <div className="title__card-section--linha" />
        </div>
        <div className="card-section">
          {cards.map(({ id, image, description }) => {
            return (
              <Card key={id} className="home__card">
                <img src={image} alt="cachorro" className="home__card--image" />
                <div className="home__card__footer">
                  <p className="home__card__footer--text">{description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
