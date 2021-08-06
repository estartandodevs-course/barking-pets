import React from "react";
import { patinhaBlack, ponto } from "../../assets/icons";

import { Card } from "../../components";

import { cards, hoteis } from "../../services/api";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <section id="cards-hoteis">
        <div className="title-section">
          <p className="title-section--text">Hotéis mais avaliados</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {hoteis.map(({ id, name, image, nota }) => {
            return (
              <Card
                key={id}
                image={image}
                containerClass="card"
                classImages="card__image--hoteis"
              >
                <div className="card__footer">
                  <p className="card__footer--text">
                    {name}
                    <a href="top" className="card__footer--link">
                      Saiba mais...
                    </a>
                  </p>
                  <div className="card__footer--patinha-black-and-nota">
                    <img src={patinhaBlack} alt="patinha" />
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
        <div className="title-section">
          <p className="title-section--text">Veja nossas dicas</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {cards.map(({ id, image, description }) => {
            return (
              <Card
                key={id}
                image={image}
                containerClass="card"
                classImages="card__image--hoteis"
              >
                <div className="card__footer--animais">
                  <p className="card__footer--text--animais">{description}</p>
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
